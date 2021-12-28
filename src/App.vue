<template>
  <nav id="nav">
    <router-link to="/">
      <div id="home">
        <img src="@/assets/logo.svg" alt="logo" />
        <div></div>
      </div>
    </router-link>
    <div class="utilities">
      <div id="theme-select">
        <img src="@/assets/icon-moon.svg" alt="select dark theme" />
      </div>
      <div id="avatar">
        <img src="@/assets/image-avatar.jpg" alt="profile picture" />
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

store.dispatch("fetchInvoices");
</script>
