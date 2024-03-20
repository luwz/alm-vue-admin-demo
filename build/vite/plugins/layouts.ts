import Layouts from "vite-plugin-vue-layouts";

export const LayoutPlugin = () => {
	return Layouts({
		layoutsDirs: "src/layouts",
		defaultLayout: "index"
	});
};
