
//  We need to complete a function called chooseRecipe(), which will receive three
//  parameters: - An array of ingredients in stock at Bakery A - An array of 
//  ingredients in stock at Bakery B - An array of recipe objects. Each recipe has 
//  a name property(string) and an ingredient property(array).
//  We are limiting our search to two ingredient recipes. We want to find a recipe 
//  that utilizes one ingredient from Bakery A and one from Bakery B.
//  Our chooseRecipe() function should return the name of the correct recipe.
//  There will always be a single correct answer, and you will NOT need to consider 
//  special cases. For example, you do NOT need to worry about cases where one bakery 
//  has BOTH the ingredients for a recipe.

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  bakeryAHas = false;
  bakeryBHas = false;
  for (recipe of recipes) {
    for (ingredients of recipe.ingredients) {
      for (ingredientsA of bakeryA) {

        if (ingredientsA == ingredients) bakeryAHas = true;

        for (ingredientsB of bakeryB) {

          if (ingredientsB == ingredients) bakeryBHas = true;
          if (bakeryAHas && bakeryBHas) return recipe.name

        }
      }
    }
  }
  return 'Unfotunately our bakeries do not have the ingredients in stock'
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));