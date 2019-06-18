import Utils from '../../utils'
import Urls from '../../urls'
import Request from '../../request'
import EmailEnvelope from '../helpers/email-envelope'

export default function sendEmailTemplate(templateName, templateValues, envelopeObject/**, async */) {
  const responder = Utils.extractResponder(arguments)
  const isAsync = !!responder

  if (typeof templateName !== 'string') {
    throw new Error('Template name must be a string')
  }

  if (templateValues instanceof EmailEnvelope) {
    envelopeObject = templateValues
  }

  const data = envelopeObject.toJSON()
  data['template-name'] = templateName

  if (!(templateValues instanceof EmailEnvelope)) {
    data['template-values'] = templateValues
  }

  function responseMessageStatus(res) {
    return res.status
  }

  return Request.post({
    url         : Urls.emailTemplateSend(),
    isAsync     : isAsync,
    asyncHandler: Utils.wrapAsync(responder, responseMessageStatus),
    data        : data
  })
}

