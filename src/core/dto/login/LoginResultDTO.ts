export interface LoginResultDTO {
	/**
	 * @var token值
	 */
	accessToken: string | null,

	/**
	 * @var 过期时间
	 */
	accessExpire: number | null
}
