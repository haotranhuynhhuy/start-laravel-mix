<template>
    <div>Hello settings</div>
</template>
<script setup>
import useMenuStore from "../../../stores/menu";

const store = useMenuStore();
store.onSelectKey(["admin-setting"]);
</script>
