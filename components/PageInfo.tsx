import Head from 'next/head'

export type PageInfoProps = {
  title: string
  description?: string
  ogImage?: string
}

const PageInfo: React.FC<PageInfoProps> = ({
  title,
  description = '',
  ogImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="og-title" />
      <meta name="description" content={description} key="description" />
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />
      {ogImage && <meta property="og:image" content={ogImage} key="og-image" />}
    </Head>
  )
}

export default PageInfo
