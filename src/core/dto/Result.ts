/**
 * 确定返回值的类型
 *
 * @param T
 */
export interface ResultData<T> {
	status: boolean,
	message: string,
	errorCode: string,
	data: T
}

export interface Result<T = ResultData<any>> {
	status: boolean,
	success: boolean,
	message: string,
	data: T
}
