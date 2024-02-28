import * as events from './events.js'
import * as timer from './timer.js'

export function start() {
    timer.updateDisplay()
    events.registerControls()
    events.setMinutes()
}