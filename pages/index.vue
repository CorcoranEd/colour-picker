<template>
  <div>
    <top-nav class="fixed top-0 right-0 w-full bg-white"></top-nav>

    <div class="h-screen flex flex-row">
      <image-view class="max-h-full w-3/4 overflow-hidden"> </image-view>
      <option-bar class="w-1/4 overflow-scroll"></option-bar>
    </div>

    <comparison-tray
      class="fixed bottom-0 left-0 w-3/4 bg-white"
    ></comparison-tray>
  </div>
</template>

<script>
export default {}
</script>
