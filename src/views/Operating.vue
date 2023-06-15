<template>
    <div class="operating">
        <div class="pc">
            <el-container>
                <CommonHeader></CommonHeader>
                <el-container>
                    <CommonAside :openeds="openeds"></CommonAside>
                    <el-main>
                        <!-- 最外层盒子 -->
                        <div class="main">
                            <div>
                                <div id="top">
                                    <img src="../assets/image/pc/platform/pag-a-banner.png" alt="">
                                </div>
                                <!-- 中间部分 -->
                                <div class="content">
                                    <p class="headline" id="protect">
                                        保护品牌资产
                                    </p>
                                    <p class="text-content">
                                        新看点感谢大家对我们产品、服务和体验的信任。此页面详细说明了您可以如何帮助我们保护新看点的品牌资产，包括公司名称、标志和应
                                        用。我们创建了品牌使用规范，以阐明我们品牌资产的正确使用。新看点保留采取必要措施保护公司权益，从而对公司客户和用户负责。
                                        新看点的品牌资产——包括新看点和818XR、字体以及其他子品牌特征和元素，无论是注册的还是未注册的品牌标志——都是新看点及其公司集专有资产。这些标志指南可能会不定时更新。若您没有新看点公司的明确允许，您在使用有关新看点公司的名称、标志和其他设计时，
                                        需要先获得许可。

                                    </p>
                                    <p class="text-content">
                                        为了帮助您了解您可以使用新看点的品牌资产做什么和不可以做什么，我们创建了如下注意事项列表：</p>
                                    <div class="text-border">
                                        正确使用
                                    </div>
                                    <p class="text-content">
                                        · 如实准确地提及新看点及其产品和服务<br>
                                        · 在真实且不误导的情况下，在新闻文章的标题中使用<br>
                                        · 正确使用商标脚注，以表明您正在使用新看点的商标<br>
                                        · 除非您有战略合作协议，否则请在比您自己的品牌或公司名称更不显眼的位置使用</p>
                                    <div class="text-noneBorder">
                                        禁止使用
                                    </div>
                                    <p class="text-content">
                                        · 请勿暗示与新看点或与新看点有从属关系<br>
                                        · 请勿更改或盗用新看点的品牌资产，详见品牌使用规范<br>
                                        ·
                                        请勿以用户、粉丝、技术社区或其他组织名称的名义使用新看点品牌资产（无论是否盈利）<br>
                                        · 请勿以您的业务、产品、服务、域名、社交媒体帐户或业务的名义使用新看点的品牌资产</p>
                                    <!-- 获取品牌资产 -->
                                    <p class="subtitle" id="gain">
                                        获取品牌资产
                                    </p>
                                    <p class="text-content">
                                        在严格遵守以上品牌资产保护原则的前提下，如下方法可以便于您获取品牌资源：
                                    </p>
                                    <div class="svg">
                                        <div>如何使用SVG 格式：</div>
                                        <div>如何下载压缩包：</div>
                                    </div>
                                    <div class="videos">
                                        <div @click="videoPc()">
                                            <video class="video" id="movie" controls
                                                   src="../assets/video/tutorial/svgTutorial.mp4"></video>
                                        </div>
                                        <div @click="videoPhone()">
                                            <video class="video-tow" id="movies" controls
                                                   src="../assets/video/tutorial/jpegTutorial.mp4"></video>
                                        </div>
                                    </div>
                                </div>
                                <CommonFoot></CommonFoot>
                            </div>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
        </div>
        <div class="phone"
             :class="[popOutFlag || state===true? 'active-hide':'']">
            <div class="head">
                <div @click="$router.push('/')">
                    <img src="../assets/image/phone/app-pag-a-title-top-btn-logo.png" alt="">
                </div>
                <div @click="state=true">
                    <img v-show="state===false" src="../assets/image/phone/app-pag-a-menu-normal.png" alt="">
                </div>
            </div>
            <div class="pull-catalogue" @click="popOutFlag=!popOutFlag">
                <div>
                    使用指南
                </div>
                <div>
                    <div v-show="popOutFlag===false">
                        <i class="el-icon-arrow-down">
                        </i>
                    </div>
                    <div v-show="popOutFlag===true">
                        <i class="el-icon-arrow-up">
                        </i>
                    </div>
                </div>
            </div>

            <div class="pop-out" v-show="popOutFlag">
                <div @click="$router.push('/about')">
                    <span> 新看点集团 </span>
                </div>
                <div @click="$router.push('/platform')">
                    <span> 818平台 </span>
                </div>
                <div @click="popOutFlag=!popOutFlag">
                    <span> 使用指南</span>
                </div>
            </div>
            <!-- 顶部图片 -->
            <div class="top-img">
                <img src="../assets/image/phone/app-pag-c-banner.png" alt="">
            </div>
            <div class="content">
                <p class="headline">
                    保护品牌资产
                </p>
                <p class="text-content">
                    新看点感谢大家对我们产品、服务和体验的信任。此页面详细说明了您可以如何帮助我们保护新看点的品牌资产，
                    包括公司名称、标志和应用。我们创建了品牌使用规范，以帮助阐明我们品牌资产的正确使用。
                    新看点保留采取必要措施保护公司权益，从而对公司客户和用户负责。
                    新看点的品牌资产——包括新看点和818XR、字体以及其他子品牌特征和元素，
                    无论是注册的还是未注册的品牌标志——都是新看点及其公司集专有资产。这些标志指南可能会不定时更新。
                    若您没有新看点公司的明确允许，您在使用有关新看点公司的名称、标志和其他设计时，需要先获得许可。
                </p>
                <p class="text-content">
                    为了帮助您了解您可以使用新看点的品牌资产做什么和不可以做什么，
                    我们创建了如下注意事项列表：
                </p>
                <p class="border-blue">
                    正确使用
                </p>
                <p class="text-content">
                    · 如实准确地提及新看点及其产品和服务 <br>
                    · 在真实且不误导的情况下，在新闻文章的标题中使用 <br>
                    · 正确使用商标脚注，以表明您正在使用新看点的商标 <br>
                    · 除非您有战略合作协议，否则请在比您自己的品牌或公司名称更不显眼的位置使用</p>
                <p class="border-none">
                    禁止使用
                </p>
                <p class="text-content">
                    · 请勿暗示与新看点或与新看点有从属关系<br>
                    · 请勿更改或盗用新看点的品牌资产，详见品牌使用规范<br>
                    · 请勿以用户、粉丝、技术社区或其他组织名称的名义使用新看点品牌资产（无论是否盈利）<br>
                    · 请勿以您的业务、产品、服务、域名、社交媒体帐户或业务的名义使用新看点的品牌资产<br>
                </p>
                <p class="subtitle">
                    获取品牌资产
                </p>
                <p class="text-content">
                    在严格遵守以上品牌资产保护原则的前提下，如下方法可以便于您获取品牌资源：
                </p>
                <div class="fingerPost-text">
                    <div>
                        如何使用SVG 格式：
                    </div>
                    <div>
                        如何下载压缩包：
                    </div>
                </div>

                <div class="videos">
                    <div @click="videoPc()">
                        <video class="video" id="movie" controls src="../assets/video/tutorial/svgTutorial.mp4">
                        </video>
                    </div>
                    <div @click="videoPhone()">
                        <video class="video-tow" id="movies" controls src="../assets/video/tutorial/jpegTutorial.mp4">
                        </video>
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
import CommonHeader from '@/component/CommonHeader.vue'
import CommonAside from '@/component/CommonAside.vue'
import CommonFoot from '@/component/CommonFoot.vue'
import FootCommon from '@/component/phone/FootCommon.vue'

export default {
    data() {
        return {
            openeds: ['3'],
            state: false,
            popOutFlag: false,
        }
    },
    created() {
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        videoPc() {
            let videos = document.getElementById('movies')
            videos.pause()
        },
        videoPhone() {
            let video = document.getElementById('movie')
            video.pause()
        },
    },
    components: {CommonHeader, CommonAside, CommonFoot, FootCommon},
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
    .pc {
        display: none;
    }
    .phone {
        display: block;
    }
}
</style>
