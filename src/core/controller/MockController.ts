import {Controller} from "./Controller";
import {mockUserProfile} from "/@/core/models/aboutMock";

export class MockController extends Controller {
	/**
	 * Mock请求测试-用户的信息
	 */
	public static async mockUserProfileData() {
		await mockUserProfile({userId: "3306"});
	}
}
