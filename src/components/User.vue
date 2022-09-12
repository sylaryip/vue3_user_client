<template>
    <ul>
        <li v-for="item in data">
            <span :key="item.id">
                {{item.name}}
                <input v-model="item.age" type="number" />
                <template v-if="item.children">
                    <hr />
                    <div>Child:</div>
                    <ul>
                        <user :data="item.children" />
                    </ul>
                </template>
            </span>
        </li>
    </ul>
</template>

<script setup lang="ts">
const props = defineProps(['data']);
</script>