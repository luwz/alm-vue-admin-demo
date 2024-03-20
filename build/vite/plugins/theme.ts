import {themePreprocessorPlugin} from "@zougt/vite-plugin-theme-preprocessor";
import path from "path";

/**
 * @introduction 定制动态主题切换
 */
export const ThemePlugin = () => {
	return themePreprocessorPlugin({
		less: {
			// 各个主题文件的位置
			multipleScopeVars: [
				// 明亮
				{scopeName: "theme-bright", path: path.resolve("src/theme/bright.less")},
				{scopeName: "theme-bright-cyan", path: path.resolve("src/theme/bright-cyan.less")},
				{scopeName: "theme-bright-orange", path: path.resolve("src/theme/bright-orange.less")},
				{scopeName: "theme-bright-purple", path: path.resolve("src/theme/bright-purple.less")},
				// 暗黑
				{scopeName: "theme-dark", path: path.resolve("src/theme/dark.less")},
				{scopeName: "theme-dark-cyan", path: path.resolve("src/theme/dark-cyan.less")},
				{scopeName: "theme-dark-orange", path: path.resolve("src/theme/dark-orange.less")},
				{scopeName: "theme-dark-purple", path: path.resolve("src/theme/dark-purple.less")}
			],
			defaultScopeName: "theme-dark",      // 默认取 multipleScopeVars[0].scopeName
			extract: false                          // 在生产模式是否抽取独立的主题css文件
		}
	});
};
