type TitleFormatType = {
  title: string
  style?: boolean
}

export default function TitleFormat({ title, style }: TitleFormatType) {
  return (
    <p
      className={`text-center m-0 text-capitalize fw-semibold ${
        style && 'bg-primary p-2 rounded-3 text-white'
      }`}
    >
      {title}
    </p>
  )
}

TitleFormat.defaultProps = {
  style: false,
}
