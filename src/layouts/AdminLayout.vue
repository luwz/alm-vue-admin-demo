<template>
	<a-layout style="height: 100%" class="page-layout">
		<!-- 左侧 -->
		<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo">
				Admin
			</div>
			<!-- 导航栏 -->
			<a-menu
				v-model:selectedKeys="selectedKeys"
				v-model:openKeys="openKeys"
				class="menu-container"
				theme="light"
				mode="inline"
				@click="changeMenu"
			>
				<template v-for="item in menuList" :key="item.key">
					<template v-if="!item.children">
						<a-menu-item :key="item.key">
							<template #icon>
								<component :is="item.icon" />
							</template>
							{{ item.title }}
						</a-menu-item>
					</template>
					<template v-else>
						<a-sub-menu :key="item.key">
							<template #icon>
								<component :is="item.icon" />
							</template>
							<template #title>
								{{ item.title }}
							</template>
							<a-menu-item v-for="i in item.children" :key="i.key">
								<template #icon>
									<component :is="i.icon" />
								</template>
								{{ i.title }}
							</a-menu-item>
						</a-sub-menu>
					</template>
				</template>
			</a-menu>
		</a-layout-sider>
		<!-- 右侧 -->
		<a-layout>
			<!-- 右侧头部 -->
			<a-layout-header class="header-container">
				<div>
					<menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
					<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
				</div>
				<a-dropdown class="header-right">
					<a class="ant-dropdown-link" @click.prevent>
						<a-avatar style="background-color: #87d068" size="small" class="user-icon">
							<template #icon>
								<UserOutlined />
							</template>
						</a-avatar>
						<div>用户名</div>
					</a>
					<template #overlay>
						<a-menu style="text-align: center">
							<a-menu-item>
								<user-outlined />
								<a href="javascript:;" style="margin-left: 5px" @click="goPersonal">个人中心</a>
							</a-menu-item>
							<a-menu-item>
								<logout-outlined />
								<a style="margin-left: 5px" @click="logOut">退出登录</a>
							</a-menu-item>
						</a-menu>
					</template>
				</a-dropdown>
			</a-layout-header>
			<!-- 内容 -->
			<a-layout-content class="content-container">
				<!-- 面包屑 -->
				<div>
					<div class="breadcrumb-container">
						<a-breadcrumb>
							<a-breadcrumb-item v-for="item in breadcrumbList" :key="item">
								{{ item }}
							</a-breadcrumb-item>
						</a-breadcrumb>
					</div>
				</div>
				<!-- 内容 -->
				<div class="page-content">
					<router-view />
				</div>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
	import {ref, reactive, watch} from "vue";
	import {useRouter, useRoute} from "vue-router";
	import {useUserStore} from "/@/store/modules/user";
	import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, LogoutOutlined} from "@ant-design/icons-vue";
	import {MenuDTO} from "/@/core/dto/menu/MenuDTO";

	// 获取路由和实例
	const $router = useRouter();
	const $route = useRoute();

	// 菜单配置
	let selectedKeys = ref<string[]>(["/"]);
	let openKeys = reactive([]);
	let breadcrumbList = ref($route.meta.title);

	// 初始化面包
	watch($route, (newRoute) => {
		breadcrumbList.value = newRoute.meta.title;
		selectedKeys.value = [];
		let arr = $route.path.split("/");
		for (let index = 1; index < arr.length; index++) {
			selectedKeys.value[index - 1] = "/" + arr[index];
		}
	});

	// 改变菜单
	let collapsed = ref<boolean>(false); // 菜单是否展开
	const menuList = reactive<MenuDTO[]>([]);
	let changeMenu = ({item, key, keyPath}) => {
		// console.log("changeMenu", item, key, keyPath);
	};

	// 退出登录
	const logOut = () => {
		const userStore = useUserStore();
		userStore["accessToken"] = null;
		userStore["accessExpire"] = 0;
		// 页面跳转
		$router.push("/login");
	};

	// 进入个人中心
	const goPersonal = () => {
		$router.push("/personal");
	};
</script>
<style lang="scss" scoped>
	.trigger {
		font-size: 14px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}

	.trigger:hover {
		color: #1890ff;
	}

	.logo {
		width: 200px;
		height: 60px;
		line-height: 60px;
		background: rgba(255, 255, 255, 0.3);
	}

	.site-layout .site-layout-background {
		background: #fff;
	}

	.page-layout {
		min-width: 1280px;

		.logo {
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;

			.title {
				margin: 0 0 0 10px;
				font-size: 16px;
				white-space: nowrap;
			}
		}

		.menu-container {
			height: calc(100% - 60px);
		}

		.header-container {
			display: flex;
			justify-content: space-between;
			box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.06);
			z-index: 999;
			height: 60px;
			background: #fff;
			padding: 0;

			.header-right {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 30px;
				cursor: pointer;
				color: #000;

				.user-icon {
					font-size: 12px;
					margin-right: 8px;
				}
			}
		}

		.content-container {
			overflow: scroll;

			.breadcrumb-container {
				width: 100%;
				height: 50px;
				display: flex;
				align-items: center;
				padding: 0 24px;
				margin-bottom: 24px;
				background-color: #fff;
				// box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
			}

			.page-content {
				margin: 24px 20px;
				// padding: 24px;
				// min-height: calc(100% - 100px);
				// background: #fff;
			}
		}
	}

	.content-container::-webkit-scrollbar {
		display: none;
	}

	.content-container {
		-ms-overflow-style: none;
	}
</style>
