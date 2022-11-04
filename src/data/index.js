import featureImg from '../assets/images/feature-img.png';
import gameImg from '../assets/images/game-img.png';
import video from '../assets/videos/sunset.mp4';
import gamemap from '../assets/images/gamemap.png';
import gamemap2 from '../assets/images/gamemap2.png';
import gameItemSmallImage from '../assets/images/item-small.png';
import itemMedImage from '../assets/images/item-medium.png';

export const games = [
  {
    title: 'Yeti Bomber',
    img: gameImg,
    isReleased: true
  },
  {
    title: 'Yeti Bomber',
    img: gameImg,
    isReleased: false
  },
  {
    title: 'Yeti Bomber',
    img: gameImg,
    isReleased: false
  },
  {
    title: 'Yeti Bomber',
    img: gameImg,
    isReleased: true
  }
]

export const features = [
  {
    title: 'Featured Image Title',
    img: featureImg,
    desc: 'Nec dui nunc mattis enim ut tellus. Euismod elementum nisi quis eleifend. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque. '
  },
  {
    title: 'Featured Image Title',
    img: featureImg,
    desc: 'Lorem Ipsum Nunc vel risus commodo viverra maecenas. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Pellentesque elit eget gravida cum. Vulputate mi sit amet mauris. Magnis dis parturient montes nascetur.'
  },
  {
    title: 'Featured Image Title',
    img: featureImg,
    desc: 'Nunc vel risus commodo viverra maecenas. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Pellentesque elit eget gravida cum. Vulputate mi sit amet mauris. Magnis dis parturient montes nascetur.'
  }
]

export const thumbnails = [
  { imageSrc: gamemap, alt: 'screenshot', videoSrc: video},
  { imageSrc: gamemap2, alt: 'screenshot',  },
  { imageSrc: gamemap, alt: 'screenshot', },
  { imageSrc: gamemap2, alt: 'screenshot',  },
];


export const items = [
  { id: 0, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: gameImg},
  { id: 1, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: gameImg},
  { id: 2, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: null },
  { id: 3, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: null },
  { id: 4, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: gameImg },
  { id: 5, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: null },
  { id: 6, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: null },
  { id: 7, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: null },
]

export const collectedItems = [
  { id: 0, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: itemMedImage},
  { id: 1, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: itemMedImage},
  { id: 2, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: itemMedImage },
  { id: 3, gameName: 'Game Name', itemName: 'Item Name', ratting: 0.4, imageSrc: itemMedImage },
]

export const sortData = [
  { value: 90, title: 'Last 90 days' },
  { value: 60, title: 'Last 60 days' },
  { value: 30, title: 'Last 30 days' },
]
export const sortPrice =  [
  { value: 1, title: 'Price Low to High' },
  { value: 2, title: 'Price High to Low' },
]
export const activityTableData = [
  {
    image: gameItemSmallImage,
    name: 'Super Yeti LandQuarry',
    price: 0.049,
    quantity: 1,
    from: 'Super Yeti',
    to: 'Skovgaard',
    time: '18 days ago'
  },
  {
    image: gameItemSmallImage,
    name: 'Super Yeti LandQuarry',
    price: 0.049,
    quantity: 1,
    from: 'Super Yeti',
    to: 'Skovgaard',
    time: '18 days ago'
  },
  {
    image: gameItemSmallImage,
    name: 'Super Yeti LandQuarry',
    price: 0.049,
    quantity: 1,
    from: 'Super Yeti',
    to: 'Skovgaard',
    time: '18 days ago'
  },
  {
    image: gameItemSmallImage,
    name: 'Super Yeti LandQuarry',
    price: 0.049,
    quantity: 1,
    from: 'Super Yeti',
    to: 'Skovgaard',
    time: '18 days ago'
  },
  {
    image: gameItemSmallImage,
    name: 'Super Yeti LandQuarry',
    price: 0.049,
    quantity: 1,
    from: 'Super Yeti',
    to: 'Skovgaard',
    time: '18 days ago'
  },
  {
    image: gameItemSmallImage,
    name: 'Super Yeti LandQuarry',
    price: 0.049,
    quantity: 1,
    from: 'Super Yeti',
    to: 'Skovgaard',
    time: '18 days ago'
  }
]