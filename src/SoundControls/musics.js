import state from './state.js'
import * as el from './elements.js'
import *as sounds from './sounds.js'

export function changeMusic(target) {
    const chosenMusic = el.soundControls.querySelector(` #${target.id}`)
    const currentMusic = el.soundControls.querySelector(` #${state.currentMusic}`)

    if((state.currentMusic == null) || (state.currentMusic != target.id)) {
        if(state.currentMusic != null){
            currentMusic.classList.remove('selected')
            pauseSounds(null, state.currentMusic)
        }
        state.currentMusic = target.id
        chosenMusic.classList.add('selected')
        playSounds(target.id)
    }else if (state.currentMusic == target.id) {
        pauseSounds(null, state.currentMusic)
        state.currentMusic = null
        currentMusic.classList.remove('selected')
    }
}

function playSounds(currentMusic, chosenMusic) {
    if((currentMusic == 'forest') || (chosenMusic == 'forest')){
        sounds.forest.play()
    }else if ((currentMusic == 'rain') || (chosenMusic == 'rain')){
        sounds.rain.play()
    }else if ((currentMusic == 'coffeShop') || (chosenMusic == 'coffeShop')){
        sounds.coffeShop.play()
    }else if ((currentMusic == 'campFire') || (chosenMusic == 'campFire')){
        sounds.campFire.play()
    }
}

function pauseSounds(currentMusic, chosenMusic) {
    if((currentMusic == 'forest') || (chosenMusic == 'forest')){
        sounds.forest.pause()
    }else if ((currentMusic == 'rain') || (chosenMusic == 'rain')){
        sounds.rain.pause()
    }else if ((currentMusic == 'coffeShop') || (chosenMusic == 'coffeShop')){
        sounds.coffeShop.pause()
    }else if ((currentMusic == 'campFire') || (chosenMusic == 'campFire')){
        sounds.campFire.pause()
    }
}