import {visualizer} from "rollup-plugin-visualizer";

export const VisualizerPlugin = () => {
	return visualizer({
		filename: "./node_modules/.cache/visualizer/stats.html",
		open: true,
		gzipSize: true,
		brotliSize: true
	});
};
