import axios from 'axios'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (_, res) => {
  const url =
    'https://api.sportradar.us/soccer/trial/v4/en/competitions/sr:competition:202/seasons.json?api_key=hs5vrrna6wkrh9dfpycxkzrr'
  const response = await axios.get(url)
  res.send(response.data)
}
export default handler
