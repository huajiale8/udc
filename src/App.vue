<template>
    <div id="app">
        <router-view class="add" />
    </div>
</template>
<script>
export default {
	data() {
		return {
		}
	},
	created() {},
	methods: {},
}
</script>
<style lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
	box-sizing: content-box;
}
body,
html,#app{
    height: 100%;
}

.el-menu-item-group__title {
	padding: 0 !important;
}
.el-card__body,
.el-main {
	padding: 0 !important;
}
.el-main::-webkit-scrollbar {
	display: none !important;
}
.el-aside::-webkit-scrollbar {
	display: none !important;
}
.el-checkbox-group {
	width: 100%;
	position: relative;
	overflow: auto;
	overflow-x: hidden;
}
.el-submenu__icon-arrow {
	position: absolute !important;
	top: 57% !important;
	right: 8vw !important;
}
a {
    text-decoration:none;
	color: rgba(0, 0, 0, 0.6);
}
a:hover {
	color: #00b2e2;
}

</style>
