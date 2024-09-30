async function getPizza() {
    
        const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
        const data = await response.json();
        const recipes = data.data.recipes;
        const count = data.results;

        document.querySelector(".count").textContent = `${count} pizza recipes available`;

        const result = recipes.map(function(recipe) {
            return `
            <div class="pizza">
                <h2>${recipe.title}</h2>
                <img src="${recipe.image_url}"/>
            </div>
            `;
        }).join('');

        document.querySelector(".recipes .row").innerHTML = result;

    
}

getPizza();
