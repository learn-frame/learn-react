import { FC, useState, useRef, ChangeEvent } from 'react'
import Button from '@mui/material/Button'
import { fetchFile, createFFmpeg } from '@ffmpeg/ffmpeg'

const VideoCapture: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [blobUrls, setBlobUrls] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [timer, setTimer] = useState(0)

  const ffmpeg = createFFmpeg({
    log: true
  })

  const playVideo = (file: File) => {
    const blob = URL.createObjectURL(new Blob([file], { type: 'image/jpeg' }))

    if (videoRef.current) {
      videoRef.current.src = blob
      videoRef.current.play()
    }
  }

  const filterFrameImages = (dirFiles: string[]) => {
    const frameImages = dirFiles.filter((fileName: string) =>
      /^frame-.*.jpeg$/.test(fileName)
    )
    return frameImages
  }

  const uint8ArrayToBlob = (path: string) => {
    const u8arr = ffmpeg.FS('readFile', path)
    const blob = URL.createObjectURL(
      new Blob([u8arr.buffer], { type: 'image/jpeg' })
    )
    ffmpeg.FS('unlink', path)

    return blob
  }

  const captureFrames = async (file: File) => {
    setTimer(0)
    const startTime = performance.now()
    await ffmpeg.load()
    ffmpeg.FS('writeFile', file.name, await fetchFile(file))
    await ffmpeg.run('-i', file.name, '-vf', 'fps=1', 'frame-%d.jpeg')

    const dirFiles = ffmpeg.FS('readdir', '/')
    const blobs = filterFrameImages(dirFiles).map((v) => uint8ArrayToBlob(v))

    setBlobUrls(blobs)
    setTimer(performance.now() - startTime)
    setLoading(false)
  }

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const { files } = e.target
    const [file] = files || []

    if (file) {
      playVideo(file)
      captureFrames(file)
    }
  }

  return (
    <section>
      <Button variant="contained" component="label" disabled={loading}>
        Upload
        <input hidden accept="video/*" type="file" onChange={onUpload} />
      </Button>

      <p
        style={{
          margin: `24px 0 24px`
        }}
      >
        耗时: {(timer / 1000).toFixed(2)} 秒; 生成图片数量: {blobUrls.length}
      </p>

      <video
        ref={videoRef}
        controls
        style={{
          margin: `24px 0 24px`,
          width: 300
        }}
      ></video>

      <section>
        {blobUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt={url}
            style={{
              display: 'inline-flex',
              width: '20%',
              height: '20%',
              margin: 24
            }}
          />
        ))}
      </section>
    </section>
  )
}

export default VideoCapture
