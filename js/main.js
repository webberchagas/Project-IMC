import { Modal } from './modal.js '
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#inWeight')
const inputHeight = document.querySelector('#inHeight')

form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
  e.preventDefault()

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)
  
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return
  }

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()