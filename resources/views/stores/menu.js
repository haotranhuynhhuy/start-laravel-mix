import { defineStore } from "pinia";
import { ref } from "vue";

const useMenuStore = defineStore("menuId", () => {
    const selectedKey = ref(["admin-users"]);
    const openKeys = ref([]);
    const onSelectKey = (data) => {
        selectedKey.value = data;
    };
    const onOpenKeys = (data) => {
        openKeys.value = data;
    };
    return {
        selectedKey,
        onSelectKey,
        openKeys,
        onOpenKeys,
    };
});
export default useMenuStore;
