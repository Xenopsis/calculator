const buttons = document.querySelectorAll('#input button')
const display = document.querySelector(".display")

let firstNumber = ""
let secondNumber = ""
let firstOperator = ""
let result = ""
display.innerHTML = '0'

function operate (){

    if(firstNumber !== "" && firstOperator !== "" && secondNumber !== ""){

        const num1 = parseFloat(firstNumber)
        const num2 = parseFloat(secondNumber)

        switch (firstOperator){

            case "+":

                result = num1 + num2 
                firstNumber = result
                secondNumber = ""
                firstOperator = ""
                break

            case "-":

                result = num1 - num2 
                firstNumber = result
                secondNumber = ""
                firstOperator = ""

                break

            case "*":

                result = num1 * num2 
                firstNumber = result
                secondNumber = ""
                firstOperator = ""

                break

            case "/":
                
                result = num1 / num2 
                firstNumber = result
                secondNumber = ""
                firstOperator = ""

                break
        }
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.value

        if(!isNaN(value)){
            value = button.value

            if (firstNumber === "" || firstOperator === ""){
                firstNumber += value

                display.innerHTML = ""
                const firstValue = document.createElement("div")
                firstValue.classList.add("number")
                firstValue.textContent = firstNumber
                display.appendChild(firstValue)

            } else if (firstNumber !== ""){
                secondNumber += value

                display.innerHTML = ""
                const secondValue = document.createElement("div")
                secondValue.classList.add("number")
                secondValue.textContent = secondNumber
                display.appendChild(secondValue)

            } else if (result !== ""){
                secondNumber += value
            }

        } else if (

            button.value === '+' || 
            button.value === '-' || 
            button.value === '*' || 
            button.value === '/'
        ) { 

            let valueSign = button.value

            if (firstOperator !== "" && secondNumber === ""){
                
                display.innerHTML = ""
                const operatorValue = document.createElement("div")
                operatorValue.classList.add("number")
                operatorValue.textContent = button.textContent
                display.appendChild(operatorValue)
                firstOperator = valueSign
            }
            else if (firstOperator === ""){
                firstOperator = valueSign

                display.innerHTML = ""
                const operatorValue = document.createElement("div")
                operatorValue.classList.add("number")
                operatorValue.textContent = button.textContent
                display.appendChild(operatorValue)

            } else if (firstNumber !== "" && firstOperator !== ""){

                operate()

                display.innerHTML = ""
                const operatorValue = document.createElement("div")
                operatorValue.classList.add("number")
                operatorValue.textContent = button.textContent
                display.appendChild(operatorValue)
                firstOperator = valueSign

            } else if (firstNumber !== "" && secondNumber === ""){
                display.innerHTML = ""
                const operatorValue = document.createElement("div")
                operatorValue.classList.add("number")
                operatorValue.textContent = button.textContent
                display.appendChild(operatorValue)
                firstOperator = valueSign
            }

        } else if (button.value === '='){
            if (firstOperator === "/" && secondNumber === "0"){
                display.innerHTML = "Don't do that"

            } else {
                operate()
                display.innerHTML = Math.round(result * 1000) / 1000
            }
            
        } else if (button.value === 'clear'){

            display.innerHTML = "0"
            firstNumber = ""
            secondNumber = ""
            firstOperator = ""
            result = ""

        } else if (button.value === 'delete') {

            display.innerHTML = "0"

            if (firstNumber !== '' && firstOperator === ''){
                firstNumber = ""

            } else if (firstOperator !== '' && secondNumber === ''){
                firstOperator = ""
                display.innerHTML = firstNumber

            } else if (secondNumber !== '') {
                secondNumber = ""
                display.innerHTML = firstOperator
            }

        } else if (button.value === '.'){

            if (firstOperator === ""){

                if (!firstNumber.includes('.')){

                    firstNumber += button.value
                    display.innerHTML += '.'
                }
            } else {

                if (!secondNumber.includes('.')){

                    secondNumber += button.value
                    display.innerHTML += '.'
                }
            }
        }
    })
})