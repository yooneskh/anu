import { createDefu } from 'defu'
import type { LiteralUnion } from 'type-fest'
import type { PropType } from 'vue'
import type { ConfigurableValue } from 'anu-vue/composables/useConfigurable'
import type { ThemeColors } from 'anu-vue/plugin'
import type { Transitions } from 'anu-vue/transitions'
import type { NamedColors } from 'anu-vue/utils/color'

export type ColorProp = LiteralUnion<ThemeColors | NamedColors, string> | undefined

export const color = {
  type: [String, undefined] as PropType<ColorProp>,
} as const

export const disabled = { type: Boolean } as const

export const readonly = { type: Boolean } as const

export const configurable = {
  type: [Array, String, Number, Object, undefined] as PropType<ConfigurableValue>,
} as const

export const transition = {
  type: [String, null] as PropType<LiteralUnion<Transitions, string> | null>,
} as const

export const defuProps = createDefu((obj, key, value) => {
  // If merging type => Just override the existing type
  if (key === 'type') {
    obj[key] = value

    return true
  }

  // Remove default value if `required: true` is passed
  else if (key === 'required' && value) {
    delete obj.default

    // Assign required as usual
    obj[key] = value

    return true
  }
})
