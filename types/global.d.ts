/* eslint-disable */
declare module "*.vue" {
	import { ComponentOptions } from "vue";
	const component: ComponentOptions<{}, {}, any>;
	export default component;
}

declare module "virtual:*" {
	const result: any;
	export default result;
}
