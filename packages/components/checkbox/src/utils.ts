import { isNil } from 'lodash-unified'
import type { CheckboxProps } from './checkbox'

export const getValueOrLabel = (props: CheckboxProps) => {
  // In version 2.x, if there's no props.value, props.label will act as props.value
  // In version 3.x, remove this computed value, use props.value instead.
  if (!isNil(props.value)) {
    return props.value
  }
  return props.label
}
