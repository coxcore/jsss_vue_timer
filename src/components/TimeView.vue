<template>
    <span :class="displayType">
        {{ recordString }}
    </span>
</template>

<script>
    import { recordFormat } from '../modules/utils';

    export default {
        name: 'TimeView',
        props: {
            displayType: {
                type: String,
                default: '',
            },
            record: {
                type: Number,
                default: 0,
            },
        },
        computed: {
            recordString() {
                return recordFormat(this.record);
            }
        }
    };
</script>

<style scoped>
    .big {
        font-size: 20vw;
        font-weight: bold;
    }
</style>
