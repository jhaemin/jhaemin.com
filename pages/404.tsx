import { Page } from '@/types/general'

const Custom404: Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 25,
        }}
      >
        Page Not Found
      </h1>
    </div>
  )
}

export default Custom404
