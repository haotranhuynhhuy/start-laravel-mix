<template>
    <div>Hello user</div>
</template>
<script setup>
import useMenuStore from "../../../stores/menu";

const store = useMenuStore();
store.onSelectKey(["admin-users"]);
</script>
