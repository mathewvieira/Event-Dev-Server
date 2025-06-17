import status from 'http-status'

export function formatResponse(responseDTO) {
  return responseDTO ? { data: responseDTO } : undefined
}

export function formatNumber(id, defaultValue = 0) {
  return Number(id) || defaultValue
}

export function formatJson(statusCode, data = undefined, meta = undefined) {
  return {
    status: statusCode,
    message: status[statusCode],
    ...data,
    meta: meta
  }
}
