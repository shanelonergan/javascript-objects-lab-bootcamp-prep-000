var recipes = {
  eggs: 3,
  sugur: '2 cups',
  butter: '2 sticks',
  flour: '3 cups',
};

function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value });
}

updateObjectWithKeyAndValue(recipes, sugar, '2.5 cups');

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipe[key] = value;
  return recipes;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, eggs, '4');
