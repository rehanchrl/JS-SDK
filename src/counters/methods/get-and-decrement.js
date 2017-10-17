import Utils from '../../utils'
import Urls from '../../urls'
import Request from '../../request/index'

export function getAndDecrement(counterName, asyncHandler) {
  if (!counterName || !Utils.isString(counterName)) {
    throw new Error('Counter Name must be non empty String')
  }

  if (asyncHandler) {
    asyncHandler = Utils.wrapAsync(asyncHandler)
  }

  return Request.put({
    url         : Urls.counterGetAndDecrement(counterName),
    isAsync     : !!asyncHandler,
    asyncHandler: asyncHandler
  })
}


