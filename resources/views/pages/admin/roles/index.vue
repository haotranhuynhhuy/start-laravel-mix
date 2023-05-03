<template>
    <div>Hello roles</div>
</template>
<script setup>
import useMenuStore from "../../../stores/menu";

const store = useMenuStore();
store.onSelectKey(["admin-roles"]);
</script>
