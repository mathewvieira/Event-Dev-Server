export default function getApiPath(minVersion = 1, maxVersion = 1) {
  return new RegExp(`/api/v[${minVersion}-${maxVersion}]`)
}
