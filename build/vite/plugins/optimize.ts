import fs from "fs";
import path from "path";

const rootPath = path.resolve(__dirname, "./");

/**
 * @introduction 优化antd组件加载插件
 *
 * @constructor
 */
export const OptimizeDepsPlugin = () => {
	return {
		name: "optimizeDeps",
		configResolved: (config) => {
			if(typeof config.optimizeDeps.include === "undefined" || !config.optimizeDeps.include) {
				config.optimizeDeps.include = [];
			}

			const antd = optimizeAntd();
			const concat = config.optimizeDeps.include.concat(antd);
			config.optimizeDeps.include = Array.from(new Set(concat));
		}
	};
};

/**
 * @introduction 优化antd组件的加载
 */
function optimizeAntd() {
	const includes: string[] = ["ant-design-vue/es"];
	const folders = fs.readdirSync(
		path.resolve(rootPath, "../../../node_modules/ant-design-vue/es")
	);
	folders.map((name) => {
		const folderName = path.resolve(
			rootPath,
			"../../../node_modules/ant-design-vue/es",
			name
		);
		const stat = fs.lstatSync(folderName);
		if (stat.isDirectory()) {
			const styleFolder = path.resolve(folderName, "style");
			if (fs.existsSync(styleFolder)) {
				const stat = fs.lstatSync(styleFolder);
				if (stat.isDirectory()) {
					includes.push(`ant-design-vue/es/${name}/style`);
				}
			}
		}
	});

	return includes;
}
