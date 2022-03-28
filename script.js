let mathOperation = prompt('Hi! What math operation do you want to do? ');
let firstNumber = prompt ('Enter the first number');
if (isNaN(firstNumber)){
    alert('Check your data');
}
let secondNumber = prompt ('Enter the second number');
if (isNaN(secondNumber)){
    alert('Check your data');
}
if (mathOperation =='/') {
    let mathResult = Number(firstNumber) / Number(secondNumber);
    let result = alert( 'Your result '+firstNumber +'/' +secondNumber +'=' +mathResult);
} else if (mathOperation =='+') {
    let mathResult = Number(firstNumber) + Number(secondNumber);
    let result = alert( 'Your result '+firstNumber +'+' +secondNumber +'=' +mathResult);
} else if (mathOperation =='-') {
    let mathResult = Number(firstNumber) - Number(secondNumber);
    let result = alert( 'Your result '+firstNumber +'-' +secondNumber +'=' +mathResult);
} else if  (mathOperation =='*'){
    let mathResult = Number(firstNumber) * Number(secondNumber);
    let result = alert( 'Your result '+firstNumber +'*' +secondNumber +'=' +mathResult);
}else {
    alert('Check your data');
}
//switch (mathOperation) {
    //case '/': 
    //let mathResult = Number(firstNumber) / Number(secondNumber);
    //let result = alert( 'Your result '+firstNumber +'/' +secondNumber +'=' +mathResult);
    //break;
    //case '+': 
    //let mathResult = Number(firstNumber) + Number(secondNumber);
    //let result = alert( 'Your result '+firstNumber +'+' +secondNumber +'=' +mathResult);
    //break;
    //case '-': 
    //let mathResult = Number(firstNumber) - Number(secondNumber);
    //let result = alert( 'Your result '+firstNumber +'-' +secondNumber +'=' +mathResult);
    //break;
    //case '*': 
    //let mathResult = Number(firstNumber) * Number(secondNumber);
    //let result = alert( 'Your result '+firstNumber +'*' +secondNumber +'=' +mathResult);
    //break;
    //default:
    //alert('Check the data');
    //break;
//}

