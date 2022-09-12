<template>
    <div>
        <ul>
            <li v-for="item in data">
                <span :key="item.id">
                    <template v-if="showId">Id: {{item.id}} / </template>
                    Name: {{item.name}} /
                    Age:
                    <template v-if="canEditAge">
                        <input v-model="item.age" type="number" />
                    </template>
                    <template v-else>
                        {{item.age}}
                    </template>
                    <template v-if="item.children">
                        <div>Child:</div>
                        <ul>
                            <user-list :data="item.children" />
                        </ul>
                    </template>
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { DataItem } from '../assets/data.js';
interface Props {
    data: DataItem[];
    showId?: boolean;
    canEditAge?: boolean;
}

const props = withDefaults(
    defineProps<Props>(),
    {
        showId: false,
        canEditAge: true,
    }
);
</script>