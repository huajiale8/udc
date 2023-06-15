<template>
    <div class="about" id="about">
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
                                    新看点品牌指引
                                </p>
                                <p class="text-content">
                                    新看点品牌形象基于新看点的产品理念，包含于相关网页设计、子品牌设计、
                                    周边产品设计中。新看点品牌是一个多玩法、重体验，致力于打造领先的元宇宙科技产品。
                                    新看点的品牌设计不仅要告诉用户这是新看点，还要传达新看点的理念和态度。
                                </p>
                                <p class="subtitle" id="sign">
                                    新看点品牌标志
                                </p>
                                <p class="text-content">
                                    此页可下载包含新看点品牌LOGO和品牌使用规范手册。点击鼠标右键选择“图片另存为...”
                                    即可下载当前样式图片，点击图片即可下载当前标志素材包。
                                </p>
                                <div class="image">
                                    <a href="./static/new-version/new-version-cn.zip" target="_blank"
                                       download="新看点-CN.ZIP">
                                        <img src="../assets/image/pc/platform/pag-a-image-list-download-a.png" alt="">
                                    </a>
                                </div>
                                <p class="text-sign">
                                    中文标志
                                </p>
                                <div class="image">
                                    <a href="./static/new-version/new-version-en.zip" target="_blank"
                                       download="新看点-EN.ZIP">
                                        <img src="../assets/image/pc/platform/pag-a-image-list-download-b.png" alt="">
                                    </a>
                                </div>
                                <p class="text-sign">
                                    英文标志
                                </p>
                                <div class="images">
                                    <div>
                                        <div>
                                            <a href="./static/new-version/new-version-pc.zip" target="_blank"
                                               download="新看点-PC.ZIP">
                                                <img src="../assets/image/pc/platform/pag-a-image-list-download-c.png"
                                                     alt="">
                                            </a>
                                        </div>
                                        <p class="lines">
                                            手机客户端标志
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="./static/new-version/new-version-phone.zip" target="_blank"
                                               download="新看点-Phone.ZIP">
                                                <img src="../assets/image/pc/platform/pag-a-image-list-download-d.png"
                                                     alt="">
                                            </a>
                                        </div>
                                        <p class="lines">
                                            PC客户端标志
                                        </p>
                                    </div>
                                </div>
                                <p class="subtitle" id="font">
                                    新看点字体
                                </p>
                                <p class="text-content">
                                    字体是我们品牌系统的重要元素，有助于受众认识新看点的中⽂品牌专⽤字体，
                                    被⽤于品牌产品及品牌视觉传达中。我们需要遵循下图所述的品牌字体运⽤示例，
                                    以确保品牌视觉传达的⼀致性。
                                </p>
                                <div class="image">
                                    <img src="../assets/image/pc/platform/pag-a-image-list-a.png" alt="">
                                </div>
                                <p id="swatches" class="subtitle">
                                    标准色板
                                </p>
                                <div class="text-content">
                                    新看点标准⾊系统内各⾊系各司其职。标准⾊是使⽤⽐率最⾼及应⽤⾯积最⼤的颜⾊。
                                    所有应⽤项⽬都会应⽤标准⾊，如此才达到新看点品牌独有的⾊控。
                                    辅助⾊系是⽤来⽀持品牌标志的⾊彩，并创造更精彩的视觉效应。
                                    辅助⾊不可⽤其他颜⾊替换，任何情况下都必须使⽤⽮量设计源图，以确保⾊彩和品牌外观⼀致。
                                </div>
                                <!-- 色板模块 -->
                                <NewVision></NewVision>
                                <!-- 色板模块over -->
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
                                    <img src="../assets/image/pc/platform/pag-a-image-list-c.png" alt="">
                                </div>
                                <div class="standard">
                                    <div>
                                        <a href="./static/specification/new-version.pdf" target="_blank"
                                           download="新看点视觉规范手册.pdf">
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
        <div class="phone"
             :class="[popFlag || state ===true? 'active-hide':'']">
            <div class="head">
                <div @click="$router.push('/')">
                    <img src="../assets/image/phone/app-pag-a-title-top-btn-logo.png" alt="">
                </div>
                <div @click="state=true">
                    <img v-show="state===false" src="../assets/image/phone/app-pag-a-menu-normal.png" alt="">
                </div>
            </div>
            <div class="pull-catalogue" @click="popFlag=!popFlag">
                <div>
                    新看点集团
                </div>
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
            <div class="pop-out" v-show="popFlag">
                <div @click="popFlag=!popFlag">
                    <span>新看点集团 </span>
                </div>
                <div @click="$router.push('/platform')">
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
                <p class="headline">
                    新看点品牌指引
                </p>
                <p class="text-content">
                    新看点品牌形象基于新看点的产品理念，包含于
                    相关网页设计、子品牌设计、周边产品设计中。
                    新看点品牌是一个多玩法、重体验，致力于打造
                    领先的元宇宙科技产品。新看点的品牌设计不仅
                    要告诉用户这是新看点，还要传达新看点的理念
                    和态度。
                </p>
                <p class="subtitle">
                    新看点品牌标志
                </p>
                <p class="text-content">
                    此页可下载包含新看点品牌LOGO和品牌使用规范手册。
                    点击鼠标右键选择“图片另存为...”即可下载当前样式图片，
                    点击图片即可下载当前标志素材包。
                </p>
                <div class="image">
                    <a href="./static/new-version/new-version-cn.zip" target="_blank" download="新看点-CN.ZIP">
                        <img src="../assets/image/phone/app-pag-c-image-list-download-a.png" alt="">
                    </a>
                </div>
                <p class="text-sign">
                    <a href="./static/new-version/new-version-cn.zip" target="_blank" download="新看点-CN.ZIP">
                        中文标志
                    </a>
                </p>
                <div class="image">
                    <a href="./static/new-version/new-version-en.zip" target="_blank" download="新看点-EN.ZIP">
                        <img src="../assets/image/phone/app-pag-c-image-list-download-b.png" alt="">
                    </a>
                </div>
                <p class="text-sign">
                    <a href="./static/new-version/new-version-en.zip" target="_blank" download="新看点-EN.ZIP">
                        英文标志
                    </a>
                </p>
                <div class="tow-img">
                    <div>
                        <div>
                            <a href="./static/new-version/new-version-phone.zip" target="_blank"
                               download="新看点-Phone.ZIP">
                                <img src="../assets/image/phone/app-pag-c-image-list-download-c.png" alt="">
                            </a>
                        </div>
                        <p class="font">
                            手机客户端标志
                        </p>
                    </div>
                    <div>
                        <a href="./static/new-version/new-version-pc.zip" target="_blank" download="新看点-pc.ZIP">
                            <img src="../assets/image/phone/app-pag-c-image-list-download-d.png" alt="">
                        </a>
                        <p class="font">
                            PC客户端标志
                        </p>
                    </div>
                </div>
                <p class="subtitle">
                    新看点字体
                </p>
                <p class="text-content">
                    字体是我们品牌系统的重要元素，有助于受众认识品新看点的中⽂品牌专⽤字体，
                    被⽤于品牌产品及品牌视觉传达中。我们需要遵循右⻚所述的品牌字体运⽤示例
                    ，以确保品牌视觉传达的⼀致性。
                </p>
                <div class="image">
                    <img src="../assets/image/phone/app-pag-c-image-list-a.png" alt="">
                </div>
                <!-- 移动端色板 -->
                <p class="subtitle">
                    标准色板
                </p>
                <p class="text-content">
                    新看点标准⾊系统内各⾊系各司其职。标准⾊是使⽤⽐率最⾼及应⽤⾯积最⼤的颜⾊。
                    所有应⽤项⽬都会应⽤标准⾊，如此才达到新看点品牌独有的⾊控。<br>
                    辅助⾊系是⽤来⽀持品牌标志的⾊彩，并创造更精彩的视觉效应。<br>
                    辅助⾊不可⽤其他颜⾊替换，任何情况下都必须使⽤⽮量设计源图，以确保⾊彩和品牌外观⼀致。
                </p>

                <PhoneNewSwitches></PhoneNewSwitches>
                <p class="subtitle">
                    错误示例
                </p>
                <p class="text-content">
                    标志的基本要素在应⽤中通常会受到⼀些习惯⾏为或个⼈意⻅，
                    不当地使⽤基本要素将影响品牌对外形象传播的⼀致性，消弱品牌价值。<br>
                    除本⼿册中规定允许的情况外，禁⽌对标志、标准字等基础元素做任何变形使⽤，
                    在实际应⽤过程中应避免本⻚预先演示的错误使⽤⽅式及有类似相关使⽤⽅式。
                </p>
                <div class="image">
                    <img src="../assets/image/phone/app-pag-c-image-list-c.png" alt="">
                </div>
                <div class="standard">
                    <div>
                        <a href="./static/specification/new-version.pdf" target="_blank"
                           download="新看点视觉规范手册.pdf">
                            使用规范下载
                            <i class="el-icon-arrow-right">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            <FootCommon></FootCommon>
            <div class="pop-up"
                 v-show="state">
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
                <div class="text-resource" @click="state=!state">
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
import CommonHeader from '../component/CommonHeader.vue'
import CommonAside from '../component/CommonAside.vue'
import CommonFoot from '../component/CommonFoot.vue'
import NewVision from '@/component/swatches/pc/NewVision.vue'
import PhoneNewSwitches from "@/component/swatches/phone/PhoneNewSwitches";
import FootCommon from '@/component/phone/FootCommon.vue'

export default {

    data() {
        return {
            target: 1,
            state: false,
            openeds: ['1'],
            popFlag: false,
            str: ''
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    beforeMount() {
    },
    components: {PhoneNewSwitches: PhoneNewSwitches, CommonHeader, CommonAside, CommonFoot, NewVision, FootCommon},
}
</script>
<style lang='scss' scoped>
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
    .phone {
        display: block;
    }
    .pc {
        display: none;
    }
}
</style>
