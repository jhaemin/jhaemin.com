import PageInfo from '@/components/PageInfo'
import { photos } from '@/constants/photos'
import { Page } from '@/types/general'
import $ from './photography.module.scss'

const Photography: Page = () => {
  return (
    <div className={$.photography}>
      <PageInfo title="Photography | Jang Haemin" />

      <div className={$.photosContainer}>
        {photos.map(({ file, title, caption }, i) => (
          <figure key={i} className={$.photo}>
            <img src={`/images/photography/${file}`} alt={title} />
            <figcaption>
              <h2 className={$.photoTitle}>{title}</h2>
              <p className={$.info}>{caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default Photography
