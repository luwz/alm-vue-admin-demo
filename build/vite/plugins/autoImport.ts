/**
 * @introduction 自动导入
 *                  按需加载
 */
import AutoImport from "unplugin-auto-import/vite";

export const AutoImportPlugin = () => {
	return AutoImport({
		dts: "types/auto-imports.d.ts",
		imports: [
			"vue",
			"pinia",
			"vue-router",
			{
				"@vueuse/core": []
			}
		]
	});
};
