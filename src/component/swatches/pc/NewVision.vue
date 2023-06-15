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
                    bg_color: '#00BB31',
                    bg_color_name: "标准色",
                    foot_text: `PANTONE \n 2271 C`,
                    color_number: `C74 M0 Y85 K0 \t\n R0 G1787 B49 \t\n #00BB31`,
                    text: '色彩搭配建议',
                    color_lump: ["#00BB31", "#06BE0079", "#06BE0055"]

                },
                {
                    title: 'PANTONE Basic Colors',
                    bg_color: '#303030',
                    bg_color_name: "辅助色",
                    foot_text: `Munsell \n N/4.5`,
                    color_number: `C56 M47 Y43 K9 \t\n R123 G122 B122 \t\n #7B7A7A`,
                    text: '',
                    color_lump: ["#303030", "#676767", "#8C8C8C"]

                },
                {
                    title: 'PANTONE Basic Colors',
                    bg_color: '#408DEE',
                    bg_color_name: "辅助色",
                    foot_text: `PANTONE \n 2727 C`,
                    color_number: `C78 M52 Y0 K0 \t\n R48 G127 B226 \t\n #307FE2`,
                    text: '',
                    color_lump: ["#408DEE", "#59A2F0", "#86C3FC"]
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
    padding: 60rem;
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
            width: 20%;
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
                    font-size: 8rem;
                    background-color: #ffffff;
                    border-radius: 20rem 20rem 0 0;
                    text-align: center;
                    padding: 10rem;
                    color: #000000;
                }

                .top-banner-main {
                    height: 193.19rem;
                    display: flex;
                    justify-content: end;
                    font-size: 13rem;

                    .main-subtitle {
                        display: flex;
                        justify-content: left;
                        align-items: end;
                        width: 100%;
                        color: #ffffff;
                        padding: 10rem;
                    }
                }

                .top-banner-footer {
                    white-space: pre-wrap;
                    font-size: 11rem;
                    text-align: left;
                    background-color: #ffffff;
                    border-radius: 0 0 20rem 20rem;
                    padding: 10rem 10rem 20rem 10rem;
                    color: #000000;
                }
            }

            .desc {
                white-space: pre-wrap;
                padding: 10rem;
                font-size: 11rem;
                color: #000000;
            }

            .subtitle {
                font-size: 14rem;
                height: 50rem;
                display: flex;
                color: #5E5E5E;
                justify-content: left;
                align-items: center;
            }

            .bottom-banner {
                div:nth-child(1) {
                    height: 50rem;
                    background-color: #0ec707;
                }

                div:nth-child(2) {
                    height: 25rem;
                    background-color: #0ec707;
                }

                div:nth-child(3) {
                    height: 25rem;
                    background-color: #0ec707;
                }
            }
        }
    }
}
</style>