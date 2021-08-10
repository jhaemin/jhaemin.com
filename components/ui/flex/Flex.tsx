import clsx from 'clsx'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FlexProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  direction?: 'row' | 'column'
  gap?:
    | number
    | string
    | {
        row?: number | string
        column?: number | string
      }
  evenlyFill?: boolean
}

const numToPx = (value?: number) => (value ? `${value}px` : null)

const Flex: React.FC<FlexProps> = (props) => {
  const {
    children,
    alignItems,
    justifyContent,
    direction,
    gap,
    evenlyFill,
    ...restProps
  } = props

  return (
    <div className="web-ui-flex-wrapper">
      <div
        {...restProps}
        className={clsx(
          'web-ui-flex',
          {
            [`web-ui-flex-align-items-${alignItems}`]: !!alignItems,
            [`web-ui-flex-justify-content-${justifyContent}`]: !!justifyContent,
            [`web-ui-flex-direction-${direction}`]: !!direction,
            [`web-ui-flex-evenly-fill`]: evenlyFill,
          },
          restProps.className
        )}
        style={{
          ['--web-ui-flex-gap-column' as any]: numToPx(
            (gap as any)?.column ?? gap
          ),
          ['--web-ui-flex-gap-row' as any]: numToPx((gap as any)?.row ?? gap),
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Flex
