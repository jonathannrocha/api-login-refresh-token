class validatorCpf {
  treatemntCpf(cpf: string): boolean {
    console.log(cpf);
    const cpfValidator: number[] =
      cpf.replace(/[^\d]+/g, '')
        .split('')
        .map(value => parseInt(value))

    let count: number = 0
    let sum: number = 0
    let result: number = 0

    for (let index = 11; index >= 2; index--) {
      sum += index * cpfValidator[count]
      count++
    }
    result = (sum * 10) % 11
    console.log(`result: ${result} e cpfDigit: ${cpfValidator[10]}`, result == cpfValidator[10])
    const lengthCpf = cpfValidator.join('').length

    return (result === 10 || result === 11 || result === cpfValidator[10]) && lengthCpf === 11 ? (true) : false
  }
}

export { validatorCpf }