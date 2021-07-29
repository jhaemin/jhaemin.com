import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={clsx('web-ui-input-common', 'web-ui-input', props.className)}
    />
  )
}

export default Input
