<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter();

    const irADescripcion = (imagen) => {
        router.push({ name: 'Descripcion', params: { imagen }})
    };

    import Imagen1 from '../assets/img/guitarra_01.jpg'
    import Imagen2 from '../assets/img/guitarra_02.jpg'
    import Imagen3 from '../assets/img/guitarra_03.jpg'
    import Imagen4 from '../assets/img/guitarra_04.jpg'
    import Imagen5 from '../assets/img/guitarra_05.jpg'
    import Imagen6 from '../assets/img/guitarra_06.jpg'

    const imagenes = {
        Img1: Imagen1,
        Img2: Imagen2,
        Img3: Imagen3,
        Img4: Imagen4,
        Img5: Imagen5,
        Img6: Imagen6,
    }

</script>

<template>
    <div>
        <h1>Hola, esta es la vista de Home</h1>
        <div class="image-container">
            <div v-for="imagen in imagenes" class="image-item">
                <div class="image-box">
                    <img :src="imagen" class="image">
                    <button class="button-play">Jugar</button>
                    <button class="button-mas" @click="irADescripcion(imagen)">Más</button>
                </div>
            </div>
        </div>
        <button @click="irADescripcion">Voy a Descripción</button>
    </div>
</template>

<style scoped>
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-item {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
}

.image-box {
  position: relative;
}

.image {
  width: 100%;
  height: auto;
}

.button-container {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.button-play,
.button-mas {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.button-mas {
  background-color: #2196f3;
}
</style>