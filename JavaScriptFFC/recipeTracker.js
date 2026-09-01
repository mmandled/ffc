const recipes = [];

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: "",
};

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: "",
};

const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: "",
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(recipe){
    return recipe.length;
}

function getDifficultyLevel(cookTime){

    if(cookTime <= 30){
        return "easy";
    }else if(cookTime <= 60){
        return "medium";
    }else return "hard";
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.difficultyLevel);
console.log(recipe1DifficultyLevel);

const result = recipe1.totalIngredients;