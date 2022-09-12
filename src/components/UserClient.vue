<template>
    <user :data="data" />
    <hr />
    <input type="text" placeholder="Search..." v-model="keyword" />
    <p>result:</p>
    <user :data="searchResult" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { data as originData, DataItem } from '../assets/data.js';
import user from './User.vue';

const data = ref(originData);
const keyword = ref('');
const searchResult = computed(() => {
    if (keyword.value.length === 0) {
        return null;
    }
    return [..._walk(data.value)];
});

const _walk = (list: DataItem[]) => {
    const result: DataItem[] = [];
    list.forEach((el) => {
        if (el.id.toString().startsWith(keyword.value) ||
            el.name.toUpperCase()
                .startsWith(keyword.value.toUpperCase()) ||
            el.age.toString().startsWith(keyword.value)
        ) {

            result.push({
                id: el.id,
                name: el.name,
                age: el.age,
            });
        }
        if (el.children != null) {
            result.push(..._walk(el.children));
        }
    });
    return result;
}

</script>
