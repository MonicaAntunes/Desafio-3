const firstAnswer = prompt('Você deseja aprender backend ou frontend')

/*.toLocaleLowerCase.includes("") para ele poder identificar qualquer resposta que possua a palavra que estiver dentro das aspas*/

if (firstAnswer.toLocaleLowerCase().includes('frontend')) {
  const firstAnswerBackend = prompt('Você prefere aprender react ou vue?')
}

if (firstAnswer.toLocaleLowerCase().includes('backend')) {
  const firstAnswerFrontend = prompt('Você prefere aprender C# ou Java?')
}
const secondAnswer = prompt(
  'Você deseja continuar se especializando na área escolhida ou seguir se desenvolvendo para se tornar fullstack?'
)

if (secondAnswer.toLocaleLowerCase().includes('fullstack')) {
  let confirmOK = true
  while (confirmOK == true) {
    const secondAnswerFullstack = prompt(
      'Quais são as tecnologias que você gostaria de se especializar para fullstack?'
    )
    alert(`Legal que você quer aprender ${secondAnswerFullstack}`)
    confirmOK = confirm(
      'Tem mais alguma tecnologia que você gostaria de aprender?'
    )
  }
}

if (secondAnswer.toLocaleLowerCase().includes('especializando')) {
  let confirmOK = true
  while (confirmOK == true) {
    const secondAnswerEspecializando = prompt(
      'Quais são as tecnologias que você gostaria de se especializar?'
    )
    alert(`Legal que você quer aprender ${secondAnswerEspecializando}`)
    confirmOK = confirm(
      'Tem mais alguma tecnologia que você gostaria de aprender?'
    )
  }
}
