<template>
<div class="base-container">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
.base-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
