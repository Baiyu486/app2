<template>
<div class="header">

    <slot />
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 60px;
    background: palevioletred;
    padding: 0px 20px;
    text-align: center;
    line-height: 60px;
}
</style>
