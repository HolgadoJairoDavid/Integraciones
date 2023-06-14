<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<template>
  <nav class="bg-gray-700 w-full">
    <div class="max-w-screen-xl mx-auto p-3 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <img src="../assets/img/HenryMoon.JPG" alt="HenryMoon Logo" class="h-14">
      </div>
      <ul :class="menuOpen ? 'block' : 'hidden'" class="md:flex md:flex-row md:w-auto md:items-center items-center space-x-4 text-white text-xl flex-row justify-end md:space-y-0 md:space-x-4">
        <li class="flex items-center">
          <img src="../assets/img/user.JPG" alt="user Logo" class="w-14 m-2">
          <router-link to="'/'" class="md:mx-2 text-white hover:text-yellow-300 cursor-pointer">My Profile</router-link>
        </li>
        <li class="text-center">
          <router-link to="/" class="text-white hover:text-yellow-300 cursor-pointer">Home</router-link>
        </li>
        <li class="text-center">
          <router-link to="/about" class="text-white hover:text-yellow-300 cursor-pointer">About</router-link>
        </li>
        <li class="text-center">
          <router-link to="/logout" class="text-white hover:text-yellow-300 cursor-pointer">Logout</router-link>
        </li>
      </ul>
      <button @click="toggleMenu" type="button" class="md:hidden text-white hover:text-yellow-300 cursor-pointer">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>











  