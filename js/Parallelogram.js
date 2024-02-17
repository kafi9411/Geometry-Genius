function parallelogramInput(){
    const base = inputValueText('parallelogramBase')
    const hight = inputValueText('ParallelogramHight')

    const area = base * hight

    result('ParallelogramResult',area)
}
function inputValueText(element){
    const inputAreaValue = document.getElementById(element)
    const inputText = inputAreaValue.value;
    const input = parseFloat(inputText)
    return input;
}
function result(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText =area;
}