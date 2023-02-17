export type SeasonData = {
  id: string
  name: string
  start_date: string
  end_date: string
  year: string
  competition_id: string
}

export type Seasons = {
  generated_at: string
  seasons: SeasonData[]
}
