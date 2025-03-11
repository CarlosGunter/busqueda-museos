export const getFilteredMuseums = async (params: URLSearchParams) => {
  const res = await fetch(`/api/get-list-museums?${params}`)
  const data = await res.json()
  return data
}