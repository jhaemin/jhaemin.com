import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'
import React from 'react'
import $ from './shop.module.scss'

const dummyItems = [
  {
    name: 'PAYW Laptop Sticker',
    price: 6900,
  },
  {
    name: 'dotslash Laptop Sticker',
    price: 7900,
  },
  {
    name: 'dotslash Laptop Sticker dotslash Laptop Sticker dotslash Laptop Sticker',
    price: 100000000000000,
  },
  {
    name: 'dotslash Laptop Sticker dotslash Laptop Sticker',
    price: 30,
  },
  {
    name: 'dotslash Laptop Sticker dotslash Laptop Sticker dotslash Laptop Sticker dotslash Laptop Sticker',
    price: 9999999,
  },
  {
    name: 'dotslash',
    price: 7900000000,
  },
]

type ItemProps = {
  name: string
  price: number
}

const Item: React.FC<ItemProps> = ({ name, price }) => {
  return (
    <div className={$.product}>
      <div className={$.imageWrapper}>
        <img className={$.image} alt="" src="https://via.placeholder.com/500" />
      </div>
      <div className={$.name}>{name}</div>
      <div className={$.price}>₩ {price.toLocaleString()}</div>
    </div>
  )
}

type ShopPageProps = {
  userId?: number
}

const ShopPage: Page<ShopPageProps> = ({ userId }) => {
  console.log(userId)

  return (
    <div className={$.products}>
      {dummyItems.map(({ name, price }) => (
        <Item key={name} {...{ name, price }} />
      ))}
    </div>
  )
}

export default ShopPage

const handler: JhmGetServerSideProps<ShopPageProps> = async ({ req }) => {
  console.log(req.userId)

  return {
    props: {
      userId: req.userId,
    },
  }
}

export const getServerSideProps = withSessionPage(handler)
