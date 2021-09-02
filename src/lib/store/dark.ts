import { browser } from '$app/env'
import { writable } from 'svelte/store'

export const state = writable({
  dark: browser && localStorage.getItem('dark') === 'true',
})

export const set = (toggle: boolean): void => {
  state.set({ dark: toggle })
  if (browser) {
    localStorage.setItem('dark', `${toggle}`)
  }
}
