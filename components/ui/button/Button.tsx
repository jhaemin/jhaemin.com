import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={clsx('web-ui-input-common', 'web-ui-button', props.className)}
    >
      {props.children}
    </button>
  )
}

export default Button
