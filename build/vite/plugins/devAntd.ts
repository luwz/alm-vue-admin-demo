export const DevAntdPlugin = () => {
	return {
		name: "dev-auto-import-antd",
		transform(code, id) {
			if (/src\/main.ts$/.test(id)) {
				const result = code.split("\n");
				// 解决首次加载isCustomElement的问题
				result.splice(result.length - 2, 0, "import Antd from 'ant-design-vue'; import 'ant-design-vue/dist/antd.less'; app.use(Antd);");
				return {
					code: result.join("\n"),
					map: null
				};
			}
		},

		apply: "serve"
	} as any;
};
