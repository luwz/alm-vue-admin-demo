import {defineStore, StateTree} from "pinia";

const options: StateTree = {
	persist: true,
	state: () => {
		return {
			"accessToken": null,
			"accessExpire": 0
		};
	},
	getters: {
	},
	actions: {
		async setAccessToken(accessToken: string): Promise<void> {
			this.accessToken = accessToken;
		},

		async setAccessExpire(accessExpire: number): Promise<void> {
			this.accessExpire = accessExpire;
		}
	}
};

export const useUserStore = defineStore("user", options);
