import { FC, useState, useEffect } from 'react'
interface CustomEvent extends Event {
  data: string
}

interface Data {
  payload: {
    likeCount: number
  }
}

const SSE: FC = () => {
  const [like, setLike] = useState(0)

  const initialSSE = () => {
    const evtSource = new EventSource('http://localhost:3002/sse', {
      withCredentials: true
    })

    evtSource.addEventListener('open', () => {
      console.log('已开启')
    })

    evtSource.addEventListener('addLikeCount', ((e: CustomEvent) => {
      const {
        payload: { likeCount }
      }: Data = JSON.parse(e.data)

      setLike(likeCount)

      if (likeCount > 10) {
        evtSource.close()
      }
    }) as EventListener)

    evtSource.addEventListener('message', (e: MessageEvent) => {
      console.log(e)
    })

    evtSource.addEventListener('error', (err: Event) => {
      console.log(err)
    })
  }

  useEffect(() => {
    initialSSE()
  }, [])

  return <div>{like}</div>
}

export default SSE

// 后端部分

// sse.module.ts
// import { Module } from "@nestjs/common";
// import { SSEController } from "./sse.controller";
// import { SSEService } from "./sse.service";

// @Module({
//   controllers: [SSEController],
//   providers: [SSEService],
// })
// export class SSEModule {}

// sse.controller.ts
// import { Controller, MessageEvent, Sse } from "@nestjs/common";
// import { Observable } from "rxjs";
// import { SSEService } from "./sse.service";

// @Controller()
// export class SSEController {
//   constructor(private readonly sseService: SSEService) {
//     this.sseService = sseService;
//   }

//   @Sse("sse")
//   public sse(): Observable<MessageEvent> {
//     return this.sseService.sse();
//   }
// }

// sse.service.ts
// import { Injectable } from "@nestjs/common";
// import { interval } from "rxjs";
// import { map } from "rxjs/operators";
// import { randomSeries } from "yancey-js-util";

// @Injectable()
// export class SSEService {
//   public sse() {
//     let count = 1;
//     return interval(2000).pipe(
//       map((_) => ({
//         id: randomSeries(6),
//         type: "addLikeCount",
//         data: { payload: { tweetId: randomSeries(6), likeCount: count++ } },
//         retry: 10000,
//       }))
//     );
//   }
// }
