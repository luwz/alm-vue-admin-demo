import {createPinia} from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersist);
pinia.use(piniaPluginPersistedState);
export default pinia;
