class PoolObject<T> {
  public free = false

  constructor(public data: T, public nextFree: PoolObject<T> | null, public previousFree: PoolObject<T> | null) {
    this.data = data
    this.nextFree = null
    this.previousFree = null
  }
}

export class Pool<T> {
  private _pool: PoolObject<T>[]
  private lastFree: PoolObject<T> | null
  private nextFree: PoolObject<T> | null

  constructor(public objCreator: () => T, public objReseter: (poolObject: PoolObject<T>) => void, public initialSize: number) {
    this._pool = []
    this.lastFree = null
    this.nextFree = null
    this.objCreator = objCreator
    this.objReseter = objReseter
    for (let i = 0; i < initialSize; i++) {
      this.addNewObject(this.newPoolObject())
    }
  }

  addNewObject(obj: PoolObject<T>) {
    this._pool.push(obj)
    this.release(obj)
    return obj
  }

  release(poolObject: PoolObject<T>) {
    // flag as free
    poolObject.free = true

    // set in the queue
    poolObject.nextFree = null
    poolObject.previousFree = this.lastFree

    // if we had a last free, set the last free's next as the new poolObject
    // otherwise, this is the first free!
    if (poolObject.previousFree && this.lastFree) {
      this.lastFree.nextFree = poolObject
    } else {
      this.nextFree = poolObject
    }

    // set the new object as the last in the queue
    this.lastFree = poolObject

    // reset the object if needed
    this.objReseter(poolObject)
  }

  getFree() {
    // if we have a free one, get it - otherwise create it
    const freeObject = this.nextFree ? this.nextFree : this.addNewObject(this.newPoolObject())

    // flag as used
    freeObject.free = false

    // the next free is the object's next free
    this.nextFree = freeObject.nextFree

    // if there's nothing afterwards, the lastFree is null as well
    if (!this.nextFree) this.lastFree = null

    // return the now not free object
    return freeObject
  }

  newPoolObject() {
    const data = this.objCreator()
    return new PoolObject(data, this.lastFree, this.nextFree)
  }

  releaseAll() {
    this._pool.forEach(item => this.release(item))
  }
}