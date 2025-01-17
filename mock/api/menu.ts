import {MockMethod} from "vite-plugin-mock";
import menus from "../data/menu.json";

export default [
	{
		url: "/mock/menus",
		timeout: 200,
		method: "get",
		response: () => {
			return menus;
		}
	}
] as MockMethod[];
