<template>
    <div>
        <div class="foot">
            Copyright ©苏州新看点信息技术有限公司
            {{ str }}
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			str: '',
		}
	},
	created() {
		this.str = sessionStorage.getItem('ipc')
	},
	methods: {},
}
</script>
<style scoped lang="scss">
.foot {
	line-height: 64px;
	width: 100%;
	height: 64px;
	background: rgba(26, 26, 26, 0.8);
	opacity: 1;
	font-size: 12px;
	color: white;
	text-align: center;
}
</style>