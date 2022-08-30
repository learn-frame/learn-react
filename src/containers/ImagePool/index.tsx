import { FC, useEffect } from 'react'
import { Pool } from './objectPool'

const imgs = [
  'https://edge.yancey.app/beg/4x05sia7-1655123413979.jpg',
  'https://edge.yancey.app/beg/abft7ifo-1645915912191.jpeg',
  'https://edge.yancey.app/beg/5qhrq3la-1649092019222.jpg',
  'https://edge.yancey.app/beg/415cdymj-1657630311831.jpg',
  'https://edge.yancey.app/beg/z54aaetb-1649621075778.jpg',
  'https://edge.yancey.app/beg/ktnmt223-1648001691309.jpg',
  'https://edge.yancey.app/beg/clem-onojeghuo-zlABb6Gke24-unsplash.jpg',
  'https://edge.yancey.app/beg/3yohddzv-1640961700844.jpg',
  'https://edge.yancey.app/beg/843dcjls-1639926622842.jpg',
  'https://edge.yancey.app/beg/2nskw46m-1639470285426.jpg',
  'https://edge.yancey.app/beg/80rt9nwq-1638334396595.jpg',
  'https://edge.yancey.app/beg/steve-johnson-VCLNNMRl07k-unsplash.jpg',
  'https://edge.yancey.app/beg/j4hbuqz9-1634039580470.jpg',
  'https://edge.yancey.app/beg/w1j500k8-1635086946599.png',
  'https://edge.yancey.app/beg/xwpt4sf7-1635086806968.jpg',
  'https://edge.yancey.app/beg/m7pjgl3o-1632587417014.png',
  'https://edge.yancey.app/beg/um10rfda-1632066847725.jpg',
  'https://edge.yancey.app/beg/oj1mz0p6-1631605576449.jpg',
  'https://edge.yancey.app/beg/GettyImages-1328080445-e1625978447872.jpeg',
  'https://edge.yancey.app/beg/emilie-farris-pD1SsYcQy8g-unsplash%20(1).jpg',
  'https://edge.yancey.app/beg/johannes-plenio-IoY8fvDGCNs-unsplash.jpg',
  'https://edge.yancey.app/beg/phil-botha-a0TJ3hy-UD8-unsplash.jpg',
  'https://edge.yancey.app/beg/220-2208441_download-wallpaper-surface-gray-dark-light-shadow.jpg',
  'https://edge.yancey.app/beg/alessio-patron-7uEaIrv2-Wk-unsplash.jpg',
  'https://edge.yancey.app/beg/ken-russo-IrWOJ1F5Tv4-unsplash.jpg',
  'https://edge.yancey.app/beg/tengyart-0xEF0vdq73g-unsplash.jpg',
  'https://edge.yancey.app/beg/lightshadowbg.jpg',
  'https://edge.yancey.app/beg/kobebryant.jpg',
  'https://edge.yancey.app/beg/annie-spratt-Ef1H5YTTmZ8-unsplash.jpg',
  'https://edge.yancey.app/beg/18084f37-67e0-400f-bfd8-55eea0e89508.jpg',
  'https://edge.yancey.app/beg/awar-meman-l-Qc9gcTTUI-unsplash.jpg',
  'https://edge.yancey.app/beg/150be0_a045e63424e74c0cb0e578f5e7d8d1e1_mv2_d_2048_1365_s_2.jpg',
]

const ImagePool: FC = () => {

  const objectPoolFactory = <T, S>(createObjFn: (...args: S[]) => T) => {
    const objectPool: Array<T> = []
    return {
      create(...args: S[]) {
        const obj = objectPool.length === 0 ? createObjFn.apply(this, args) : objectPool.shift()
        return obj
      },
      recover(obj: T) {
        objectPool.push(obj)
      },
    }
  }

  const iframeFactory = objectPoolFactory((src: string) => {
    const image = new Image()
    image.src = src

    image.onload = () => {
      image.onload = null
      iframeFactory.recover(image)
    }

    image.onerror = () => {
      // TODO:
    }

    return image
  })

  useEffect(() => {
    imgs.forEach(src => {
      const res = iframeFactory.create(src)
      // console.log(res)
    })
  }, [iframeFactory])


  return <div>hello</div>
}

export default ImagePool