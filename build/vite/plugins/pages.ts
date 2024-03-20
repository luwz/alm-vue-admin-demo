import Pages from "vite-plugin-pages";

export const PagesPlugin = () => {
	return Pages({
		pagesDir: [{dir: "src/views", baseRoute: ""}],
		extensions: ["vue", "md"],
		importMode: "async",
		exclude: ["**/components/*.vue", "**/container/*.vue"]
	});
};
