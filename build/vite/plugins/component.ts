import Components from "unplugin-vue-components/vite";
import {AntDesignVueResolver, VueUseComponentsResolver} from "unplugin-vue-components/resolvers";
import {ENABLE_THEME} from "../../constant";

/**
 * @introduction 按需加载，自动引入组件
 * @constructor
 */
export const AutoRegistryComponentsPlugin = () => {
	return Components({
		dirs: ["src/components"],
		extensions: ["vue"],
		deep: true,
		dts: "types/components.d.ts",
		directoryAsNamespace: false,
		globalNamespaces: [],
		directives: true,
		importPathTransform: (v) => v,
		allowOverrides: true,
		include: [/\.vue$/, /\.vue\?vue/],
		exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
		resolvers: [
			AntDesignVueResolver({importStyle: ENABLE_THEME ? "less" : "css", resolveIcons: true, cjs: false}),
			VueUseComponentsResolver()
		]
	});
};
