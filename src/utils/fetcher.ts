import axios from 'axios'

const fetcher = async <T = unknown>(query: string) => {
  const res = await axios.get<T>(query)
  return res.data
}

export default fetcher
