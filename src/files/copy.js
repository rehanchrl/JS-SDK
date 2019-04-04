import FilesUtils from './utils'

export function copyFile(sourcePath, targetPath, asyncHandler) {
  const parameters = {
    sourcePath: FilesUtils.ensureSlashInPath(sourcePath),
    targetPath: FilesUtils.ensureSlashInPath(targetPath)
  }

  return this.backendless.request.put({
    url         : this.backendless.urls.fileCopy(),
    data        : parameters,
    isAsync     : !!asyncHandler,
    asyncHandler: asyncHandler
  })
}

