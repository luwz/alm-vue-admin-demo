import {MockMethod} from "vite-plugin-mock";

// 测试数据
export function createFakeUserList() {
	return [
		{
			userId: "3306",
			userName: "blindmonk",
			realName: "扫地盲僧",
			avatar: "https://api.multiavatar.com/blindmonk.svg",
			desc: "达摩深寺扫地僧，盲崖盘坐思人生",
			password: "blindmonk",
			token: "P1DeqWBao0HTU47Q",
			organization: "某大型公司CTO",
			location: "中国",
			email: "896226896@qq.com",
			auths: [],
			isAdmin: 1,
			devLanguages: "JavaScript/Vue/React/Node/PHP",
			blogGithub: "https://github.com/MaleWeb",
			blogJuejin: "https://juejin.cn/user/3016715636842622",
			blogZhihu: "https://www.zhihu.com/people/blind_monk",
			role: "admin"
		},
		{
			userId: "80",
			userName: "test",
			realName: "盲僧水友",
			avatar: "https://api.multiavatar.com/test.svg",
			desc: "欢迎加入扫地盲僧水友群",
			password: "test",
			token: "yg8bE8nZwiCL4nQg",
			organization: "某大型公司CTO",
			location: "中国",
			email: "8888@china.com",
			auths: [],
			isAdmin: 0,
			devLanguages: "JavaScript/Vue/React/Node/PHP",
			blogGithub: "https://github.com/MaleWeb",
			blogJuejin: "https://juejin.cn/user/3016715636842622",
			blogZhihu: "https://www.zhihu.com/people/blind_monk",
			role: "user"
		}
	];
}

// 返回参数类型定义
export interface requestParams {
	method: string;
	body: any;
	headers?: {authorization?: string};
	query: any;
}

export default [
	{
		url: "/mock/user/profile",
		timeout: 200,
		method: "get",
		response: (request: requestParams) => {
			const userId = request?.query.userId;
			const data = createFakeUserList().filter((v) => v.userId === userId)[0];
			return data;
		}
	}
] as MockMethod[];
