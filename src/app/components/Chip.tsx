import cooler from "@/lib/cooler"

type Props = {
  title: string
  hue: number
  
}


export default function Chip({ title, hue}: Props) {
  const color = cooler(hue)
  
  return (
    <div className='rounded-full w-fit px-2' style={{background:color.bg, color:color.text}}>
      <p>{title}</p>
    </div>
  )
}