<template>
    <div class="comp">
        <h1>{{ tit }}</h1>
        <TimeView
                :isStop="isStop"
                :isReset="isReset"
        />
        <div class="button_area">
            <button id="start" type="button" v-if="isStop" v-on:click="onStartClick">Start</button>
            <button id="stop" type="button" v-else v-on:click="onStopClick">Stop</button>
            <button id="reset" type="button" v-if="isStop" v-on:click="onResetClick">Reset</button>
            <button id="lap" type="button" v-else v-on:click="onLapClick">Lap</button>
        </div>
    </div>
</template>

<script>
	import TimeView from './TimeView.vue';


	export default {
		name: 'TimerContainer',
		props: {
			tit: String,
		},
		data() {
			return {
				isStop: true,
				isReset: true,
			};
		},
		components: {
			TimeView,
		},
		methods: {
			onStartClick() {
				this.isStop = false;
				this.isReset = false;
			},
			onStopClick() {
				this.isStop = true;
			},
			onResetClick() {
				this.isReset = true;
			},
			onLapClick() {
			},
		},
	};
</script>

<style lang="scss" scoped>
    .comp {
        margin: 0px;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;

        h1 {
            font-size: 8vw;
        }

        .button_area {
            margin-top: 10vw;

            button {
                margin-left: 7vw;
                width: 30vw;
                height: 17vw;
                font-size: 6vw;
                background-color: #999999;
                border-radius: 10vw;
                border: 0;
                color: #fff;
                font-weight: bold;
            }

            button:nth-child(1) {
                margin: 0;
            }

            #start {
                background-color: lightgreen;
            }

            #stop {
                background-color: indianred;
            }

            #lap {
                background-color: deepskyblue;
            }
        }
    }
</style>
