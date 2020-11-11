<template>
<div>
    <MyHeader>
        <span>首页</span>
    </MyHeader>
    <main>
        <List :list="list" />
    </main>
    <MyFooter />
</div>
</template>

<script>
import List from "@/components/List";

export default {
    components: {
        List,
    },
    created() {
        this.$http.get("/api/list").then((data) => {
            console.log(data.data);
            this.list = data.data;
        })
    },
    data() {
        return {
            list: [],
        }
    }
}
</script>

<style>

</style>>
