import PageInfo from '@/components/PageInfo'
import { photos } from '@/constants/photos'
import { Page } from '@/types/general'
import Image from 'next/image'
import $ from './photography.module.scss'

const Photography: Page = () => {
  return (
    <div className="photography">
      <PageInfo title="Photography | Jang Haemin" />

      <div className={$['photos-container']}>
        {photos.map(({ file, title, caption, data }, i) => (
          <figure key={i} className={$['photo']}>
            <Image className={$['image']} src={data} alt={title} />
            <figcaption className={$['caption']}>
              <h2 className={$['photo-title']}>{title}</h2>
              <p className={$['info']}>{caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default Photography
