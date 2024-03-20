import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError} from "axios";
import {Result} from "/@/core/dto/Result";
import {useUserStore} from "/@/store/modules/user";

// 创建对象
const baseUrl = "";
const http: AxiosInstance = axios.create({
	timeout: 60000,
	baseURL: baseUrl,
	headers: {}
});

// 请求拦截器
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const userStore = useUserStore();
	config.headers["accessToken"] = userStore["accessToken"];
	return config;
}, (error: any) => {
	return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use((response: AxiosResponse) => {
	return Promise.resolve(response);
}, (error: AxiosError) => {
	return Promise.reject(error);
});

/**
 * Post请求
 *
 * @param url 接口地址
 * @param params 请求参数
 */
export function PostHttp<T>(url: string, params?: T): Promise<Result> {
	return http.post(url, params);
}

/**
 * Get请求
 *
 * @param url 接口地址
 * @param params 请求参数
 */
export function GetHttp<T>(url: string, params?: T): Promise<Result> {
	return http.get(url, {params: params});
}

/**
 * Put请求
 *
 * @param url 接口地址
 * @param params 请求参数
 */
export function PutHttp<T>(url: string, params?: T): Promise<Result> {
	return http.put(url, params);
}

/**
 * Patch请求
 *
 * @param url 接口地址
 * @param params 请求参数
 */
export function PatchHttp<T>(url: string, params?: T): Promise<Result> {
	return http.patch(url, params);
}

/**
 * Delete请求
 *
 * @param url 接口地址
 * @param params 请求参数
 */
export function DeleteHttp<T>(url: string, params?: T): Promise<Result> {
	return http.delete(url, {params: params});
}

/**
 * Head请求
 *
 * @param url 接口地址
 * @param params 请求参数
 */
export function HeadHttp<T>(url: string, params?: T): Promise<Result> {
	return http.head(url, {params: params});
}

// 导出Http的请求对象
export default http;
