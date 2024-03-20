<template>
	<Result :code="500" :title="pageTitle" />
</template>

<script lang="ts" setup>
	import {ref, defineComponent} from "vue";
	import Result from "/@/components/Result.vue";

	// 定义主键
	defineComponent({
		Result: Result
	});

	// 页面标题
	const pageTitle = ref("抱歉，服务器错误。");
</script>

<style lang="scss" scoped>
</style>
