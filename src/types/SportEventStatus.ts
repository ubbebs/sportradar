export type SportEventStatus = {
  away_score: number
  home_score: number
  match_status: string
  period_scores: {
    away_score: number
    home_score: number
    number: number
    type: string
  }[]
  status: string
  winner_id: string
}
