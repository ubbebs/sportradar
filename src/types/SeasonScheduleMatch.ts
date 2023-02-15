import { Competitor } from './Competitor'
import { SportEventStatus } from './SportEventStatus'

export type SeasonScheduleMatch = {
  sport_event: {
    competitors: Competitor[]
    coverage: {
      sport_event_properties: {
        basic_play_by_play: boolean
        basic_player_stats: boolean
        basic_team_stats: boolean
        extended_player_stats: boolean
        extended_team_stats: boolean
        lineups: boolean
        venue: boolean
      }
      type: string
    }
    id: string
    sport_event_context: {
      category: {
        country_code: string
        id: string
        name: string
      }
      competition: {
        gender: string
        id: string
        name: string
      }
      groups: {
        id: string
        name: string
      }[]
      round: {
        number: number
      }
      season: {
        competition_id: string
        end_date: string
        id: string
        name: string
        start_date: string
        year: string
      }
      sport: {
        id: string
        name: string
      }
    }
    stage: {
      end_date: string
      order: number
      phase: string
      start_date: string
      type: string
      year: string
    }
    start_time: string
    start_time_confirmed: boolean
    venue: {
      capacity: number
      city_name: string
      country_code: string
      country_name: string
      id: string
      map_coordinates: string
      name: string
      timezone: string
    }
  }
  sport_event_status: SportEventStatus
}
