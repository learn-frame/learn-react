import React, { FC, useRef, useEffect } from 'react'
import bg from './img.png'
import correntIcon from './correct.png'

const MyCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function drawImg(img: HTMLImageElement) {
    if (canvasRef && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      canvasRef.current.style.width = window.innerWidth + 'px'
      canvasRef.current.style.height = window.innerHeight + 'px'

      canvasRef.current.width = window.innerWidth * window.devicePixelRatio
      canvasRef.current.height = window.innerHeight * window.devicePixelRatio

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

      if (ctx) {
        ctx.drawImage(
          icon,
          140 * window.devicePixelRatio,
          50 * window.devicePixelRatio,
          20 * window.devicePixelRatio,
          20 * window.devicePixelRatio,
        )
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
