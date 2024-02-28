import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function set() {
    if(!state.isRunning){
        el.minutes.setAttribute('contenteditable', true)
        el.minutes.focus()
    }
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function increase() {
    timer.increaseTime()
}

export function decrease() {
    timer.decreaseTime()
}