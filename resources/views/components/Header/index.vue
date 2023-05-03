<template>
    <div class="container-fluid">
        <div class="row text-white p-2" style="background-color: #0c713d">
            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawer(1)"><MenuOutlined /></span>
            </div>
            <div
                class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start"
            >
                <img
                    src="../../assets/image/logo.png"
                    alt="logo"
                    class="ms-3 me-3"
                    height="32"
                    width="34"
                />
                <span class="d-none d-sm-flex">QUAN TRI</span>
            </div>
            <div
                class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end"
            >
                <span>ADMIN</span>
            </div>
            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawer(2)"><UserOutlined /></span>
            </div>
        </div>
    </div>
    <a-drawer v-model:visible="visible" title="Danh Muc" placement="left">
        <Menu />
    </a-drawer>
    <a-drawer v-model:visible="visibleUser" title="Thong tin" placement="right">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>

<script setup>
import Menu from "../Menu/index.vue";
import { MenuOutlined, UserOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const visible = ref(false);
const visibleUser = ref(false);
const showDrawer = (id) => {
    if (id === 1) {
        visible.value = true;
    } else {
        visibleUser.value = true;
    }
};
</script>

<style lang="scss" scoped></style>
