<template>
  <div id="nav">
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
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 1280px) {
  #app {
    flex-direction: row;
  }
}
</style>
