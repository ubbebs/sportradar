type CardType = {
  color: string
}

export default function Card({ color }: CardType) {
  return (
    <div className="px-2 rounded-2 border d-flex align-items-center justify-content-center">
      <div
        className={`p-2 ${color === 'yellow' ? 'bg-warning' : 'bg-danger'}`}
      />
    </div>
  )
}
