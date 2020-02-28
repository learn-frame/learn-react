import React, { FC, useRef, useEffect } from 'react'
import bg from './img.png'
import correntIcon from './correct.png'

const MyCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const renderIcon = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    const icon = new Image()
    icon.src = correntIcon
    icon.onload = function() {
      ctx.drawImage(
        icon,
        x * window.devicePixelRatio,
        y * window.devicePixelRatio,
        20 * window.devicePixelRatio,
        20 * window.devicePixelRatio,
      )
    }
  }

  const renderImg = (ctx: CanvasRenderingContext2D) => {
    const img = new Image()
    img.src = bg

    img.onload = function() {
      ctx.drawImage(
        img,
        0,
        0,
        window.innerWidth * window.devicePixelRatio,
        window.innerHeight * window.devicePixelRatio,
      )

      renderIcon(ctx, 140, 50)
    }
  }

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      canvasRef.current.style.width = window.innerWidth + 'px'
      canvasRef.current.style.height = window.innerHeight + 'px'

      canvasRef.current.width = window.innerWidth * window.devicePixelRatio
      canvasRef.current.height = window.innerHeight * window.devicePixelRatio

      if (ctx) {
        renderImg(ctx)
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  )
}

export default MyCanvas
