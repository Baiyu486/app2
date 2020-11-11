<template>
<div class="footer">
    <router-link v-for="(item,index) in links" :key="index" :to="item.path" tag="b">{{item.name}}</router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            link: [{
                path: "/home",
                name: "首页"
            }, {
                path: "/them",
                name: "分类",
            }, {
                path: "/search",
                name: "搜索",
            }, {
                path: "/shop",
                name: "购物车",
            }, {
                path: "/my",
                name: "我的",
            }]
        }
    }
}
</script>

<style>

</style>>
