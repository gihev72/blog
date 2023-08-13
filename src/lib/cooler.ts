type Coolre= {
  bg: string,
  text: string
}

export default function (hue: number):Coolre {
    const bg = `hsla(${hue},50%,93%,1)`
    const text = `hsla(${hue},100%,15%,1)`

    return {
      bg,
      text
    }
  }