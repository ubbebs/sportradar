import { PlayerType } from '@/types/Match'
import nameFormat from '@/utils/nameFormat'

export default function formatedStyle(type: string, players: PlayerType[]) {
  if (type !== 'substitution') return null
  return [nameFormat(players[0].name), nameFormat(players[1].name)]
}
