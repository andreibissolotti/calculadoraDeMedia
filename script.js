function visible(element){
    element.classList.remove('invisible')
  }
  function invisible(element){
    element.classList.add('invisible')
  }
  
  const caixaDeNotas = document.querySelector('#caixaDeNotas')
  var not_1 = document.querySelector('#nota-1')
  var not_2 = document.querySelector('#nota-2')
  var not_3 = document.querySelector('#nota-3')
  var not_4 = document.querySelector('#nota-4')
  const button = document.querySelector('#calcular')
  const aprovado = document.querySelector('#aprovado')
  const apgif = document.querySelector('#aprovado-gif')
  const reprovado = document.querySelector('#reprovado')
  const rpgif = document.querySelector('#reprovado-gif')
  
  var numero = 0
  function change(numSelect){
    var numero = numSelect.value
    switch (numero){
      case "2":
        visible(caixaDeNotas)
        visible(button)
        visible(not_1)
        visible(not_2)
        invisible(not_3)
        invisible(not_4)
        break
      case "3":
        visible(caixaDeNotas)
        visible(button)
        visible(not_1)
        visible(not_2)
        visible(not_3)
        invisible(not_4)
        break
      case "4":
        visible(caixaDeNotas)
        visible(button)
        visible(not_1)
        visible(not_2)
        visible(not_3)
        visible(not_4)
        break
      default:
        invisible(caixaDeNotas)
        invisible(button)
        invisible(not_1)
        invisible(not_2)
        invisible(not_3)
        invisible(not_4)
    }
    return numero
  }
  
  function changenot(not){
    var index = not.id
    switch (index){
      case "not_1":
        not_1 = parseFloat(not.value)
        break
      case "not_2":
        not_2 = parseFloat(not.value)
        break
      case "not_3":
        not_3 = parseFloat(not.value)
        break
      case "not_4":
        not_4 = parseFloat(not.value)
        break
    }
  }
  
  var media = 0
  function calcMedia() {
    switch (numero){
      case "2":
        media = (not_1 + not_2)/2
        break
      case "3":
        media = (not_1 + not_2 + not_3)/3
        break
      case "4":
        media = (not_1 + not_2 + not_3 +not_4)/4
        break
    }
    if (media >= 7){
      aprovado.innerHTML=`<h2>APROVADO!!</h2><p>Sua media final foi ${media.toFixed(2)}</p>`
      visible(aprovado) 
      visible(apgif)
    } else {
      reprovado.innerHTML=`<h2>REPROVADO!!</h2><p>Sua média final foi ${media.toFixed(2)}</p>`
      visible(reprovado)
      visible(rpgif)
    }
  }
  