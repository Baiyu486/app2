<template>
<div class="list" :class="{row:flag}">
    <dl v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
        <dt>
            <img :src="item.img" alt />
        </dt>
        <dd>
            <p>标题:{{item.title}}</p>
            <p>描述:{{item.cword}}</p>
            <h5>单价:{{item.price}}</h5>
            <h5>销量:{{item.num}}</h5>
            <button>点击购买</button>
        </dd>
    </dl>
</div>
</template>

<script>
export default {
    name: "List",
    props: {
        list: Array,
        flag: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        toDetail(id) {
            this.$router.push(`/detail/index/${id}`);
        }
    },
}
</script>

<style>

</style>>
