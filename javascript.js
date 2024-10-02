const buttons = document.querySelectorAll('#input button')
const display = document.querySelector(".display")

let firstNumber = ""
let secondNumber = ""
let firstOperator = ""
let result = ""

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

                const firstValue = document.createAttribute("div")
                firstValue.textContent = firstNumber

                console.log('first number', firstNumber)


            } else if (firstNumber !== ""){
                secondNumber += value
                console.log('second number', secondNumber)

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

            if (firstOperator === ""){
                firstOperator += valueSign
                console.log(firstOperator)

            } else if (firstNumber !== "" && firstOperator !== ""){

                operate()
                firstOperator += valueSign

                console.log(result)
            }
        } else if (button.value === '='){
            operate()
            console.log(result)

        } else if (button.value === 'clear'){
            firstNumber = ""
            secondNumber = ""
            firstOperator = ""
            result = ""
        } else if (button.value === '.'){
            if (firstOperator === ""){
                firstNumber += button.value

            } else if (firstOperator !== ""){
                secondNumber += button.value
            }
        }
       
    })
})
