import * as el from './elements.js'
import * as actions from './actions.js'

export function registerSoundControls() {
    el.soundControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != 'function'){
            return
        }

        actions[action](event.target)
    })
}