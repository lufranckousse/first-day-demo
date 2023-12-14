const API_KEY = "f8ae7eccb4e1485cb4c16dd8282d7fd4";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe)=>{
        const recipeItemEl = document.CreateElement("li");
        recipeItemEl.classList.add("recipe-items");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);

        recipeItemEl.appendChild(recipeItemEl);
    })
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes

}

async function init (){
    const recipes = await getRecipes()
    displayRecipes(recipes)
}

init()