import { CompetitorType, SeasonScheduleMatchType } from './SeasonSchedule'

export type PlayerType = {
  id: string
  name: string
  starter: boolean
  statistics: {
    assists: number
    goal_scored: number
    own_goals: number
    red_cards: number
    shots_blocked: number
    shots_on_target: number
    substituted_id: number
    sibstituted_out: number
    yellow_cards: number
    yellow_red_cards: number
  }
  type: string
}

export type TimelineType = {
  away_score: number
  competitor: string
  home_score: number
  id: number
  injury_time_announced: number
  match_clock: string
  match_time: number
  period: number
  period_type: string
  players: PlayerType[]
  stoppage_time: number
  stoppage_time_clock: string
  time: string
  type: string
  x: number
  y: number
}

export type MatchCompetitorType = CompetitorType & {
  players: PlayerType[]
  statistics: {
    ball_possesion: number
    cards_given: number
    corner_kicks: number
    fouls: number
    free_kicks: number
    goal_kicks: number
    injuries: number
    red_cards: number
    shots_blocked: number
    shots_off_target: number
    shots_on_target: number
    shots_saved: number
    shots_total: number
    substitutions: number
    throws_ins: number
    yellow_cards: number
    yellow_red_cards: number
  }
}

export type MatchType = SeasonScheduleMatchType & {
  statistics: {
    totals: {
      competitors: MatchCompetitorType[]
    }
  }
  timeline: TimelineType[]
}
