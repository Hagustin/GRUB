function loadRecipes() {
    const flexContainer = document.querySelector('.flex-container');
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    storedRecipes.forEach(recipe => {
        const newFlexBox = document.createElement('div');
        newFlexBox.classList.add('flex-box');
        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        if (recipe.image) {
            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;
            recipeImage.style.width = '100%';
            frontDiv.appendChild(recipeImage);
        }
        const recipeName = document.createElement('div');
        recipeName.textContent = recipe.name;
        frontDiv.appendChild(recipeName);
        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.textContent = `Ingredients: ${recipe.ingredients} | Method: ${recipe.method} | Time: ${recipe.time}`;
        newFlexBox.appendChild(frontDiv);
        newFlexBox.appendChild(backDiv);
        flexContainer.appendChild(newFlexBox);
    });
}
window.onload = loadRecipes;