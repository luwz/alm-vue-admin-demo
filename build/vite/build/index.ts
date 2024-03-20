/**
 * @introduction 封装统一的打包配置
 */
import {MINIFY_BUILD} from "../../constant";

export const createViteBuild = () => {
	if (MINIFY_BUILD) {
		return {
			// 打包结果是否minify
			minify: true,
			// 块大小警告的限制 1000kb
			chunkSizeWarningLimit: 1000,
			terserOptions: {
				compress: {
					// eslint-disable-next-line
					drop_console: true,
					// eslint-disable-next-line
					drop_debugger: true
				}
			},
			rollupOptions: { // vite打包是通过rollup来打包的
				// 配置多端入口
				input: {
					index: "index.html",
					home: "home.html"
				},
				output: {
					manualChunks: (id: string) => {
						// 可以在这里打印看一下id的值，这里做个简单处理将node_modules中的包打包为vendor文件
						if (id.includes("node_modules")) {
							const file: string = id.toString().split("node_modules/")[1].toString();
							if (file.includes(".pnpm/")) {
								const strings: string[] = file.split("/").filter((e) => typeof e !== "undefined" && e);
								if(strings.length <= 1) {
									return ".pnpm";
								} else {
									return ".pnpm/".concat(strings[1]);
								}
							} else {
								return "vender";
							}
						}
					},
					chunkFileNames: (chunkInfo) => {
						const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split("/") : [];
						const fileName = facadeModuleId[facadeModuleId.length - 2] || "[name]";
						return `js/${fileName}/[name].[hash].js`;
					}
				}
			}
		};
	}

	return {};
};
