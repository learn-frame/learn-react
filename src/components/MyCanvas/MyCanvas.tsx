import React, { FC, useRef, useEffect } from 'react'
import bg from './img.png'
import correntIcon from './correct.png'

const MyCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getPixelRatio = (context: any) => {
    const backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1
    return (window.devicePixelRatio || 1) / backingStore
  }

  function drawImg(img: HTMLImageElement) {
    if (canvasRef && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      const ratio = getPixelRatio(ctx)

      canvasRef.current.style.width = window.innerWidth + 'px'
      canvasRef.current.style.height = window.innerHeight + 'px'

      canvasRef.current.width = window.innerWidth * ratio
      canvasRef.current.height = window.innerHeight * ratio

      if (ctx) {
        ctx.drawImage(
          img,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        )
      }
    }
  }

  function drawIcon(icon: HTMLImageElement) {
    if (canvasRef && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      const ratio = getPixelRatio(ctx)

      if (ctx) {
        ctx.drawImage(icon, 140 * ratio, 50 * ratio, 20 * ratio, 20 * ratio)
      }
    }
  }

  const renderIcon = () => {
    const img = new Image()
    img.src = correntIcon
    img.onload = function() {
      drawIcon(img)
    }
  }

  const renderImg = () => {
    const img = new Image()
    img.src = bg

    img.onload = function() {
      drawImg(img)
      renderIcon()
    }
  }

  useEffect(() => {
    renderImg()
  }, [])

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  )
}

export default MyCanvas
