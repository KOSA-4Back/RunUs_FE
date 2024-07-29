<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    name: 'KakaoMapItem',
    props: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
        polylinePath: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            map: null,
            marker: null,
            polyline: null,
            scriptLoaded: false,
        };
    },
    watch: {
        latitude() {
            this.updateMarker();
        },
        longitude() {
            this.updateMarker();
        },
        polylinePath(newPath) {
            if (this.polyline) {
                this.polyline.setPath(newPath);
            } else {
                this.initializePolyline(newPath);
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
            const container = this.$el.querySelector('#map');
            const options = {
                center: new window.kakao.maps.LatLng(this.latitude, this.longitude),
                level: 3,
            };
            this.map = new window.kakao.maps.Map(container, options);
            this.updateMarker();
            if (this.polylinePath.length > 0) {
                this.initializePolyline(this.polylinePath);
            }
        },
        updateMarker() {
            const position = new window.kakao.maps.LatLng(this.latitude, this.longitude);
            if (this.marker) {
                this.marker.setMap(null);
            }
            this.marker = new window.kakao.maps.Marker({
                position: position,
                map: this.map,
            });
            this.map.setCenter(position);
        },
        initializePolyline(path) {
            this.polyline = new window.kakao.maps.Polyline({
                path: path,
                strokeWeight: 4,
                strokeColor: '#0d6efd',
                strokeOpacity: 0.8,
                strokeStyle: 'dashed',
            });
            this.polyline.setMap(this.map);
        },
    },
};
</script>

<style scoped>
#map {
    width: 300px;
    height: 400px;
}
</style>
