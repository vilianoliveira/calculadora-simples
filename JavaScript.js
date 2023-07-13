function calcular(){
    var contas = document.getElementsByName('contas')
    var num1 = document.getElementById('num1')
    num1 = Number(num1.value)
    var num2 = document.getElementById('num2')
    num2 = Number(num2.value)
    var res = document.getElementById('res')
    
    if(contas[0].checked){
        var s = num1 + num2 
    } else if(contas[1].checked ){
        var s = num1 - num2
    }else if(contas[2].checked ){
        var s = num1 * num2
    }else if(contas[3].checked ){
        var s = num1 / num2
    }else if(contas[4].checked ){
        var s = num1 ** num2
    }

    res.innerHTML = ` O resultado é ${s}`
}