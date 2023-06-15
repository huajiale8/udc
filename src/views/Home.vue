<template>
    <div class="home">
        <div class='home-pc'>
            <div class="left">
                <div style="height: 36.85%"></div>
                <div class="content">
                    <!--                    <div class="top">-->
                    <div>
                        <div class="content-header">
                            <div></div>
                            <div> 818DESIGN</div>
                        </div>
                        <p @click="$router.push('/about')">
                            品牌资源
                        </p>
                        <p @click="$router.push('/partner')">
                            合作伙伴
                        </p>
                    </div>

                    <!--                    </div>-->
                    <div>
                        <div>
                            苏州新看点信息技术有限公司 - 产品设计中心
                        </div>
                        <div>
                            <span> {{ ipc }} </span>
                            <span> Copyright ©苏州新看点信息技术有限公司 </span>
                        </div>
                    </div>

                </div>
                <div style="height: 11.67%"></div>
            </div>
            <!-- 右侧盒子 -->
            <div class="right">
                <img src="../assets/image/pc/home-image-a.jpg" alt="">
                <img src="../assets/image/pc/home-image-b.jpg" alt="">
                <img src="../assets/image/pc/home-image-c.jpg" alt="">
                <img src="../assets/image/pc/home-image-d.jpg" alt="">
            </div>
        </div>
        <!-- 移动端 -->
        <div class="phone">
            <div class="middle">
                <div class="image">
                    <div>
                        <img src="../assets/image/phone/app-home-image-list-a.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/image/phone/app-home-image-list-b.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/image/phone/app-home-image-list-c.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/image/phone/app-home-image-list-d.png" alt="">
                    </div>
                </div>
                <div class="flex-direction">
                    <div class="center">
                        <div class="content">
                            <div>
                                <img src="../assets/image/phone/app-home-logo.png" alt="">
                            </div>
                            <div>
                                818DESIGN
                            </div>
                        </div>
                        <div class="text" :class="[flag===true?'active':'']" @click="jump()">
                            <span> 品牌资源 </span>
                        </div>
                        <div class="text" :class="[second===true?'active':'']" @click="jumpPartner()">
                            合作伙伴
                        </div>
                    </div>
                    <div class="foot">
                        <p>
                            苏州新看点信息技术有限公司 - 产品设计中心
                        </p>
                        <p>
                            Copyright ©苏州新看点信息技术有限公司
                            {{ ipc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ipc} from '@/http/api'

export default {
    data() {
        return {
            flag: false,
            second: false,
            domain: '',
            ipc: '沪ICP备16048060号-1',

        }
    },

    created() {
        let that = this
        that.domain = window.location.host
        // ipc请求数据
        ipc({headers: that.domain}).then((res) => {
            sessionStorage.setItem('ipc', res.data.content.icp)
            that.ipc = sessionStorage.getItem('ipc')
        })

    },
    methods: {
        jump() {
            this.flag = true
            this.second = false
            this.$router.push('/about')
        },
        jumpPartner() {
            this.second = true
            this.flag = false
            this.$router.push('/partner')
        },

    },
    components: {},
}
</script>
<style lang='scss' scoped>

.home {
    height: 100%;
}

html, body {
    height: 100%;
}

@import '../assets/css/pc/common.scss';
@import '../assets/css/phone/home.scss';
@media screen and (min-width: 500px) {
    .phone {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .home-pc {
        display: none;
    }
    .phone {
        display: block;
    }
}
</style>
