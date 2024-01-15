import dayjs from 'dayjs'
import { createSignal } from 'solid-js'
import { locale } from '~/i18n'

export const formatTimeFromNow = (time: number | string) =>
  dayjs(time).locale(locale()).fromNow()

export const [backendVersion, setBackendVersion] = createSignal('')
