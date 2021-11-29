import PageInfo from '@/components/PageInfo'
import { photos } from '@/constants/photos'
import { Page } from '@/types/general'
import $ from './photography.module.scss'

const Photography: Page = () => {
  return (
    <div className="photography">
      <PageInfo title="Photography | Jang Haemin" />

      <div className={$['photos-container']}>
        {photos.map(({ file, title, caption }, i) => (
          <figure key={i} className={$['photo']}>
            <img
              className={$['image']}
              src={`/images/photography/${file}`}
              alt={title}
            />
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
