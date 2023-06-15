<template>
    <div>
        <el-aside>
            <el-menu ref="menu"
                     :default-openeds="openeds"
                     @open="handleOpen"
                     @close="handleClose"
                     text-color="#000000"
                     @select="handleSelect"
                     active-text-color="#00B2E2">
                <el-submenu index="1">
                    <template slot="title">
                        <span>新看点集团</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="slide('#sign')">
                            <span>新看点品牌标志</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#font')">
                            <span>新看点字体</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#swatches')">
                            <span>标准色板</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#example')">
                            <span>错误示例</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title">
                        <span>818平台</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item @click="slide('#sign')">
                            <span>818品牌标志</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#resource')">
                            <span>子业务品牌资源</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#font')">
                            <span>818字体</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#swatches')">
                            <span>标准色板</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#example')">
                            <span>错误示例</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">
                        <span>使用指南</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item @click="slide('#protect')">
                            <span>保护品牌资产</span>
                        </el-menu-item>
                        <el-menu-item @click="slide('#gain')">
                            <span>获取品牌资产</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'CommonAsideVue',
    props: ['openeds'],
    data() {
        return {}
    },
    created() {
    },
    methods: {
        handleOpen(key) {
            console.log()
            let site = this.$route.name
            if (site === 'About') {
                if (key === '2') {
                    this.$router.push('/platform')
                } else if (key === '3') {
                    this.$router.push('/operatingGuide')
                } else if (key === '1') {
                }
            } else if (site === 'platform') {
                if (key === '1') {
                    this.$router.push('/about')
                } else if (key === '3') {
                    this.$router.push('/operatingGuide')
                } else if (key === '2') {
                }
            } else if (site === 'operatingGuide') {
                if (key === '1') {
                    this.$router.push('/about')
                } else if (key === '2') {
                    this.$router.push('/platform')
                } else if (key === '3') {
                }
            }
        },
        handleClose() {

        },

        slide(anchor) {
            setTimeout(() => {
                $('html,body').animate(
                    {scrollTop: $(anchor).offset().top - 70},
                    1000
                )
            }, 500)

        },
        handleSelect(key, keyPath) {
            let path
            switch (keyPath[0]) {
                case '1' :
                    path = 'about'
                    break
                case '2':
                    path = 'platform'
                    break
                case '3':
                    path = 'operatingGuide'
                    break
                default:
                    break
            }
            this.$router.push(path)
        },
    },
}
</script>
<style scoped lang="scss">
::v-deep .el-submenu__title {
    font-size: 14rem !important;
}

.el-aside {
    z-index: 999;
    position: fixed;
    top: 64rem;
    height: 100%;
    left: 0;
    width: 280rem !important;
    background-color: #f4f3f2;
    color: #333;
    text-align: left;
    padding: 0 !important;
    //font-size: 14rem !important;


    .el-menu-item {
        background: #f4f3f2 !important;
        font-size: 14rem !important;

        span:hover {
            color: #00b2e2;
        }
    }
}
</style>