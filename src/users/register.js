import Utils from '../utils'
import Async from '../request/async'

import User from './user'

export function register(user /** async */) {
  const responder = Utils.extractResponder(arguments)

  const isAsync = !!responder

  const result = this.backendless.request.post({
    url         : this.backendless.urls.userRegister(),
    isAsync     : isAsync,
    asyncHandler: responder && wrapAsync(responder),
    data        : user
  })

  return isAsync ? result : parseResponse(result)
}

function parseResponse(data) {
  return Utils.deepExtend(new User(), data)
}

function wrapAsync(asyncHandler){
  const onSuccess = data => asyncHandler.success(parseResponse(data))
  const onError = error => asyncHandler.fault(error)

  return new Async(onSuccess, onError)
}
