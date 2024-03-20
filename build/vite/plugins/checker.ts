/**
 * @introduction typescript语法错误时浏览器给出错误提示弹窗
 */
import VitePluginChecker from "vite-plugin-checker";
import {TS_CHECKER} from "../../constant";

export const CheckerPlugin = () => {
	return VitePluginChecker({
		// 当typescript语法错误时浏览器给出错误提示弹窗,强制开发者修改ts错误
		typescript: TS_CHECKER
	});
};
