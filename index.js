function Formata(value){
    value = Math.ceil(value * 100)/100
    value = value.toFixed(2)
    return '$ ' + value
}

function foarmas(value){
    if(value == 1) return value + ' person'
    return value + ' people'

}

function recurso(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    let tipP = tipValue/split

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = Formata (tipValue)
    document.getElementById('totalWithTip').innerHTML = Formata(billTotal)
    document.getElementById('splitValue').innerHTML = foarmas(split)
    document.getElementById('billEach').innerHTML = Formata(billTotal / split)
    document.getElementById('billP').innerHTML = Formata (tipP)
}