<template>
    <div class="comp">
        <span>{{ label }}</span>
        <TimeView :record="record"/>
    </div>
</template>

<script>
    import TimeView from './TimeView.vue';

    export default {
        name: 'LapListItem',
        props: {
            label: {
                type: String,
                default: 'Lap',
            },
            record: {
                type: Number,
                default: 0,
            }
        },
        components: {
            TimeView,
        },
    };
</script>

<style lang="scss">
    .comp {
        text-align: left;
        font-size: 6vw;
        margin: 0 5vw;
    }
</style>
