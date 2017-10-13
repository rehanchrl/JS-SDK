import Utils from '../utils'
import Urls from '../urls'
import Request from '../request'

import { validateStringArgument } from './validate-string-argument'

export function getPlaySubscriptionStatus(packageName, subscriptionId, token, async) {
  validateStringArgument('Package Name', packageName)
  validateStringArgument('Subscription Id', subscriptionId)
  validateStringArgument('Token', token)

  if (async) {
    async = Utils.wrapAsync(async)
  }

  return Request.get({
    url         : Urls.commerceSubStatus(packageName, subscriptionId, token),
    isAsync     : !!async,
    asyncHandler: async
  })
}
