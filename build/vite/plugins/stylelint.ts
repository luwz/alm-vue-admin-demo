import viteStylelint from "vite-plugin-stylelint";
import {STYLE_LINT} from "../../constant";

export const StyleLintPlugin = () => {
	if(STYLE_LINT) {
		return viteStylelint();
	}

	return [];
};
