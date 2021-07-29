import { ButtonHTMLAttributes, FC } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = (props) => {
  return (
    <button {...props} className="web-ui-input-common web-ui-button">
      {props.children}
    </button>
  )
}

export default Button
