type GoalInformationType = {
  home: number
  away: number
}

export default function GoalInformation({ home, away }: GoalInformationType) {
  return (
    <p className="px-2 rounded-2 border fw-semibold m-0">
      {home} : {away}
    </p>
  )
}
