<template>
	<div class="login-page">
		<a-drawer
			title=""
			placement="right"
			:closable="false"
			:visible="true"
			:mask="false"
			:width="drawerWidth"
		>
			<div class="login">
				<div class="login-top text-color-main">
					alm-vue
				</div>
				<a-form
					:model="formState"
					class="login-form"
					@finish="onFinish"
				>
					<a-form-item name="username" :rules="[{required: true, message: '用户名必填!'}]" :validate-trigger="'change'">
						<a-input v-model:value="formState.username" placeholder="测试账号admin">
							<template #prefix>
								<user-outlined style="color: rgba(0, 0, 0, 0.25);"></user-outlined>
							</template>
						</a-input>
					</a-form-item>
					<a-form-item name="password" :rules="[{required: true, message: '密码必填!'}]" :validate-trigger="'change'">
						<a-input-password v-model:value="formState.password" placeholder="测试密码admin">
							<template #prefix>
								<lock-outlined style="color: rgba(0, 0, 0, 0.25);"></lock-outlined>
							</template>
						</a-input-password>
					</a-form-item>
					<a-form-item class="login-button">
						<a-button type="primary" html-type="submit" class="login-form-button" :loading="loading" :disabled="disabled">
							登录
						</a-button>
					</a-form-item>
				</a-form>
			</div>
		</a-drawer>
	</div>
</template>

<script lang="ts" setup>
	import {ref, reactive} from "vue";
	import {AlmUtils} from "/@/core/utils/AlmUtils";
	import {LoginFormDTO} from "/@/core/dto/login/LoginFormDTO";
	import {Router, useRouter} from "vue-router";
	import {UserController} from "/@/core/controller/UserController";
	import {useUserStore} from "/@/store/modules/user";
	import {UserOutlined, LockOutlined} from "@ant-design/icons-vue";
	import toast from "/@/core/utils/toast";

	// 定义宽度
	let drawerWidth = ref<string>("360px");
	const pageSource = AlmUtils.checkPageSource();
	if(pageSource === "phone") {
		drawerWidth.value = "100%";
	}

	// 定义form对象
	const formState = reactive<LoginFormDTO>({
		username: "",
		password: "",
		remember: true
	});
	// 加载中
	const loading = ref<boolean>(false);
	// 禁用
	const disabled = ref<boolean>(false);
	// 路由对象
	const router: Router = useRouter();
	// 验证成功后进行数据请求
	const onFinish = async (values: any) => {
		const data = await UserController.userLogin(values.username, values.password);
		if (typeof data !== "undefined" && data && typeof data["accessToken"] !== "undefined" && data["accessToken"]) {
			const accessToken: string = data["accessToken"];
			const accessExpire: number = data["accessExpire"];
			// 默认AccessToken的过期时间是12个小时
			// const accessExpire: number = new Date().getTime() + (12 * 3600 * 1000);
			const userStore = useUserStore();
			userStore["accessToken"] = accessToken;
			userStore["accessExpire"] = accessExpire;

			// 页面跳转
			await router.push("/");
		} else {
			toast.error("用户名或者密码错误!");
		}
	};
</script>

<route>
{
	meta: {
		requiresAuth: false
	}
}
</route>

<style lang="scss" scoped>
	@import "../assets/login/css/login.css";
</style>
