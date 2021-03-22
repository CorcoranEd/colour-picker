<template>
  <div class="flex flex-col h-screen max-h-screen overflow-hidden">
    <top-nav></top-nav>
    <div class="flex flex-row flex-1 overflow-hidden">
      <div class="flex flex-col flex-1 w-3/4">
        <image-view class="flex-1"></image-view>
        <comparison-tray class="flex-0"></comparison-tray>
      </div>
      <option-bar class="flex-0 w-1/4"></option-bar>
    </div>
  </div>
</template>

<script>
export default {}
</script>
