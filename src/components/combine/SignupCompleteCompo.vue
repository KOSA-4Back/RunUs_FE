<template>
    <v-container fluid class="fill-height d-flex align-center justify-center pa-0">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="auto">
                <v-card class="pa-5 d-flex flex-column align-center justify-center text-center" rounded="lg" width="300" height="300" color="#e3f2fd">
                    <v-icon class="check-icon" size="130">mdi-check-circle</v-icon>
                    <h2 class="mt-4">회원가입 완료!</h2>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SignupCompleteModal',
};
</script>

<style scoped>
.fill-height {
    height: 100vh;
}

.d-flex {
    display: flex !important;
}

.align-center {
    align-items: center !important;
}

.justify-center {
    justify-content: center !important;
}

.text-center {
    text-align: center !important;
}

.pa-0 {
    padding: 0 !important;
}

.mt-4 {
    margin-top: 16px;
}

.check-icon {
    color: #3897db !important; /* Vuetify의 성공 색상 */
}
</style>
