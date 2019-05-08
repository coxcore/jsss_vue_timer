<template>
    <ul>
        <li v-for="item in records" :key="item.label">
            <LapListItem :label="item.label" :record="item.record" />
        </li>
    </ul>
</template>

<script>
    import LapListItem from './LapListItem.vue';

    export default {
        name: 'LapList',
        props: {
            records: {
                type: Array,
                default: () => [],
            }
        },
        components: {
            LapListItem,
        },
    };
</script>

<style lang="scss" scoped>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        width: 100%;
        border-bottom: #DDD 1px solid;
        list-style: none;
        padding: 2vw;
        font-size: 6vw;
    }
</style>
