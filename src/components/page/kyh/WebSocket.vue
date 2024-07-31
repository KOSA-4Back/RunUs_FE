// WebSocket.vue
<template>
    <div>
        <!-- WebSocket 상태나 메시지를 표시할 수 있는 UI 요소 -->
        <p>{{ message }}</p>
    </div>
</template>

<script>
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

export default {
    data() {
        return {
            stompClient: null,
            message: '',
        };
    },
    methods: {
        connect() {
            const socket = new SockJS('http://192.168.230.30:8081/ws');
            this.stompClient = new Client({
                webSocketFactory: () => socket,
                reconnectDelay: 5000,
                onConnect: () => {
                    console.log('Connected');
                    this.stompClient.subscribe('/topic/messages', (message) => {
                        this.message = message.body;
                        console.log('Message received: ', message.body);
                    });
                },
                onStompError: (frame) => {
                    console.error('Broker reported error: ', frame.headers['message']);
                    console.error('Additional details: ', frame.body);
                },
                onWebSocketClose: () => {
                    console.log('WebSocket connection closed');
                },
                onWebSocketError: (error) => {
                    console.error('WebSocket error: ', error);
                },
            });

            this.stompClient.activate();
        },
    },
    mounted() {
        this.connect();
    },
    beforeDestroy() {
        if (this.stompClient) {
            this.stompClient.deactivate();
        }
    },
};
</script>
