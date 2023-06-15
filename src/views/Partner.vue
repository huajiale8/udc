<template>
    <div class="partner">
        <div class="pc">
            <el-container>
                <CommonHeader></CommonHeader>
                <el-main class="partner-main">
                    <div class="img">
                        <img src="../assets/image/pc/platform/page-d-banner.png" alt="">
                    </div>
                    <div class="outside">
                        <div class="headline">合作伙伴</div>
                        <div class="text-content">
                            目前新看点已累计与中小商家签订1200份订单合同，与数十家品牌确定合作伙伴关系。<br>
                            点击鼠标右键选择“图片另存为...”即可下载当前样式图片，点击图片即可下载当前标志图片及相关素材包。
                        </div>
                        <div class="flex">
                            <div class="outside-img" v-for="(item,index) in gitList" :key="index">
                                <div class="partner-image">
                                    <a :href="item.source">
                                        <img :src="item.pic" alt="">
                                    </a>
                                </div>
                                <div class="text">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
            <CommonFoot></CommonFoot>
        </div>
        <div class="phone">
            <div class="head">
                <div @click="$router.push('/')">
                    <img src="../assets/image/phone/app-pag-a-title-top-btn-logo.png" alt="">
                </div>
                <div @click="state=true">
                    <img v-show="state===false" src="../assets/image/phone/app-pag-a-menu-normal.png" alt="">
                </div>
            </div>
            <!-- 顶部图片 -->
            <div class="top-img">
                <img src="../assets/image/phone/app-pag-c-banner-b.png" alt="">
            </div>
            <div class="partner-outside">
                <p class="subtitle">
                    合作伙伴
                </p>
                <p class="text-content">
                    目前新看点已累计与中小商家签订1200份订单合同，与数十家品牌确定合作伙伴关系。<br>
                    点击鼠标右键选择“图片另存为...”即可下载当前样式图片，点击图片即可下载当前标志图片及相关素材包。
                </p>
                <div class="flex">
                    <div class="outside-img" v-for="(item,index) in gitList" :key="index">
                        <div class="outside-img-A">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="outside-text">
                            <a :href="item.source" target="_blank">
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="blank"></div>
            </div>
            <FootCommon></FootCommon>
            <!-- 弹窗 -->
            <div class="pop-up" v-show="state">
                <div class="head">
                    <div>
                        <img src="../assets/image/phone/app-pag-a-title-top-btn-logo.png" alt="">
                    </div>
                    <div @click="state=!state">
                        <img src="../assets/image/phone/app-pag-b-menu-pressed.png" alt="">
                    </div>
                </div>
                <!-- 品牌资源 -->
                <div class="text-resource" @click="$router.push('/about')">
                    品牌资源
                </div>
                <div class="text-resource" @click="state=!state">
                    合作伙伴
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {partner} from '@/http/api'
import CommonHeader from '@/component/CommonHeader.vue'
import CommonFoot from '@/component/CommonFoot.vue'
import FootCommon from '@/component/phone/FootCommon.vue'

export default {
    data() {
        return {
            gitList: [],
            state: false,
            params: {
                page: 1,
                pageSize: 10,
                type: 1,
            },
        }
    },
    created() {
        let that = this
        partner(that.params).then((res) => {
            console.log(res.data.content.data)
            that.gitList = res.data.content.data
        })
    },
    methods: {},
    components: {CommonHeader, CommonFoot, FootCommon},
}
</script>
<style lang="scss" scoped>
@import '../assets/css/pc/common.scss';
@import '../assets/css/phone/common.scss';

@media screen and (min-width: 500px) {
    .phone {
        display: none;
    }
    .pc {
        display: block;
    }
}

@media screen and (max-width: 500px) {
    .pc {
        display: none;
    }
    .phone {
        display: block;
    }
}
</style>