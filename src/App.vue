<template>
	<a-config-provider :locale="locale">
		<!--  :key="route.path"  + (typeof route.query.t !== 'undefined' && route.query.t ? route.query.t : '') -->
		<router-view />
	</a-config-provider>
</template>
<script setup lang="ts">
	import {ref} from "vue";
	import {AlmUtils} from "/@/core/utils/AlmUtils";
	import {Locale} from "ant-design-vue/es/locale-provider";
	import en from "ant-design-vue/es/locale/en_US";
	import zh from "ant-design-vue/es/locale/zh_CN";
	import {GLOBAL_LANG} from "../build/constant";
	import {useRoute} from "vue-router";

	const locale = ref<Locale>(GLOBAL_LANG === "zh" ? zh : en);
	import {useUserStore} from "/@/store/modules/user";

	// 路由对象
	const route = useRoute();
	const userStore = useUserStore();
	const accessToken = AlmUtils.getQueryString("accessToken");
	if (typeof accessToken !== "undefined" && accessToken) {
		const accessExpire: number = new Date().getTime() + (12 * 3600 * 1000);
		userStore["accessToken"] = accessToken;
		userStore["accessExpire"] = accessExpire;
	}
</script>
<style lang="less">
</style>
