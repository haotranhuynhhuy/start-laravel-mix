<template>
    <Header />
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered style="width: 100%">
                    <Menu />
                    <template #header>
                        <div>Bang dieu khien</div>
                    </template>
                </a-list>
            </div>
            <div class="col-12 col-sm-9">
                <RouterView />
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from "../components/Header/index.vue";
import Menu from "../components/Menu/index.vue";
</script>
