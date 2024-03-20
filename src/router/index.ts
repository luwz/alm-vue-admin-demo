import {createRouter, createWebHistory} from "vue-router";
import {setupLayouts} from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {AlmAuth} from "/@/core/utils/AlmAuth";
import {BASE_NAME} from "../../build/constant";

const routes = setupLayouts(generatedRoutes);
const base = process.env.NODE_ENV === "production" && BASE_NAME ? "/" + BASE_NAME + "/" : "/";
const router = createRouter({history: createWebHistory(base), routes});

router.beforeEach(async (to, _from, next) => {
	// 默认所有的页面都需要进行登录验证
	if(typeof to.meta.requiresAuth !== "undefined" && to.meta.requiresAuth === false) {
		NProgress.start();
		next();
		return;
	}

	// 检查是否已经登录，如果未登录，则跳转到登录
	const logged = AlmAuth.loggedIn();
	if(!logged) {
		next("/login");
	} else {
		NProgress.start();
		next();
	}
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
