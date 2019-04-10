import Utils from '../utils'

import { parseResponse } from './utils'

function roleHelper(identity, rolename, asyncHandler, operation) {
  if (!identity) {
    throw new Error('User identity can not be empty')
  }

  if (!rolename) {
    throw new Error('Rolename can not be empty')
  }

  const responder = Utils.extractResponder(arguments)

  return this.backendless.request.post({
    url         : this.backendless.urls.userRoleOperation(operation),
    isAsync     : !!responder,
    asyncHandler: responder,
    data        : { user: identity, roleName: rolename }
  })
}

export function getUserRoles(/** async */) {
  const responder = Utils.extractResponder(arguments)
  const isAsync = !!responder

  const result = this.backendless.request.get({
    url         : this.backendless.urls.userRoles(),
    isAsync     : isAsync,
    asyncHandler: responder
  })

  return isAsync ? result : parseResponse.call(this, result)
}

export function assignRole(identity, rolename, asyncHandler) {
  return roleHelper.call(this, identity, rolename, asyncHandler, 'assignRole')
}

export function unassignRole(identity, rolename, asyncHandler) {
  return roleHelper.call(this, identity, rolename, asyncHandler, 'unassignRole')
}
