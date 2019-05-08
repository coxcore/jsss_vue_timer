<template>
    <div id="app">
        <TimerContainer
            title="JSSS' Timer"
            :time="time"
            :lap.sync="lap"
            :isStop.sync="isStop"
            :records="records"
        />
    </div>
</template>

<script>
    import TimerContainer from './components/TimerContainer.vue';

    import TimerManager from './modules/TimerManager';
    import RecordsModel from './modules/RecordsModel';

    export default {
        name: 'app',
        components: {
            TimerContainer,
        },
        data() {
            return {
                lap: 0,
                time: 0,
                isStop: true,
                records: null,
                timer: null,
                model: null,
            }
        },
        watch: {
            lap(value) {
                if (value === 0) {
                    this.timer.stop();
                    this.model.reset();

                    this.time = 0;
                    this.records = this.model.list;
                } else {
                    this.model.addRecord(`Lap ${value}`, this.time);
                }
            },
            isStop(value) {
                if (value) {
                    this.timer.pause();

                    return;
                }

                if (this.lap === 0) {
                    this.lap = 1;
                }

                this.timer.resume();
            },
        },
        created() {
            this.timer = new TimerManager();
            this.model = new RecordsModel();

            this.records = this.model.list;

            this.timer.on(TimerManager.CHANGE, this.onUpdateTime);
        },
        methods: {
            onUpdateTime(target) {
                this.time = target.time;

                this.model.updateLatestRecord(target.time);
            },
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    div {
        box-sizing: border-box;
    }
</style>
