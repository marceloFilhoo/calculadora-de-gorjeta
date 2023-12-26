    
function formatMoney(value){
    value = value.toFixed(2)
    return "R$" +value
}

function result(){
    let conta = Number(document.getElementById("yourBill").value);
    let gorjeta = document.getElementById("tipInput").value;
    let pessoas = document.getElementById("splitInput").value;

    document.getElementById("tipPercent").innerHTML = String(gorjeta)+' %';
    document.getElementById("splitValue").innerHTML = String(pessoas);
    

    if(conta != 0){
        let gorjetavalor = gorjeta / 100 * conta
        let total=gorjetavalor+conta      
        document.getElementById("tipValue").innerHTML= String(formatMoney(gorjetavalor))
        document.getElementById("totalWithTip").innerHTML = String(formatMoney(total))
        document.getElementById("billEach").innerHTML= String(formatMoney(total/pessoas))
    }
}