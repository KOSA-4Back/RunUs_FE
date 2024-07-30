<template>
    <div class="profile-pic">
        <button :class="buttonClass" @click="selectProfileImage">
            <img :src="imageUrl" alt="Profile" class="profile-image" />
            <img :src="require('@/assets/edit.png')" alt="Edit" class="edit-icon" />
        </button>
        <input type="file" ref="fileInput" @change="onFileChange" style="display: none" accept="image/*" />
    </div>
</template>

<script>
export default {
    props: {
        buttonClass: {
            type: String,
            default: 'profile-button',
        },
        imageUrl: {
            type: String,
            default: require('@/assets/runus_logo.png'),
        },
    },
    methods: {
        selectProfileImage() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.$emit('image-changed', e.target.result);
                };
                reader.readAsDataURL(file);
            }
        },
    },
};
</script>

<style scoped>
.profile-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.profile-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    width: 150px; /* 고정된 너비 */
    height: 150px; /* 고정된 높이 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-image {
    width: 100%; /* 버튼 크기에 맞게 조정 */
    height: 100%; /* 버튼 크기에 맞게 조정 */
    border-radius: 50%;
    object-fit: cover; /* 이미지의 비율을 유지하면서 버튼 크기에 맞게 조정 */
}

.edit-icon {
    position: absolute;
    bottom: 0;
    right: 10%; /* 위치 조정 */
    width: 24px;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    padding: 2px;
}
</style>
