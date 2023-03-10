const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll(".operator");
const buttonEqual = document.querySelector(".equal");
const buttonReset = document.querySelector(".reset");

buttonNumber.forEach(function(numero)
{
        numero.addEventListener('click', function()
        {
            document.getElementById('display').value += numero.value;
        });
});

buttonOperator.forEach(function(operador)
{
        operador.addEventListener('click', function()
        {
            document.getElementById('display').value += operador.value;
        });
});

buttonEqual.addEventListener('click', function()
{
    calculauti();
});
buttonReset.addEventListener('click', function()
{
    document.getElementById('display').value = '';
});

function calculauti() 
{
    let makeOperation = ['+','-','*','/'];
    let displayValue = document.getElementById('display').value;
    let operatorIndex;
    let operator;

    for(let i = 0; i < makeOperation.length; i++)
    {
        if(displayValue.indexOf(makeOperation[i]) > -1)
        {
            operatorIndex = displayValue.indexOf(makeOperation[i]);
            operator = makeOperation[i];
        }
    }
    let operatorOne = displayValue.slice(0, operatorIndex);
    let operatorTwo = displayValue.slice(operatorIndex + 1);
    let result;
    operatorOne = parseInt(operatorOne);
    operatorTwo = parseInt(operatorTwo);

    switch(operator)
    {
        case '+':
            result = operatorOne + operatorTwo;
            break;
        case '-':
            result = operatorOne - operatorTwo;
            break;
        case '*':
            result = operatorOne * operatorTwo;
            break;
        case '/':
            result = operatorOne / operatorTwo;
            break;

    }
    document.getElementById('display').value = result;
}