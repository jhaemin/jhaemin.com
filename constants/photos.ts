import street from '@/assets/images/photography/34th-st.jpeg'
import cat from '@/assets/images/photography/cat-2022.jpeg'
import cat2 from '@/assets/images/photography/cat-march-23-2024.jpeg'
import flowerpot from '@/assets/images/photography/flowerpot-may-16-2018.jpeg'
import forest from '@/assets/images/photography/forest-june-30-2024.jpeg'
import geullim from '@/assets/images/photography/geullim-january-30-2024.jpeg'
import glassesOnTheTable from '@/assets/images/photography/glasses-on-the-table-march-02-2023.jpeg'
import grandCanal from '@/assets/images/photography/grand-canal-july-04-2015.jpeg'
import gyration from '@/assets/images/photography/gyration-july-02-2015.jpeg'
import honeymoonHouseLobby from '@/assets/images/photography/honeymoon-house-lobby-march-05-2023.jpeg'
import honeymoonHouseStairs from '@/assets/images/photography/honeymoon-house-stairs-march-05-2023.jpeg'
import hyeopjaeBeach from '@/assets/images/photography/hyeopjae-beach-2022.jpeg'
import janesCarousel from '@/assets/images/photography/janes-carousel.jpeg'
import jungfrau from '@/assets/images/photography/jungfrau-july-09-2015.jpeg'
import newYorkCity from '@/assets/images/photography/new-york-city.jpeg'
import path from '@/assets/images/photography/path-april-20-2024.jpeg'
import reedOcean from '@/assets/images/photography/reed-ocean-march-05-2023.jpeg'
import neuschwanstein from '@/assets/images/photography/schloss-neuschwanstein-july-03-2015.jpeg'
import stairs from '@/assets/images/photography/stairs-october-15-2019.jpeg'
import brooklynBridge from '@/assets/images/photography/under-the-brooklyn-bridge.jpeg'
import cafeWindow from '@/assets/images/photography/window-april-17-2024.jpeg'

import { StaticImageData } from 'next/image'

export const photos: {
  file: string
  // img: StaticImageData
  title: string
  caption: string
  data: StaticImageData
}[] = [
  {
    file: 'forest-june-30-2024.jpeg',
    title: 'Forest',
    caption: 'June 30, 2024 | iPhone 15',
    data: forest,
  },
  {
    file: 'cat-march-23-2024.jpeg',
    title: 'Cat',
    caption: 'March 23, 2024 | iPhone 15',
    data: cat2,
  },
  {
    file: 'path-april-20-2024.jpeg',
    title: 'Path',
    caption: 'April 20, 2024 | iPhone 15',
    data: path,
  },
  {
    file: 'cafe-window-april-17-2024.jpeg',
    title: 'Window',
    caption: 'April 17, 2024 | iPhone 15',
    data: cafeWindow,
  },
  {
    file: 'reed-ocean-march-05-2023.jpeg',
    title: 'Reed Ocean',
    caption: 'March 5, 2023 | iPhone 12 mini',
    data: reedOcean,
  },
  {
    file: 'honeymoon-house-stairs-march-05-2023.jpeg',
    title: 'Honeymoon House Stairs',
    caption: 'March 5, 2023 | iPhone 12 mini',
    data: honeymoonHouseStairs,
  },
  {
    file: 'honeymoon-house-lobby-march-05-2023.jpeg',
    title: 'Honeymoon House Lobby',
    caption: 'March 5, 2023 | iPhone 12 mini',
    data: honeymoonHouseLobby,
  },
  {
    file: 'glasses-on-the-table-march-02-2023.jpeg',
    title: 'Glasses on the Table',
    caption: 'March 2, 2023 | iPhone 12 mini',
    data: glassesOnTheTable,
  },
  {
    file: 'hyeopjae-beach-2022.jpeg',
    title: 'Hyeopjae Beach',
    caption: 'October 20, 2022 | iPhone 12 mini',
    data: hyeopjaeBeach,
  },
  {
    file: 'cat-2022.jpeg',
    title: 'Cat in the Forest',
    caption: 'October 29, 2022 | iPhone 12 mini',
    data: cat,
  },
  {
    file: 'new-york-city.jpeg',
    // img: newYorkCity,
    title: 'New York City',
    caption: 'February 3, 2020 | iPhone 8',
    data: newYorkCity,
  },
  {
    file: '34th-st.jpeg',
    // img: street,
    title: '34th St',
    caption: 'January 31th, 2020 | iPhone 8',
    data: street,
  },
  {
    file: 'janes-carousel.jpeg',
    // img: janesCarousel,
    title: 'Jane’s Carousel',
    caption: 'February 2nd, 2020 | iPhone 8',
    data: janesCarousel,
  },
  {
    file: 'under-the-brooklyn-bridge.jpeg',
    // img: brooklynBridge,
    title: 'Under the Brooklyn Bridge',
    caption: 'February 3rd, 2020 | iPhone 8',
    data: brooklynBridge,
  },
  {
    file: 'stairs-october-15-2019.jpeg',
    // img: stairs,
    title: 'Stairs',
    caption: 'October 15th, 2019 | iPhone 8',
    data: stairs,
  },
  {
    file: 'flowerpot-may-16-2018.jpeg',
    // img: flowerpot,
    title: 'Flowerpot',
    caption: 'May 16th, 2018 | iPhone 5s',
    data: flowerpot,
  },
  {
    file: 'gyration-july-02-2015.jpeg',
    // img: gyration,
    title: 'Gyration',
    caption: 'July 2nd, 2015 | iPhone 5s',
    data: gyration,
  },
  {
    file: 'schloss-neuschwanstein-july-03-2015.jpeg',
    // img: neuschwanstein,
    title: 'Schloss Neuschwanstein',
    caption: 'July 3rd, 2015 | iPhone 5s',
    data: neuschwanstein,
  },
  {
    file: 'grand-canal-july-04-2015.jpeg',
    // img: grandCanal,
    title: 'Grand Canal',
    caption: 'July 4th, 2015 | iPhone 5s',
    data: grandCanal,
  },
  {
    file: 'jungfrau-july-09-2015.jpeg',
    // img: jungfrau,
    title: 'Jungfrau',
    caption: 'July 9th, 2015 | iPhone 5s',
    data: jungfrau,
  },
]
