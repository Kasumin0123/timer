function zeroPadding(NUM, LEN) {
  return (Array(LEN).join('0') + NUM).slice(-LEN)
}

export function toDigit(val) {
  const ms = val % 1000
  const sec_tmp = (val - ms) / 1000
  const sec = sec_tmp % 60
  const min = (sec_tmp - sec) / 60

  const ms_dg = zeroPadding(ms, 3)
  const sec_dg = zeroPadding(sec, 2)
  const min_dg = zeroPadding(min, 2)

  return `${min_dg}:${sec_dg}:${ms_dg}`
}
