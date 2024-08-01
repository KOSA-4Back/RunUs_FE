<template>
    <div class="contain">
       <div class="map-container">
           <div id="map"></div>
       </div>
   </div>
   </template>
   
<script>
export default {
    name: 'KakaoMapItem',
    props: {
        latitude: {
            type: Number,
            default: 37.5665,
        },
        longitude: {
            type: Number,
            default: 126.978,
        },
        targetDistance: {
            type: [Number, String],
            default: null,
        },
        polylinePath: {
            type: Array,
            default: () => [],
        },
        isTracking: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            map: null,
            marker: null,
            polyline: null,
            path: [], // 폴리라인 경로를 저장할 배열
            totalDistance: 0,
            polylineDrawing: false,
            scriptLoaded: false,
            timer: null,
            startTime: null,
            elapsedTime: 0,
            currentLatitude: this.latitude,
            currentLongitude: this.longitude,
            internalTargetDistance: Number(this.targetDistance),
            watchId: null,
        };
    },
    watch: {
        targetDistance(newDistance) {
            this.internalTargetDistance = Number(newDistance);
            if (this.internalTargetDistance !== null) {
                this.startPolylineDrawing();
            }
        },
        polylinePath(newPath) {
            this.path = newPath.map((coord) => new window.kakao.maps.LatLng(coord.lat, coord.lng));
            if (this.map && this.polyline) {
                this.updatePolyline();
            }
        },
        latitude(newLat) {
            this.currentLatitude = newLat;
            if (this.map) {
                this.updateMarker();
            }
        },
        longitude(newLng) {
            this.currentLongitude = newLng;
            if (this.map) {
                this.updateMarker();
            }
        },
        isTracking(newTracking) {
            if (newTracking) {
                this.startPolylineDrawing();
            } else {
                this.stopPolylineDrawing();
            }
        },
    },
    mounted() {
        this.loadScript();
    },
    methods: {
        loadScript() {
            if (this.scriptLoaded) return;
            const script = document.createElement('script');
            script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=7b1dc16aec91295ffe2154bb5b62e9f6&autoload=false';
            script.onload = () => {
                this.scriptLoaded = true;
                if (this.$el && window.kakao) {
                    window.kakao.maps.load(() => {
                        this.initializeMap();
                    });
                }
            };
            script.onerror = () => {
                console.error('Kakao Maps SDK 로드 중 오류 발생');
            };
            document.head.appendChild(script);
        },
        initializeMap() {
            if (!window.kakao || !window.kakao.maps) {
                console.error('Kakao Maps SDK가 올바르게 로드되지 않았습니다.');
                return;
            }

            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(this.currentLatitude, this.currentLongitude),
                level: 3,
            };

            this.map = new window.kakao.maps.Map(container, options);
            this.updateMarker();
            this.initializeLocation();
        },
        updateMarker() {
            const position = new window.kakao.maps.LatLng(this.currentLatitude, this.currentLongitude);
            if (this.marker) {
                this.marker.setMap(null);
            }
            this.marker = new window.kakao.maps.Marker({
                position: position,
                map: this.map,
            });
            this.map.setCenter(position);
        },
        initializeLocation() {
            if ('geolocation' in navigator) {
                this.watchId = navigator.geolocation.watchPosition(
                    (pos) => {
                        const newLatLng = new window.kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                        this.currentLatitude = pos.coords.latitude;
                        this.currentLongitude = pos.coords.longitude;
                        if (this.map) {
                            this.updateMarker();
                            if (this.polylineDrawing) {
                                this.addPositionToPath(newLatLng);
                                this.updatePolyline();
                            }
                        }
                    },
                    (err) => {
                        console.error(`위치 정보를 가져오는 데 실패했습니다: ${err.message}`);
                        this.currentLatitude = 33.450701;
                        this.currentLongitude = 126.570667;
                        if (this.map) {
                            this.updateMarker();
                        }
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0,
                    },
                );
            } else {
                alert('브라우저가 지원하지 않습니다.');
                this.currentLatitude = 33.450701;
                this.currentLongitude = 126.570667;
                if (this.map) {
                    this.updateMarker();
                }
            }
        },
        addPositionToPath(newLatLng) {
            this.path.push(newLatLng);
            if (this.path.length > 1) {
                this.totalDistance += this.calculateDistance(this.path[this.path.length - 2], newLatLng);
            }
        },
        updatePolyline() {
            if (!this.polyline) {
                this.initializePolyline();
            } else {
                this.polyline.setPath(this.path);
            }
            this.$emit('update-distance', this.totalDistance);
        },
        initializePolyline() {
            if (this.map) {
                this.polyline = new window.kakao.maps.Polyline({
                    map: this.map,
                    path: this.path,
                    strokeWeight: 4,
                    strokeColor: '#0d6efd',
                    strokeOpacity: 0.8,
                    strokeStyle: 'dashed',
                });
            }
        },
        calculateDistance(latlng1, latlng2) {
            const R = 6371e3; // 지구의 반경 (미터)
            const lat1 = latlng1.getLat();
            const lon1 = latlng1.getLng();
            const lat2 = latlng2.getLat();
            const lon2 = latlng2.getLng();
            const dLat = this.degreesToRadians(lat2 - lat1);
            const dLon = this.degreesToRadians(lon2 - lon1);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.degreesToRadians(lat1)) * Math.cos(this.degreesToRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        },
        degreesToRadians(degrees) {
            return degrees * (Math.PI / 180);
        },
        startPolylineDrawing() {
            if (this.polylineDrawing) return;

            this.polylineDrawing = true;
            this.totalDistance = 0;
            this.path = [];
            this.elapsedTime = 0;
            this.startTime = Date.now();
            if (!this.polyline) {
                this.initializePolyline();
            }
            this.timer = setInterval(() => {
                this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
                // 업데이트된 시간을 부모 컴포넌트로 전달
                this.$emit('update-time', this.elapsedTime);
            }, 1000);
        },
        stopPolylineDrawing() {
            this.polylineDrawing = false;
            clearInterval(this.timer);
            this.timer = null;
        },
    },
    beforeDestroy() {
        if (this.watchId !== null) {
            navigator.geolocation.clearWatch(this.watchId);
        }
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
};
</script>

<style scoped>
.contain {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.map-container {
    width: 390px;
    height: 518px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px; /* Optional: adds rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: adds a subtle shadow */
}

#map {
    width: 370px;
    height: 510px;
}
</style>

