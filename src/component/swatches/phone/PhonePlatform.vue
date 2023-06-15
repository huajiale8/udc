<template>
    <div>
        <div class="swatches">
            <div>
                <div class="banner" v-for="(item,index) in swatches" :key="index">
                    <div>
                        <div class="top-banner">
                            <div class="top-banner-header">
                                {{ item.title }}
                            </div>
                            <div class="top-banner-main" :style="{backgroundColor:item.bg_color}">
                                <div class="main-subtitle">
                                    {{ item.bg_color_name }}
                                </div>
                            </div>
                            <div class="top-banner-footer">
                                {{ item.foot_text }}
                            </div>
                        </div>
                        <div class="desc">
                            {{ item.color_number }}
                        </div>
                    </div>
                    <div>
                        <div class="subtitle">
                            {{ item.text }}
                        </div>
                        <div class="bottom-banner">
                            <div :style="{backgroundColor:item.color_lump[0]}"></div>
                            <div :style="{backgroundColor:item.color_lump[1]}"></div>
                            <div :style="{backgroundColor:item.color_lump[2]}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swatches: [
                {
                    title: 'PANTONE Basic Colors',
                    bg_color: '#00B2E2',
                    bg_color_name: "标准色",
                    foot_text: `PANTONE \n 2995 CP`,
                    color_number: `C75 M15 Y20 K0 \t\n R0 G178 B226 \t\n #00B2E2`,
                    text: '色彩搭配建议',
                    color_lump: ["#00B2E2", "#26CBF0", "#51E3FC"]

                },
                {
                    title: 'PANTONE Basic Colors',
                    bg_color: '#7B7A7A',
                    bg_color_name: "辅助色",
                    foot_text: `Munsell \n N/4.5`,
                    color_number: `C56 M47 Y43 K9 \t\n R123 G122 B122 \t\n #7B7A7A`,
                    text: '',
                    color_lump: ["#7B7A7A", "#B2B2B2", "#D1D2D2"]

                },
                {
                    title: 'PANTONE Basic Colors',
                    bg_color: '#307FE2',
                    bg_color_name: "辅助色",
                    foot_text: `PANTONE \n 2727 C`,
                    color_number: `C78 M52 Y0 K0 \t\n R48 G127 B226 \t\n #307FE2`,
                    text: '',
                    color_lump: ["#307FE2", "#59A2F0", "#86C3FC"]

                },
                {
                    title: 'PANTONE Basic Colors',
                    bg_color: '#005387',
                    bg_color_name: "辅助色",
                    foot_text: `PANTONE \n 301 CP`,
                    color_number: `C93 M69 Y22 K8 \t\n R7 G79 B128 \t\n #005387`,
                    text: '',
                    color_lump: ["#005387", "#337EA1", "#77A9BA"]

                },
                {
                    title: 'PANTONE Basic Colors',
                    bg_color: '#000000',
                    bg_color_name: "辅助色",
                    foot_text: `PANTONE \n Black U`,
                    color_number: `C0 M0 Y0 K100 \t\n R0 G0 B0 \t\n #000000`,
                    text: '',
                    color_lump: ["#000000", "#333333", "#8E8E8E"]

                },
            ]
        }
    },
    methods: {},
}
</script>
<style scoped lang="scss">
.swatches > div {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    padding: 20rem 15rem;
    box-sizing: content-box;
}

.swatches {
    margin-top: 24rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f3f2;

    div {
        .banner {
            width: 18%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            > div {
                width: 100%;
            }

            .top-banner {
                width: 100%;

                .top-banner-header {
                    font-size: 3rem;
                    background-color: #ffffff;
                    border-radius: 10rem 10rem 0 0;
                    text-align: center;
                    padding: 5rem;
                    color: #000000;
                }

                .top-banner-main {
                    height: 60.09rem;
                    display: flex;
                    justify-content: end;
                    font-size: 5rem;

                    .main-subtitle {
                        display: flex;
                        justify-content: left;
                        align-items: flex-end;
                        width: 100%;
                        color: #ffffff;
                        padding: 5rem;
                    }
                }

                .top-banner-footer {
                    white-space: pre-wrap;
                    font-size: 5rem;
                    text-align: left;
                    background-color: #ffffff;
                    border-radius: 0 0 10rem 10rem;
                    padding: 5rem 5rem 10rem 5rem;
                    color: #000000;
                }
            }

            .desc {
                white-space: pre-wrap;
                padding: 5rem;
                font-size: 5rem;
                color: #000000;
            }

            .subtitle {
                font-size: 5rem;
                height: 25rem;
                display: flex;
                color: #5E5E5E;
                justify-content: left;
                align-items: center;
            }

            .bottom-banner {
                div:nth-child(1) {
                    height: 21.96rem;

                }

                div:nth-child(2) {
                    height: 10.98rem;

                }

                div:nth-child(3) {
                    height: 10.98rem;

                }
            }
        }
    }
}
</style>