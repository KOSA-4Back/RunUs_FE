<template>
    <div>
        <h1>WebSocket with Vue.js</h1>
        <input v-model="name" placeholder="Enter your name" />
        <button @click="sendName">Send Name</button>
        <p>Received: {{ greeting }}</p>
    </div>
</template>

<script>
// 임포트 방식 확인
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export default {
    data() {
        return {
            stompClient: null,
            name: '',
            greeting: '',
        };
    },
    mounted() {
        this.connect();
    },
    methods: {
        connect() {
            const socket = new SockJS('http://localhost:8081/ws');
            this.stompClient = Stomp.over(socket); // Stomp 객체 사용
            this.stompClient.connect({}, (frame) => {
                console.log('Connected: ' + frame);
                this.stompClient.connect(
                    {},
                    (frame) => {
                        console.log('Connected: ' + frame);
                        this.stompClient.subscribe('/topic/greetings', (greeting) => {
                            this.greeting = JSON.parse(greeting.body).content;
                        });
                    },
                    (error) => {
                        console.error('Connection error: ', error);
                        setTimeout(() => {
                            this.connect(); // 재연결 시도
                        }, 5000); // 5초 후 재연결 시도
                    },
                );
            });
        },
        sendName() {
            this.stompClient.send('/app/hello', {}, JSON.stringify({ name: this.name }));
        },
    },
};
</script>
