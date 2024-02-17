function rectangleInput(){
    const width = inputValue('rectangleWidth')
    const length = inputValue('rectangleLength')
    const area = width*length

    setInnerTextValue('result', area);      
}
function inputValue(element){
    const inputValueText =document.getElementById(element)
    const inputValue = inputValueText.value;
    const input = parseFloat(inputValue)
    return input;
}

function setInnerTextValue(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText =area;
}