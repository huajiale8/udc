<template>
    <div>
        <div class="foot">
            Copyright ©苏州新看点信息技术有限公司 {{ str }}
        </div>
    </div>
</template>
<script>
import {ipc} from "@/http/api";

export default {
    data() {
        return {
            str: '沪ICP备16048060号-1'
        };
    },
    created() {
        let that = this
        ipc({headers: that.domain}).then((res) => {
            sessionStorage.setItem('ipc', res.data.content.icp)
            that.ipc = res.data.content.icp
            console.log(res)
        })
    },
    methods: {}
}
</script>
<style scoped lang="scss">
// 底部
.foot {
    height: 56px;
    width: 100%;
    background: #1a1a1a;
    line-height: 56px;
    text-align: center;
    color: white;
    bottom: 0;
    font-size: 10px;
    margin-top: 10rem;
}
</style>