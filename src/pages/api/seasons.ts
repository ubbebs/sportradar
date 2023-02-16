import axios from 'axios'
import { NextApiHandler } from 'next'

const url =
  'https://api.sportradar.us/soccer/trial/v4/en/competitions/sr:competition:202/seasons.json?api_key=hs5vrrna6wkrh9dfpycxkzrr'

const handler: NextApiHandler = async (req, res) => {
  const response = await axios.get(url)
  res.send(response.data)
}
export default handler
