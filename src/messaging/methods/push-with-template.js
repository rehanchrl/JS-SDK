import Utils from '../../utils'
import Urls from '../../urls'
import Request from '../../request'

export function pushWithTemplate(templateName, templateValues) {
  const responder = Utils.extractResponder(arguments)
  const isAsync = !!responder

  if (!templateName || !Utils.isString(templateName)) {
    throw new Error('Push Template Name must be non empty string!')
  }

  const data = {}

  if (templateValues) {
    if (!Utils.isObject(templateValues)) {
      throw new Error('Push Template Value must be an object!')
    }

    data.templateValues = {}

    Object.keys(templateValues).forEach(key => {
      if (typeof templateValues[key] === 'number') {
        data.templateValues[key] = templateValues[key].toString()
      } else {
        data.templateValues[key] = templateValues[key]
      }
    })
  }

  return Request.post({
    url         : Urls.messagingPushWithTemplate(templateName),
    isAsync     : isAsync,
    asyncHandler: responder,
    data,
  })
}
