import { makePersisted } from '@solid-primitives/storage'
import { createMemo, createSignal } from 'solid-js'
import { backendVersion } from '~/signals'

export const isSingBox = createMemo(() => {
  return backendVersion().includes('sing-box')
})

export const transformEndpointURL = (url: string) =>
  /^https?/.test(url) ? url : `${window.location.protocol}//${url}`

export const useStringBooleanMap = (isPersisted?: string) => {
  const [map, setMap] = isPersisted
    ? makePersisted(createSignal<Record<string, boolean>>({}), {
        name: isPersisted,
        storage: localStorage,
      })
    : createSignal<Record<string, boolean>>({})
  const set = (name: string, value: boolean) => {
    setMap({
      ...map(),
      [name]: value,
    })
  }

  const setWithCallback = async (
    name: string,
    callback: () => Promise<void>,
  ) => {
    set(name, true)
    try {
      await callback()
    } catch {}
    set(name, false)
  }

  return {
    map,
    set,
    setWithCallback,
  }
}
