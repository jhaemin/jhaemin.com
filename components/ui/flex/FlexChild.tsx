import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FlexChildProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  flex: number
}

const FlexChild: React.FC<FlexChildProps> = ({
  children,
  flex,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      style={{
        flex,
      }}
    >
      {children}
    </div>
  )
}

export default FlexChild
