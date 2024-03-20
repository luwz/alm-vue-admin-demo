import {viteMockServe} from "vite-plugin-mock";
import {resolve} from "path";
import {PROD_MOCK} from "../../constant";

export const MockPlugin = (isBuild: boolean) => {
	return viteMockServe({
		supportTs: true,
		logger: false,
		ignore: /^_/,
		mockPath: "mock",
		localEnabled: !isBuild,
		prodEnabled: isBuild && PROD_MOCK, // 实际开发请关闭，会影响打包体积
		// https://github.com/anncwb/vite-plugin-mock/issues/9
		// injectCode: `
		//    import { setupProdMockServer } from "../mock/_createProdMockServer";
		//    setupProdMockServer();
		// `,
		watchFiles: true, // 监听文件内容变更
		injectFile: resolve("src/main.ts") // 在main.ts注册后需要在此处注入，否则可能报找不到setupProdMockServer的错误
	});
};
