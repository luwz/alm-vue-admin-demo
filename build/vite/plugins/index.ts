/**
 * @introduction 封装统一的vite调用插件
 */
import {PluginOption} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import {AutoRegistryComponentsPlugin} from "./component";
import {AutoImportPlugin} from "./autoImport";
import {CompressPlugin} from "./compress";
import {VisualizerPlugin} from "./visualizer";
import {EslintPlugin} from "./eslint";
import {CheckerPlugin} from "./checker";
import {StyleLintPlugin} from "./stylelint";
import {MockPlugin} from "./mock";
import {PagesPlugin} from "./pages";
import {LayoutPlugin} from "./layouts";
import {ProgressPlugin} from "./progress";
import {ThemePlugin} from "./theme";

export function createVitePlugins(isBuild: boolean) {
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		// vue支持
		vue(),

		// JSX支持
		vueJsx()
	];

	// 自动按需引入组件
	vitePlugins.push(AutoRegistryComponentsPlugin());

	// 自动导入
	vitePlugins.push(AutoImportPlugin());

	// 开启zip压缩
	vitePlugins.push(CompressPlugin());

	// 包依赖分析
	vitePlugins.push(VisualizerPlugin());

	// Eslint限制
	vitePlugins.push(EslintPlugin());

	// 当typescript语法错误时浏览器给出错误提示弹窗,强制开发者修改ts错误
	vitePlugins.push(CheckerPlugin());

	// StyleLint规则校正
	vitePlugins.push(StyleLintPlugin());

	// mock本地数据测试
	vitePlugins.push(MockPlugin(isBuild));

	// 自动生成路由
	vitePlugins.push(PagesPlugin());

	// 页面可以自由组合布局，可以在页面加载指定的layout
	vitePlugins.push(LayoutPlugin());

	// 打包是展示进度条插件
	vitePlugins.push(ProgressPlugin());

	// 定制主题切换
	vitePlugins.push(ThemePlugin());

	return vitePlugins;
}
