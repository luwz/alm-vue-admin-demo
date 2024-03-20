import {ConfigEnv, UserConfig, loadEnv} from "vite";
import {createVitePlugins} from "./build/vite/plugins";
import {createViteBuild} from "./build/vite/build";
import {createViteCss} from "./build/vite/css";
import {VITE_PORT, BASE_NAME} from "./build/constant";
import {resolve} from "path";

/**
 * @introduction 路径解析
 *
 * @param dir
 */
function pathResolve(dir: string) {
	return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default ({command, mode}: ConfigEnv): UserConfig => {
	const isBuild = command === "build";
	const base = command === "build" && BASE_NAME ? "/" + BASE_NAME + "/" : "/";
	const env = loadEnv(mode, process.cwd());

	return {
		base,

		define: {
			"process.env": env
		},

		resolve: {
			alias: [
				{
					find: "vue-i18n",
					replacement: "vue-i18n/dist/vue-i18n.cjs.js"
				},
				{
					find: /\/#\//,
					replacement: pathResolve("types") + "/"
				},
				{
					find: /\/@\//,
					replacement: pathResolve("src") + "/"
				}
			]
		},

		// 打包
		build: createViteBuild(),

		// 插件
		plugins: createVitePlugins(isBuild),

		// css
		css: createViteCss(),

		// 服务启动
		server: {
			hmr: {overlay: false},      // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
			port: VITE_PORT,            // 类型： number 指定服务器端口;
			open: true,                // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
			cors: true,                 // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
			host: "0.0.0.0"            // IP配置，支持从IP启动
		}
	};
};
