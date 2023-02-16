import axios from 'axios'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { season } = req.query
  const url = `https://api.sportradar.us/soccer/trial/v4/en/seasons/${season}/schedules.json?api_key=hs5vrrna6wkrh9dfpycxkzrr`
  const response = await axios.get(url)
  res.send(response.data)
}

export default handler
