import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";
// 批量加载
const modules: Record<string, any> = import.meta.glob("./api/*.ts", {eager: true});

const mockModules: Array<string> = [];
Object.keys(modules).forEach((key) => {
	if (key.includes("/_")) {
		return;
	}
	mockModules.push(...modules[key].default);
});

export function setupProdMockServer() {
	console.log("mockModules", mockModules);
	createProdMockServer(mockModules);
}
