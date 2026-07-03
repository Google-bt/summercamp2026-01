function requestInput(question, defAnswer) {
    let answer = window.prompt(question, defAnswer);
    return answer;
}

function calculateResult(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+":
            return "Result: " + (num1 + num2);
        case "-":
            return "Result: " + (num1 - num2);
        case "*":
            return "Result: " + (num1 * num2);
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return "Result: " + (num1 / num2);
        default:
            return "Error: Invalid operator";
    }
}

function calculate() {
    let num1 = requestInput("Enter calculation number 1:", "0");
    let num2 = requestInput("Enter calculation number 2:", "0");
    let operator = requestInput("Enter calculation operator: (+, -, *, /)", "+");

    let result = calculateResult(num1, num2, operator);
    window.alert(result);
}