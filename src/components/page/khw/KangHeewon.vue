<template>
    <div>
        <!-- props를 통해 color, elevation, width, height 값을 전달 -->
        <RoundButton color="secondary" :elevation="3" :width="400" :height="80">
            <!-- slot을 통해서 기본 텍스트를 대체 -->
            Hello
        </RoundButton>
    </div>
</template>

<script>
import RoundButton from '../../atoms/item/button/RoundButtonItem.vue';

export default {
    components: {
        RoundButton,
    },
};
</script>
