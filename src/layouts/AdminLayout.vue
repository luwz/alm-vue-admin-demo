<template>
	<a-layout class="admin-layout">
		<a-layout-header class="header-layout">
			<div class="header-logo">
				Admin
			</div>
			<div class="header-menu">
				头部区域
			</div>
			<div class="header-user">
				<a-dropdown class="header-user-info">
					<div class="ant-dropdown-link" @click.prevent>
						<a-avatar size="small" class="user-icon">
							<template #icon>
								<UserOutlined />
							</template>
						</a-avatar>
						<div>用户</div>
					</div>
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
			</div>
		</a-layout-header>
		<a-layout>
			<a-layout-sider class="sider-layout">
				<a-menu
					v-model:selectedKeys="selectedKeys"
					class="menu-container"
					theme="light"
					mode="inline"
					@click="changeMenu"
				>
					<template v-for="item in menus" :key="item.key">
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
			<a-layout-content class="content-container">
				<div :key="Math.random()" class="breadcrumb-container">
					<a-breadcrumb>
						<a-breadcrumb-item v-for="item in breadcrumbs" :key="item">
							{{ item }}
						</a-breadcrumb-item>
					</a-breadcrumb>
				</div>
				<div class="main-content">
					<router-view />
				</div>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
	import {onMounted, ref, watch} from "vue";
	import {useRouter, useRoute} from "vue-router";
	import {useUserStore} from "/@/store/modules/user";
	import {UserOutlined, LogoutOutlined} from "@ant-design/icons-vue";
	import {CommonController} from "/@/core/controller/CommonController";
	import {MenuDTO} from "/@/core/dto/menu/MenuDTO";
	const {push} = useRouter();
	const route = useRoute();

	//
	const selectedKeys = ref<string[]>([]);
	const menus = ref<MenuDTO[]>([]);
	const breadcrumbs = ref<any>(route.meta.title);
	onMounted(async () => {
		// 初始化菜单
		await initMenus();
	});

	// 初始化菜单
	const initMenus = async () => {
		menus.value = await CommonController.menus();
	};

	// 改变菜单
	const changeMenu = ({keyPath}) => {
		let url = "";
		keyPath.forEach((item) => {
			url += item;
		});
		push(url);
	};

	// 初始化面包
	watch(route, (newRoute) => {
		breadcrumbs.value = newRoute.meta.title;
	}, {deep: true});

	// 选中的菜单
	const arr = route.path.split("/");
	if (arr.length > 1) {
		arr.shift();
	}
	let arr2 = [] as Array<any>;
	arr.forEach((item) => arr2.push("/" + item));
	selectedKeys.value = arr2;

	// 退出登录
	const logOut = () => {
		const userStore = useUserStore();
		userStore["accessToken"] = null;
		userStore["accessExpire"] = 0;

		// 页面跳转
		push("/login");
	};

	// 进入个人中心
	const goPersonal = () => {
		push("/personal");
	};
</script>
<style lang="less" scoped>
	.admin-layout {
		width: 100%;
		min-width: 1280px;
		height: 100%;

		.header-layout {
			width: 100%;
			height: 60px;
			padding: 0 !important;
			display: flex;
			border-bottom: 1px solid @border-color-split;
			background: @layout-header-background;

			.header-logo {
				flex: 0 0 200px;
				text-align: center;

				.title {
					margin: 0 0 0 10px;
					font-size: 16px;
					white-space: nowrap;
				}
			}

			.header-menu {
				flex: 1;
				text-align: left; /* 文本内容靠左 */
			}

			.header-user {
				flex: 0 0 80px;

				.header-user-info {
					width: 100%;
					height: 60px;
					display: flex;
					align-items: center;

					.user-icon {
						margin-right: 5px;

						.anticon-user:hover {
							color: inherit;
						}
					}
				}
			}

			.header-user:hover {
				cursor: pointer;
			}
		}

		.sider-layout {
			background: @layout-sider-background;
		}

		.content-container {
			width: 100%;
			height: 100%;
			overflow: auto;

			.breadcrumb-container {
				width: 100%;
				height: 32px;
				line-height: 32px;
				display: flex;
				align-items: center;
				padding: 0 10px;
				background: @body-background;
			}

			.main-content {
				width: 100%;
				height: calc(100% - 32px);
				padding: 10px;
			}
		}

		.menu-container {
			background: @menu-bg;
		}
	}
</style>
