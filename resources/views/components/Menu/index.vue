<template>
    <a-menu
        v-model:selectedKeys="store.selectedKey"
        v-model:openKeys="store.openKeys"
        mode="inline"
    >
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <span> <UserOutlined /> Tai khoan</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <span> <TagOutlined /> Vai tro</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-setting">
            <router-link :to="{ name: 'admin-setting' }">
                <span><SettingOutlined /> Cai dat</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>

<script setup>
import {
    UserOutlined,
    TagOutlined,
    SettingOutlined,
} from "@ant-design/icons-vue";
import useMenuStore from "../../stores/menu";
const store = useMenuStore();
</script>
