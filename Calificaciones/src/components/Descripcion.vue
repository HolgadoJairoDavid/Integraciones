<script setup>
    import { ref, onMounted } from 'vue';

    import Raiting from './Raiting.vue';

    const clasificacion = ref(0);
    const comentario = ref('');
    const comentariosGuardados = ref([])

    const actualizarClasificacion = rating => {
        clasificacion.value = rating
    }

    const guardarComentario = () => {
        comentariosGuardados.value.push(comentario.value);
        comentario.value = '';

        guardarComentsStorage(comentariosGuardados.value)
    }

    const guardarComentsStorage = comentarios => {
        localStorage.setItem('comentarios', JSON.stringify(comentarios))
    }

    const obtenerCometStorage = () => {
        const storedComentarios = localStorage.getItem('comentarios');
        if (storedComentarios) {
            comentariosGuardados.value = JSON.parse(storedComentarios)
        }
    }

    onMounted(() => {
        obtenerCometStorage();
    })

</script>

<template>
    <div>
        <h1>Esta es la vista de Descripción</h1>
        <h2>Clasificación</h2>
        <Raiting :rating="clasificacion" @update-rating="actualizarClasificacion"/>
        <h2>Comentarios</h2>
        <form @submit.prevent="guardarComentario">
            <textarea v-model="comentario" rows="4" cols="50"></textarea>
            <button type="submit">Guardar Comentario</button>
        </form>
        <div v-for="(comentarioGuardado, index) in comentariosGuardados" class="comentario-guardado">
            <h3>Comentario Guardado {{ index + 1 }}:</h3>
            <p>{{ comentarioGuardado }}</p>
        </div>
    </div>
</template>

<style scoped>
  .comentario-guardado {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
  }
</style>