import { create } from 'zustand'
import type { Pokemon } from './types'

interface State {
  data: Pokemon | null
  setData: (data: Pokemon | null) => void
}

const useModal = create<State>((set) => ({
  data: null,
  setData: (data) => set({ data })
}))

export default useModal
