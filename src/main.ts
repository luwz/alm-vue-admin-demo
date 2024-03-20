import {createApp} from "vue";
import App from "./App.vue";
import piniaStore from "./store";
import router from "./router";
import "./assets/css/global.less";

// 多语言
import i18n from "/@/i18n";

// 如果生产环境下运行开启MOCK功能，则导入Mock生产环境功能
import {PROD_MOCK} from "../build/constant";
import {setupProdMockServer} from "../mock/_createProdMockServer";
if(process.env.NODE_ENV === "production" && PROD_MOCK) {
	setupProdMockServer();
}

const app = createApp(App);
app.use(piniaStore);
app.use(router);
app.use(i18n);
app.mount("#app");
