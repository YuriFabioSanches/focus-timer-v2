import state from "./state.js";
import * as el from './elements.js'
import { reset } from "./actions.js";

export function countdown() {
    clearTimeout(state.countDownId)

    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        return
    }

    updateDisplay(minutes, seconds)

    state.countDownId = setTimeout( () => countdown(), 1000)
}

export function increaseTime() {

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    minutes += 5

    
    if(minutes >= 60) {
        minutes = 60
        seconds = 0
    }
    
    updateDisplay(minutes, seconds)
}

export function decreaseTime() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    minutes -= 5

    if(minutes < 0) {
        minutes = 0
    }

    updateDisplay(minutes, seconds)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent= String(seconds).padStart(2, '0')
}