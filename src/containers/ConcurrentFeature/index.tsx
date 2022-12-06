import { FC } from 'react'
import Transition from './Transition'
import DeferredValue from './DeferredValue'
import NoConcurrent from './NoConcurrent'

const ConcurrentFeature: FC = () => (
  <>
    <NoConcurrent />
    {/* <Transition /> */}
    {/* <DeferredValue /> */}
  </>
)

export default ConcurrentFeature
