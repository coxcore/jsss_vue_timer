<template>
    <div class="comp">
        <h1>{{ tit }}</h1>
        <TimeView
                :minute="minute"
                :second="second"
                :tenMillisecond="tenMillisecond"
        />
        <div class="button_area">
            <button id="start" type="button" v-if="isStop" v-on:click="onStartClick">Start</button>
            <button id="stop" type="button" v-if="!isStop" v-on:click="onStopClick">Stop</button>
            <button id="reset" type="button" v-on:click="onResetClick">Reset</button>
        </div>
    </div>
</template>

<script>
import TimeView from './TimeView.vue';

let timer;

export default {
    name: 'J3STimer',
    props: {
        tit: String
    },
    data() {
    	return {
            isStop: true,
            tenMillisecond: 0,
			second: 0,
			minute: 0,

        };
    },
	components: {
    	TimeView,
    },
    methods: {
		onStartClick() {
			if (timer)
				return;

			this.isStop = false;

			timer = setInterval(() => {
				if (this.tenMillisecond === 99) {
					this.tenMillisecond = 0;
					if (this.second === 59) {
						this.second = 0;
						this.minute++;
                    } else {
						this.second++;
                    }
                } else {
					this.tenMillisecond++;
                }
                console.log(this.tenMillisecond);
			}, 10)

        },
        onStopClick() {
			this.isStop = true;
			clearInterval(timer);
			timer = null;
        },
        onResetClick() {
			this.tenMillisecond = 0;
			this.second = 0;
			this.minute = 0;
        }
    }
};
</script>

<style lang="scss" scoped>
    .comp {
        margin: 0px;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border: 10px solid #999;

        h1 {
            font-size: 8vw;
        }

        .button_area {
            margin-top: 4vw;

            button {
                margin-left: 3vw;
                width: 15vw;
                height: 8vw;
                background-color: #999999;
                border-radius: 1vw;
                border: 0;
                color: #fff;
                font-weight: bold;
                font-size: 3vw;
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
        }
    }
</style>
