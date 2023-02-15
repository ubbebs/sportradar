export type PeriodScores = {
  away_score: number
  home_score: number
  number: number
  type: string
}

export type SportEventStatus = {
  away_score: number
  home_score: number
  match_status: string
  match_tie: boolean
  period_scores: PeriodScores[]
  status: string
  winner_id: string
}
