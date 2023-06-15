<template>
    <div>
        <el-header>
            <div @click="$router.push('/')">
                <img src="../assets/image/pc/pag1-title-top-left-logo.png" alt="">
            </div>
            <div>
                <P @click="skip()">品牌资源</P>
                <P @click="partnerSkip()">合作伙伴</P>
            </div>
        </el-header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        this.name = this.$route.name
        console.log(this.name)
    },
    methods: {
        skip() {
            if (this.name === 'About') {
                alert('已在当前页面')
                // return
            } else {
                this.$router.push('/About')
            }
        },
        partnerSkip() {
            if (this.name === 'partner') {
                alert('已在当前页面')
                // return
            } else {
                this.$router.push('/partner')
            }
        }
    },
}
</script>
<style scoped lang="scss">
.el-header {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
    left: 0;
    background-color: black;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 64rem;
    height: 64rem !important;
    display: flex;
    justify-content: space-between;

    div:nth-child(1) {
        width: 134rem;
        height: 27rem;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            margin-top: 19rem;
            margin-left: 30rem;
        }
    }

    div:nth-child(2) {
        display: flex;
        font-size: 20rem;

        p:nth-child(1) {
            margin-right: 30rem;
            line-height: 64rem;
        }

        p:nth-child(2) {
            margin-right: 20rem;
            line-height: 64rem;
        }
    }

    p:hover {
        color: #00b2e2;
        cursor: pointer;
    }
}
</style>