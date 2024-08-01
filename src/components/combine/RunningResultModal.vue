<template>
  <v-dialog v-model="localVisible" max-width="300">
    <v-card class="result-card">
      <div id="particles-js"></div> <!-- 폭죽 효과를 위한 캔버스 추가 -->
      <v-card-title class="headline">
        <v-spacer></v-spacer>
        <v-icon @click="close" class="close-icon">mdi-close</v-icon>
      </v-card-title>
      <v-card-text class="result-content">
        <div class="result-item">
          <strong>총 거리:</strong> <span class="result-value">{{ formattedDistance }} km</span>
        </div>
        <div class="divider"></div>
        <div class="result-item">
          <strong>총 시간:</strong> <span class="result-value">{{ formattedTime }}</span>
        </div>
        <div class="divider"></div>
        <div class="result-item">
          <strong>총 칼로리:</strong> <span class="result-value">{{ formattedCalories }}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import particlesJS from 'particles.js';

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      localVisible: this.isVisible,
    };
  },
  watch: {
    isVisible(val) {
      this.localVisible = val;
      if (val) {
        this.initParticles();
      }
    },
    localVisible(val) {
      this.$emit('update:isVisible', val);
    },
  },
  computed: {
    formattedDistance() {
      return (this.distance / 1000).toFixed(1);
    },
    formattedTime() {
      return this.time;
    },
    formattedCalories() {
      return this.calories;
    },
  },
  methods: {
    close() {
      this.localVisible = false;
    },
    initParticles() {
      particlesJS.load('particles-js', '/path/to/particles-config.json', function() {
        console.log('particles.js loaded - callback');
      });
    },
  },
};
</script>

<style scoped>
.result-card {
  background-color: rgba(255, 255, 255, 0.9); /* 불투명 배경 */
  border-radius: 15px; /* 모서리 둥글게 */
  position: relative; /* position을 relative로 설정 */
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* 콘텐츠 뒤에 배치 */
}

.result-content {
  text-align: center;
  font-size: 18px;
  z-index: 1; /* 폭죽 효과 위에 배치 */
  position: relative; /* position을 relative로 설정 */
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 10px 0;
}

.result-value {
  font-size: 18px;
  font-weight: bold;
  color: red;
}

.divider {
  border-bottom: 1px solid #ddd;
  margin: 10px 0;
}

.close-icon {
  cursor: pointer;
}
</style>
