import ball from '../../../../assets/ball.png'

type GoalInformationType = {
  home: number
  away: number
}

export default function GoalInformation({ home, away }: GoalInformationType) {
  return (
    <div className="px-2 rounded-2 border fw-semibold m-0 d-flex gap-2 align-items-center">
      <img src={ball.src} alt="Ball icon" height="16px" width="16px" />
      <p className="m-0">
        {home} : {away}
      </p>
    </div>
  )
}
