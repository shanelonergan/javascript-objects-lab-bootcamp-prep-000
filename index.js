var recipe = {
  eggs: 3
  sugur: '2 cups'
  butter: '2 sticks'
  flour: '3 cups'
}

function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value }) 
}

updateObjectWithKeyAndValue(recipe, sugar, '2.5 cups')