import { browser } from '$app/env'
import { writable } from 'svelte/store'
import debounce from '$utils/debounce'

export const breakpoint = writable()

const getBreakpoint = () => {
  if (browser) {
    const screenWidth = window.screen.width
    if (screenWidth <= 640) breakpoint.set('sm')
    else if (screenWidth > 640 && screenWidth <= 768) breakpoint.set('md')
    else if (screenWidth > 768 && screenWidth <= 1024) breakpoint.set('lg')
    else if (screenWidth > 1204 && screenWidth <= 1280) breakpoint.set('xl')
    else if (screenWidth > 1280) breakpoint.set('xxl')
  }
}

const debounced = debounce(getBreakpoint, 100)

if (browser) {
  window.addEventListener('resize', debounced)
  getBreakpoint()
}
