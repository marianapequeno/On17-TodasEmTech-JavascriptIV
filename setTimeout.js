// console.log('Esse console vai retornar primeiro')
// setTimeout(() => console.log('Esse console vai retornar segundo'), 3.5 * 1000)
// console.log('Esse console vai retornar terceiro')

setTimeout(() => {
  console.log('retorno primeira callback')
}, 5000)

setTimeout(() => {
console.log('retorno segunda callback')
})

console.log('console direto 1')

setTimeout(() => {
console.log('retorno terceira callback')
}, 3000)

console.log('console direto 2')
