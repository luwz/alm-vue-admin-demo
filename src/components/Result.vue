<template>
	<a-result :status="props.code" :title="props.code" :sub-title="props.title">
		<template #extra>
			<a-button type="primary" @click="goHome">
				回到主页
			</a-button>
		</template>
	</a-result>
</template>

<script lang="ts" setup>
	import {defineProps} from "vue";
	import {useRouter} from "vue-router";

	// 回到主页
	const router = useRouter();
	const goHome = () => {
		router.push("/");
	};

	// 定义传入的参数
	const props = defineProps({
		code: {
			type: Number,
			required: true,
			default: 500
		},
		title: {
			type: String,
			required: true
		}
	});
</script>

<style lang="scss" scoped>

</style>
