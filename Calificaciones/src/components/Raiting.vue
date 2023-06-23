<script setup>
    import { ref, defineEmits } from 'vue';
    
    const currentRating = ref(0);

    const totalEstrellas = 5;

    defineEmits(['updateRating']);

    const updateRating = (rating) => {
        currentRating.value = rating;

        emit('updateRating', rating)
    }
</script>

<template>
    <div class="star-rating">
        <span
            v-for="estrellas in totalEstrellas"
            :key="estrellas"
            class="estrellas"
            :class="{'filled': estrellas <= currentRating}"
            @click="updateRating(estrellas)"
        >
            ★
        </span>
    </div>
</template>

<style scoped>
  .star-rating {
    color: white; 
    font-size: 24px;
  }

  .estrellas {
    cursor: pointer;
  }

  .filled {
    color: yellow;
  }
</style>