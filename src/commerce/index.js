import Utils from '../utils'
import { deprecated } from '../decorators'

import { validatePlayPurchase } from './validate-play-purchase'
import { cancelPlaySubscription } from './cancel-play-subscription'
import { getPlaySubscriptionStatus } from './get-play-subscription-status'

class Commerce {
  constructor(backendless) {
    this.backendless = backendless
  }
}

Object.assign(Commerce.prototype, {
  @deprecated('Backendless.Commerce', 'Backendless.Commerce.validatePlayPurchase')
  validatePlayPurchaseSync: Utils.synchronized(validatePlayPurchase),
  validatePlayPurchase    : Utils.promisified(validatePlayPurchase),

  @deprecated('Backendless.Commerce', 'Backendless.Commerce.cancelPlaySubscription')
  cancelPlaySubscriptionSync: Utils.synchronized(cancelPlaySubscription),
  cancelPlaySubscription    : Utils.promisified(cancelPlaySubscription),

  @deprecated('Backendless.Commerce', 'Backendless.Commerce.getPlaySubscriptionStatus')
  getPlaySubscriptionStatusSync: Utils.synchronized(getPlaySubscriptionStatus),
  getPlaySubscriptionStatus    : Utils.promisified(getPlaySubscriptionStatus),

})

export default Commerce

