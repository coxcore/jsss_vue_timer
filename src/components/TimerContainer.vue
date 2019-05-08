<template>
    <div class="root">
        <h1>{{ title }}</h1>
        <TimeView displayType="big" :record="time" />
        <div class="button_area">
            <button class="start" type="button" v-if="isStop" v-on:click="onStartClick">Start</button>
            <button class="stop" type="button" v-else v-on:click="onStopClick">Stop</button>
            <button class="reset" type="button" v-if="isStop" v-on:click="onResetClick">Reset</button>
            <button class="lap" type="button" v-else v-on:click="onLapClick">Lap</button>
        </div>
        <div class="listArea">
            <LapList :records="records" />
        </div>
    </div>
</template>

<script>
    import TimeView from './TimeView.vue';
    import LapList from './LapList.vue';

    export default {
        name: 'TimerContainer',
        props: {
            title: {
                type:String,
                default: 'Timer',
            },
            time: {
                type:Number,
                default: 0,
            },
            isStop: {
                type: Boolean,
                default: true,
            },
            lap: {
                type: Number,
                default: 0,
            },
            records: {
                type: Array,
                default: null,
            },
        },
        components: {
            TimeView,
            LapList,
        },
        methods: {
            onStartClick() {
                this.$emit('update:isStop', false);
            },
            onStopClick() {
                this.$emit('update:isStop', true);
            },
            onResetClick() {
                this.$emit('update:lap', 0);
            },
            onLapClick() {
                this.$emit('update:lap', this.lap + 1);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .root {
        margin: 0;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    h1 {
        font-size: 8vw;
    }

    .button_area {
        margin-top: 10vw;
        margin-bottom: 10vw;

        button {
            margin-left: 7vw;
            width: 30vw;
            height: 17vw;
            font-size: 6vw;
            font-weight: bold;
            background-color: #999999;
            border-radius: 10vw;
            border: 0;
            color: #fff;
            cursor: pointer;
            // https://www.w3schools.com/cssref/css3_pr_user-select.asp
            user-select: none; /* Standard syntax */
        }

        button:nth-child(1) {
            margin: 0;
        }

        .start {
            background-color: lightgreen;
        }

        .stop {
            background-color: indianred;
        }

        .lap {
            background-color: deepskyblue;
        }
    }

    .listArea {
        position: absolute;
        height: 50vh;
        width: 100%;
        top: 50vh;
        border-top: #ddd 1px solid;
        background-color: #f6f6f6;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
