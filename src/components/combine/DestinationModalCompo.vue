<template>
    <v-dialog v-model="localIsVisible" max-width="400px">
      <v-card>
        <v-card-title class="headline">훌륭해요!</v-card-title>
        <v-card-text>
          <div class="result-item">
            <span>총 거리</span> <span class="result-value">{{ distance }} km</span>
          </div>
          <div class="result-item">
            <span>총 시간</span> <span class="result-value">{{ time }}</span>
          </div>
          <div class="result-item">
            <span>총 칼로리</span> <span class="result-value">{{ calories }}</span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="closeModal">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "DestinationModal",
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
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        localIsVisible: this.isVisible,
      };
    },
    watch: {
      isVisible(newVal) {
        this.localIsVisible = newVal;
      },
      localIsVisible(newVal) {
        this.$emit('update:isVisible', newVal);
      }
    },
    methods: {
      closeModal() {
        this.localIsVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .result-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .result-value {
    font-weight: bold;
    color: red;
  }
  </style>
  