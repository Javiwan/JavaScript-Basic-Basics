let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while(groceryList.length > 0){
  removedItem = groceryList.shift();
  console.log(removedItem);
}

console.log(groceryList);