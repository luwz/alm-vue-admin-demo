import eslintPlugin from "vite-plugin-eslint";
import {ESLINT} from "../../constant";

export const EslintPlugin = () => {
	if (ESLINT) {
		return eslintPlugin({
			include: [
				"src/**/*.ts", "src/*.ts",
				"src/**/*.vue", "src/*.vue",
				"build/**/*.ts", "build/*.ts",
				"mock/**/*.ts", "mock/*.ts",
				"packages/**/*.ts", "packages/**/*.d.ts",
				"packages/**/*.vue"
			]
		});
	}

	return [];
};
