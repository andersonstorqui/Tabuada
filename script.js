


function multiplicar() {
  let numeroParaMultiplicar = document.getElementById('numero-tabuada')
  let ateQualNumero = document.getElementById('ate-qual-numero')

  if (numeroParaMultiplicar.value.length == 0 || ateQualNumero.value.length == 0) {
    window.alert('ERRO')
  } else {

  }

  let num = Number(numeroParaMultiplicar.value)
  let end = Number(ateQualNumero.value)


  let r = ''

  let res = document.getElementById('resposta')
  let x = 0
  r = num * end

  res.innerHTML = `A tabuada do: ${num} é:`

  do {
    r = num * x
    res.innerHTML += `${x} * ${num} = ${r} <br>`
    x++
  } while (x <= end)



}