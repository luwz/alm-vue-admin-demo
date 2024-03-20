import axios from "axios";

interface MockUserProfileInterface {
	userId: string;
}

/**
 * Mock数据请求测试 - 获取用户信息
 */
export async function mockUserProfile(params: MockUserProfileInterface) {
	return await axios.get("/mock/user/profile", {params: params});
}
