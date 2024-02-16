document.getElementById('triangleButton').addEventListener('click', function(){
  const triangleBase = document.getElementById('triangleBase')
  const triangleBaseText = triangleBase.value;
  const base = parseFloat(triangleBaseText)

  const triangleWidth = document.getElementById('triangleWidth')
  const triangleWidthText = triangleWidth.value;
  const width = parseFloat(triangleWidthText)
  

  const value =.5 * base * width
  console.log(value )

})