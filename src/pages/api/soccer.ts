import axios from 'axios'
import { NextApiHandler } from 'next'

const url =
  'https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=hs5vrrna6wkrh9dfpycxkzrr'

const handler: NextApiHandler = async (_, res) => {
  const response = await axios.get(url)
  res.send(response.data)
}

export default handler
