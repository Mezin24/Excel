const delay = (ms: number) => {
  return new Promise((res: any)=> setTimeout(() => { res() }, ms))
}

export const start = async() => {
  console.log('first')
  await delay(2000)
  console.log('second')
}
start()