import {Controller} from "/@/core/controller/Controller";
import {LoginQueryDTO} from "/@/core/dto/login/LoginQueryDTO";
import {ApiConstants} from "/@/core/api/ApiConstants";
import axios from "axios";

export class MockUserController extends Controller {
	public static async login(queryDTO: LoginQueryDTO): Promise<any> {
		return await Controller.asyncMock(async () => {
			return await axios.get(ApiConstants.USER_LOGIN, {params: queryDTO});
		});
	}
}
