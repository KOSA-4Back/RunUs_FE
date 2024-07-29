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
.profile-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
}
.profile-image {
    width: 200px;
    border-radius: 50%;
}
.edit-icon {
    position: absolute;
    bottom: 0;
    right: 20%;
    width: 24px;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    padding: 2px;
}
</style>
