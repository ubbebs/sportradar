import { v4 as uuidv4 } from 'uuid'
import ball from '../../../../assets/ball.png'

type ScorersType = {
  data: {
    time: number
    scorer: string[]
  }[]
  type: string
}

export default function Scorers({ data, type }: ScorersType) {
  return (
    <div className="d-flex flex-column gap-2 p-2">
      {data &&
        data.map((elem) => {
          return (
            <div
              className={`d-flex align-items-center gap-2 ${
                type === 'away' && 'flex-row-reverse'
              }`}
              key={uuidv4()}
              data-testid="dependency_class"
            >
              <img src={ball.src} alt="Ball icon" height="16px" width="16px" />
              <p className="fw-semibold m-0">
                {elem.time}&apos; {elem.scorer}
              </p>
            </div>
          )
        })}
    </div>
  )
}
