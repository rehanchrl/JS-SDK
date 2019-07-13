const LocalVars = {
  debugMode     : false,
  serverURL     : 'http://api.backend.triplogic.io',
  XMLHttpRequest: typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined,
  applicationId : null,
  secretKey     : null,
  appPath       : null,
  ServerCode    : null
}

export default LocalVars
