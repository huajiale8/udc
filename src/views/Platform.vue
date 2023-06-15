<template>
    <div class="platform">
        <div class="pc">
            <el-container>
                <CommonHeader></CommonHeader>
                <el-container>
                    <CommonAside :openeds="openeds"></CommonAside>
                    <el-main>
                        <div class="main">
                            <div id="top">
                                <img src="../assets/image/pc/platform/pag-a-banner.png" alt="">
                            </div>
                            <div class="content">
                                <p class="headline">
                                    818品牌指引
                                </p>
                                <p class="text-content">
                                    818XR品牌形象基于818XR的产品理念，包含于相关网页设计、子品牌设计、周边产品设计中。
                                    818XR品牌致力于帮助各行各业的构建尖端内容、交互式体验和沉浸式虚拟世界,
                                    通过818XR的云端资产标准化服务，AR、VR的3D美术资产可以快速进引擎，
                                    上传文件直接转成适合Web环境的glTF和压缩纹理格式并发布到CDN，迭代过程也高效轻松。
                                </p>
                                <p id="sign" class="subtitle">
                                    818品牌标志
                                </p>
                                <p class="text-content">
                                    此页可下载包含818品牌LOGO、818子业务品牌LOGO以及品牌使用规范手册。
                                    点击鼠标右键选择“图片另存为...”即可下载当前样式图片，点击图片即可下载当前标志素材包。
                                </p>
                                <div class="image">
                                    <a href="./static/platform/vertical.zip" target="_blank"
                                       download="标准组合标志.ZIP">
                                        <img src="../assets/image/pc/about/pag-b-image-list-download-a.png" alt="">
                                    </a>
                                </div>
                                <p class="text-sign">
                                    标准组合标志
                                </p>
                                <div class="image">
                                    <a href="./static/platform/standard.zip" target="_blank"
                                       download="竖版组合标志.ZIP">
                                        <img src="../assets/image/pc/about/pag-b-image-list-download-b.png" alt="">
                                    </a>
                                </div>
                                <p class="text-sign">
                                    竖版组合标志
                                </p>
                                <div class="images">
                                    <div>
                                        <div>
                                            <a href="./static/platform/phone.zip"
                                               target="_blank" download="手机客户端标志.ZIP">
                                                <img src="../assets/image/pc/about/pag-b-image-list-download-c.png"
                                                     alt="">
                                            </a>
                                        </div>
                                        <p class="lines">
                                            手机客户端标志
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="./static/platform/pc.zip"
                                               target="_blank" download="PC客户端标志.ZIP">
                                                <img src="../assets/image/pc/about/pag-b-image-list-download-d.png"
                                                     alt="">
                                            </a>
                                        </div>
                                        <p class="lines">
                                            PC客户端标志
                                        </p>
                                    </div>
                                </div>
                                <p id="resource" class="subtitle">
                                    子业务品牌资源
                                </p>
                                <!-- 子业务品牌资源开始 -->
                                <div class="child-business">
                                    <div class="business" v-for="(item,index) in dataList" :key="index">
                                        <div>
                                            <a :href="item.source" target="_blank">
                                                <img :src="item.pic" alt="">
                                            </a>
                                        </div>
                                        <div class="text">
                                            {{ item.name }}
                                        </div>
                                    </div>
                                </div>

                                <p id="font" class="subtitle">
                                    818字体
                                </p>
                                <p class="text-content">
                                    字体是我们品牌系统的重要元素，有助于受众认识品牌，在各种传达项⽬中形成统⼀格调。
                                    思源⿊体做为818XR的中⽂品牌专⽤字体，被⽤于品牌产品及品牌视觉传达中。
                                    我们需要遵循下图所述的品牌字体运⽤示例，以确保品牌视觉传达的⼀致性。
                                </p>
                                <div class="image">
                                    <img src="../assets/image/pc/about/pag-b-image-list-a.png" alt="">
                                </div>
                                <!-- 818字体结束 -->
                                <p id="swatches" class="subtitle">
                                    标准色板
                                </p>
                                <div class="text-content">
                                    818XR标准⾊系统内各⾊系各司其职。标准⾊是使⽤⽐率最⾼及应⽤⾯积最⼤的颜⾊。
                                    所有应⽤项⽬都会应⽤标准⾊，如此才达到818XR品牌独有的⾊控。
                                    辅助⾊系是⽤来⽀持品牌标志的⾊彩，并创造更精彩的视觉效应。
                                    辅助⾊不可⽤其他颜⾊替换，任何情况下都必须使⽤⽮量设计源图，以确保⾊彩和品牌外观⼀致。
                                </div>
                                <!-- 色板 -->
                                <PlatformSwatches></PlatformSwatches>
                                <!-- 色板结束 -->
                                <p id="example" class="subtitle">
                                    错误示例
                                </p>
                                <p class="text-content">
                                    标志的基本要素在应⽤中通常会受到⼀些习惯⾏为或个⼈意⻅，
                                    不当地使⽤基本要素将影响品牌对外形象传播的⼀致性，消弱品牌价值。
                                    除本⼿册中规定允许的情况外，禁⽌对标志、标准字等基础元素做任何变形使⽤，
                                    在实际应⽤过程中应避免本⻚预先演示的错误使⽤⽅式及有类似相关使⽤⽅式。
                                </p>
                                <div class="image">
                                    <img src="../assets/image/pc/about/pag-b-image-list-c.png" alt="">
                                </div>
                                <div class="standard">
                                    <div>
                                        <a href="./static/specification/818.pdf"
                                           target="_blank" download="818XR视觉规范1.0.pdf">
                                            使用规范下载
                                            <i class="el-icon-arrow-right">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <CommonFoot></CommonFoot>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
        </div>
        <div class="phone" :class="[popFlag || state===true? 'active-hide':'']">
            <div class="head">
                <div @click="$router.push('/')">
                    <img src="../assets/image/phone/app-pag-a-title-top-btn-logo.png" alt="">
                </div>
                <div @click="state=true">
                    <img v-show="state===false" src="../assets/image/phone/app-pag-a-menu-normal.png" alt="">
                </div>
            </div>
            <div class="pull-catalogue" @click="popFlag=!popFlag">
                <div>818平台</div>
                <div>
                    <div v-show="popFlag===false">
                        <i class="el-icon-arrow-down">
                        </i>
                    </div>
                    <div v-show="popFlag===true">
                        <i class="el-icon-arrow-up">
                        </i>
                    </div>
                </div>
            </div>
            <div class="pop-out" v-if="popFlag ===true">
                <div @click="$router.push('/about')">
                    <span>新看点集团</span>
                </div>
                <div @click="popFlag=!popFlag">
                    <span>818平台</span>
                </div>
                <div @click="$router.push('/operatingGuide')">
                    <span>使用指南</span>
                </div>
            </div>
            <!-- 顶部图片 -->
            <div class="top-img">
                <img src="../assets/image/phone/app-pag-c-banner.png" alt="">
            </div>
            <div class="content">
                <p class="headline ">
                    818品牌指引
                </p>
                <p class="text-content">
                    818XR品牌形象基于818XR的产品理念，包含于相关网页设计、子品牌设计、
                    周边产品设计中。818XR品牌致力于帮助各行各业的构建尖端内容、
                    交互式体验和沉浸式虚拟世界,通过818XR的云端资产标准化服务，
                    AR、VR的3D美术资产可以快速进引擎，上传文件直接转成适合Web环境的glTF和压缩纹理格式并发布到CDN，
                    迭代过程也高效轻松。
                </p>
                <p class="subtitle">
                    818品牌标志
                </p>
                <p class="text-content">
                    此页可下载包含818品牌LOGO、818子业务品牌LOGO以及品牌使用规范手册。
                    点击鼠标右键选择“图片另存为...”即可下载当前样式图片，点击图片即可下载当前标志素材包。
                </p>
                <div class="image">
                    <a href="./static/818/818vertical.zip" target="_blank" download="标准组合标志.ZIP">
                        <img src="../assets/image/phone/phone-platform/app-pag-d-image-list-download-a.png" alt="">
                    </a>
                </div>
                <p class="text-sign">
                    <a href="./static/818/818vertical.zip" target="_blank" download="标准组合标志.ZIP">
                        标准组合标志
                    </a>
                </p>
                <div class="image">
                    <a href="./static/818/818standard.zip" target="_blank" download="竖版组合标志.ZIP">
                        <img src="../assets/image/phone/phone-platform/app-pag-d-image-list-download-b.png" alt="">
                    </a>
                </div>
                <p class="text-sign">
                    <a href="./static/818/818standard.zip" target="_blank" download="竖版组合标志.ZIP">
                        竖版组合标志
                    </a>
                </p>
                <div class="tow-img">
                    <div>
                        <a href="./static/818/818phone.zip" target="_blank" download="手机客户端标志.ZIP">
                            <img src="../assets/image/phone/phone-platform/app-pag-d-image-list-download-c.png" alt="">
                        </a>
                        <p class="font">
                            手机客户端标志
                        </p>
                    </div>
                    <div>
                        <a href="./static/818/818pc.zip" target="_blank" download="PC客户端标志.ZIP">
                            <img src="../assets/image/phone/phone-platform/app-pag-d-image-list-download-d.png" alt="">
                        </a>
                        <p class="font">
                            PC客户端标志
                        </p>
                    </div>
                </div>
                <p class="subtitle">
                    子业务品牌资源
                </p>
                <div class="resource">
                    <div class="outside-box" v-for="(item,index) in dataList" :key="index">
                        <div>
                            <a :href="item.source" target="_blank">
                                <img :src="item.pic" alt="">
                            </a>
                        </div>
                        <div class="text-tow">
                            <a :href="item.source" target="_blank">
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <p class="subtitle">
                    818字体
                </p>
                <p class="text-content">
                    字体是我们品牌系统的重要元素，有助于受众认识品牌，在各种传达项⽬中形成统⼀格调。
                    思源⿊体做为818XR的中⽂品牌专⽤字体，被⽤于品牌产品及品牌视觉传达中。
                    我们需要遵循右⻚所述的品牌字体运⽤示例，以确保品牌视觉传达的⼀致性。
                </p>
                <div class="image">
                    <img src="../assets/image/phone/app-pag-c-image-list-a.png" alt="">
                </div>
                <p class="subtitle">
                    标准色板
                </p>
                <p class="text-content">
                    818XR准⾊系统内各⾊系各司其职。标准⾊是使⽤⽐率最⾼及应⽤⾯积最⼤的颜⾊。
                    所有应⽤项⽬都会应⽤标准⾊，如此才达到818XR品牌独有的⾊控。<br>
                    辅助⾊系是⽤来⽀持品牌标志的⾊彩，并创造更精彩的视觉效应。<br>
                    辅助⾊不可⽤其他颜⾊替换，任何情况下都必须使⽤⽮量设计源图，以确保⾊彩和品牌外观⼀致。
                </p>
                <phone-platform></phone-platform>
                <p class="subtitle">
                    错误示例
                </p>
                <p class="text-content">
                    标志的基本要素在应⽤中通常会受到⼀些习惯⾏为或个⼈意⻅，
                    不当地使⽤基本要素将影响品牌对外形象传播的⼀致性，消弱品牌价值。
                    <br>除本⼿册中规定允许的情况外，禁⽌对标志、标准字等基础元素做任何变形使⽤，
                    在实际应⽤过程中应避免本⻚预先演示的错误使⽤⽅式及有类似相关使⽤⽅式。
                </p>
                <div class="image">
                    <img src="../assets/image/phone/phone-platform/app-pag-d-image-list-c.png" alt="">
                </div>
                <div class="standard">
                    <div>
                        <a href="./static/specification/818.pdf" target="_blank" download="818XR视觉规范1.0.pdf">
                            使用规范下载
                            <i class="el-icon-arrow-right">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            <FootCommon></FootCommon>
            <div class="pop-up" v-show="state">
                <!-- 头部 -->
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
                <div class="text-resource" @click="$router.push('/partner')">
                    合作伙伴
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import {partner} from '@/http/api'
import CommonAside from '@/component/CommonAside.vue'
import CommonHeader from '@/component/CommonHeader.vue'
import CommonFoot from '@/component/CommonFoot.vue'
import PlatformSwatches from "@/component/swatches/pc/PlatformSwatches.vue"
import PhonePlatform from "@/component/swatches/phone/PhonePlatform";
import FootCommon from '@/component/phone/FootCommon.vue'

export default {
    data() {
        return {
            dataList: [],
            openeds: ['2'],
            state: false,
            popFlag: false,
            params: {page: 1, pageSize: 10, type: 3},
        }
    },
    created() {
        let that = this
        partner(that.params).then((res) => {
            this.dataList = res.data.content.data
        })
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        slide(anchor) {
            $('html,body').animate(
                {scrollTop: $(anchor).offset().top - 70},
                1000
            )
        },
    },
    components: {PhonePlatform, CommonAside, CommonHeader, CommonFoot, PlatformSwatches, FootCommon},
}
</script>

<style lang='scss' scoped>
@import '../assets/css/pc/common.scss';
@import '../assets/css/phone/common.scss';

@media screen and (min-width: 500px) {
    .phone {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .pc {
        display: none;
    }
}
</style>
