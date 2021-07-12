import PageInfo from '@/components/PageInfo'
import street from '@/images/photography/34th-st.jpeg'
import flowerpot from '@/images/photography/flowerpot-may-16-2018.jpeg'
import grandCanal from '@/images/photography/grand-canal-july-04-2015.jpeg'
import gyration from '@/images/photography/gyration-july-02-2015.jpeg'
import janesCarousel from '@/images/photography/janes-carousel.jpeg'
import jungfrau from '@/images/photography/jungfrau-july-09-2015.jpeg'
import newYorkCity from '@/images/photography/new-york-city.jpeg'
import neuschwanstein from '@/images/photography/schloss-neuschwanstein-july-03-2015.jpeg'
import stairs from '@/images/photography/stairs-october-15-2019.jpeg'
import brooklynBridge from '@/images/photography/under-the-brooklyn-bridge.jpeg'
import { Page } from '@/types'
import Image from 'next/image'
import $ from './photography.module.scss'

const photos: {
  file: string
  img: StaticImageData
  title: string
  caption: string
}[] = [
  {
    file: 'new-york-city.jpeg',
    img: newYorkCity,
    title: 'New York City',
    caption: 'February 3, 2020 | iPhone 8',
  },
  {
    file: '34th-st.jpeg',
    img: street,
    title: '34th St',
    caption: 'January 31th, 2020 | iPhone 8',
  },
  {
    file: 'janes-carousel.jpeg',
    img: janesCarousel,
    title: 'Jane’s Carousel',
    caption: 'February 2nd, 2020 | iPhone 8',
  },
  {
    file: 'under-the-brooklyn-bridge.jpeg',
    img: brooklynBridge,
    title: 'Under the Brooklyn Bridge',
    caption: 'February 3rd, 2020 | iPhone 8',
  },
  {
    file: 'gyration-july-02-2015.jpeg',
    img: gyration,
    title: 'Gyration',
    caption: 'July 2nd, 2015 | iPhone 5s',
  },
  {
    file: 'schloss-neuschwanstein-july-03-2015.jpeg',
    img: neuschwanstein,
    title: 'Schloss Neuschwanstein',
    caption: 'July 3rd, 2015 | iPhone 5s',
  },
  {
    file: 'grand-canal-july-04-2015.jpeg',
    img: grandCanal,
    title: 'Grand Canal',
    caption: 'July 4th, 2015 | iPhone 5s',
  },
  {
    file: 'jungfrau-july-09-2015.jpeg',
    img: jungfrau,
    title: 'Jungfrau',
    caption: 'July 9th, 2015 | iPhone 5s',
  },
  {
    file: 'flowerpot-may-16-2018.jpeg',
    img: flowerpot,
    title: 'Flowerpot',
    caption: 'May 16th, 2018 | iPhone 5s',
  },
  {
    file: 'stairs-october-15-2019.jpeg',
    img: stairs,
    title: 'Stairs',
    caption: 'October 15th, 2019 | iPhone 8',
  },
]

const Photography: Page = () => {
  return (
    <div className={$.photography}>
      <PageInfo title="Photography | Jang Haemin" />

      <div className={$.photosContainer}>
        {photos.map(({ file: src, img, title, caption }, i) => (
          <figure key={i} className={$.photo}>
            <Image src={img} alt={title} />
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
