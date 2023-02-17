import axios from 'axios'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { match } = req.query
  const url = `https://api.sportradar.us/soccer/trial/v4/en/sport_events/${match}/timeline.json?api_key=hs5vrrna6wkrh9dfpycxkzrr`
  const response = await axios.get(url)
  res.send(response.data)
}

export default handler
