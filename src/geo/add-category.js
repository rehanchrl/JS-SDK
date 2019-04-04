export function addCategory(name, asyncHandler) {
  if (!name) {
    throw new Error('Category name is required.')
  }

  const result = this.backendless.request.put({
    url         : this.backendless.urls.geoCategory(name),
    isAsync     : !!asyncHandler,
    asyncHandler: asyncHandler
  })

  return (typeof result.result === 'undefined') ? result : result.result
}