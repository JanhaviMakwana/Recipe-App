const recipes = [
    {
        id: '1',
        author: 'Sanjeev Kapoor',
        title: 'Aloo Chaat',
        ingredients: [
            { name: "vegetable-oil", quantity: "6", parameter: "teaspoon" },
            { name: "medium-sized potatoes", quantity: "8", parameter: "" },
            { name: "ground-cumin", quantity: "2", parameter: "teaspoon" },
            { name: "chat-masala", quantity: "2", parameter: "teaspoon" },
            { name: "red chilli powder", quantity: "1", parameter: "teaspoon" },
            { name: "salt", quantity: "1/2", parameter: "teaspoon" },
            { name: "sev", quantity: "1", parameter: "cup" },
            { name: "tamarind chutney", quantity: "6", parameter: "teaspoon" }
        ],
        servings: '4',
        steps: [
            { step: "Peel potatoes and cut them into pieces about 1/2' wide and 1/2' long. Place them in a microwaveable bowl and fill with water in such a way that all the potatoes are submerged in water. Microwave for 3 minutes." },
            { step: "Pour the potatoes carefully in a sieve and drain the water. After the potatoes have cooled down, wipe them dry on a kitchen towel or paper napkin." },
            { step: "Heat a cast-iron or any thick-bottomed skillet. Pour half the vegetable oil. Divide the potatoes into two batches to ensure that the pieces get heated in a single layer without crowding each other. Insert the potatoes in the cast-iron pan." },
            { step: "Sauté the potatoes and stir every 2 to 3 minutes to prevent them from sticking to the pan. The goal is for the potatoes to acquire a taut, golden-brown skin on all the surfaces. This takes about 15 to 18 minutes. Repeat the process with the next batch." },
            { step: "Put the roasted potatoes in a mixing bowl. Add salt, red chile powder, cumin powder, and chaat masala. Mix well." },
            { step: "Divide potatoes between four serving plates. Layer sev on top. Serve right away." }
        ],
        img: 'aloo-chaat.jpg',
        time: '15 mins'
    },

    {
        id: '2',
        author: 'Pankaj Bhadoria',
        title: "Watermelon Sorbet",
        ingredients: [
            { name: "white sugar", quantity: "1/2", parameter: "cup" },
            { name: "water", quantity: "1/4", parameter: "cup" },
            { name: "lemon juice", quantity: "1/4", parameter: "cup" },
            { name: "cubed seeded watermelon", quantity: "2", parameter: "cup" }
        ],
        servings: '4',
        steps: [
            { step: "Combine sugar, water, and lemon juice in a saucepan over medium heat; cook and stir until sugar is dissolved, about 5 minutes. Remove from heat and refrigerate until cooled, about 30 minutes." },
            { step: "Blend watermelon in a blender or food processor until pureed. Stir pureed watermelon into sugar mixture. Transfer watermelon mixture to an ice cream maker and freeze according to manufacturer's instructions." }
        ],
        img: 'watermelon-sorbet.jpg',
        time: '15 mins'
    },

    {
        id: '3',
        author: 'Sanjeev Kapoor',
        title: "Coffee Shake",
        ingredients: [
            { name: "instant coffee granules", quantity: "4", parameter: "teaspoon" },
            { name: "milk", quantity: "3", parameter: "cup" },
            { name: "vanilla extract", quantity: "3", parameter: "teaspoon" },
            { name: "white sugar", quantity: "8", parameter: "teaspoon" },
            { name: "ice cubes", quantity: "8", parameter: "" },
            { name: "chocolate syrup", quantity: "8", parameter: "teaspoon" }
        ],
        servings: '4',
        steps: [
            { step: "Combine the instant coffee, milk, vanilla extract, sugar, ice, and chocolate syrup in a blender; blend until smooth." }
        ],
        img: 'coffee-shake.JPG',
        time: '5 mins'
    },

    {
        id: '4',
        title: "Tomato Rice",
        author: 'Pankaj Bhadoria',
        ingredients: [
            { name: "vegetable-oil", quantity: "1/2", parameter: "teaspoon" },
            { name: "onions", quantity: "2", parameter: "diced" },
            { name: "salt", quantity: "1/2", parameter: "teaspoon" },
            { name: "garlic", quantity: "1", parameter: "clove" },
            { name: "chilli powder", quantity: "1", parameter: "teaspoon" },
            { name: "ground turmeric", quantity: "1/4", parameter: "teaspoon" },
            { name: "diced tomatoes", quantity: "3/2", parameter: "cup" },
            { name: "basmati rice", quantity: "3/2", parameter: "cup" },
            { name: "water", quantity: "3/2", parameter: "cup" }
        ],
        servings: '4',
        steps: [
            { step: "Heat oil in a saucepan over medium heat; cook and stir onions until golden, 10 to 15 minutes. Add salt, garlic, chile powder, ginger, and turmeric; stir to coat. Mix tomatoes into onion mixture; cook and stir until tomatoes begin to break down, 5 to 10 minutes." },
            { step: "Stir rice into onion-tomato mixture and pour in water. Bring to a boil; reduce heat to low, cover, and simmer, stirring occasionally, until rice is tender and liquid is absorbed, 15 to 20 minutes." }
        ],
        img: 'tomato-rice.jpg',
        time: '45 mins'
    },
    {
        id: '5',
        author: 'Pankaj Bhadoria',
        title: "Chocolate Pie",
        ingredients: [
            { name: "Pie shell", quantity: "1", parameter: "backed" },
            { name: "non-instant chocolate pudding mix", quantity: "1", parameter: "package" },
            { name: "low-fat milk", quantity: "2", parameter: "cup" },
            { name: "frozen whipped topping", quantity: "1", parameter: "container" },
            { name: "chocolate shavings", quantity: "1/4", parameter: "cup" }
        ],
        servings: '4',
        steps: [
            { step: "Prepare pudding according to package directions. Cover pudding with wax paper and allow to cool for 5 minutes." },
            { step: "Pour pudding into pie shell and refrigerate until cool." },
            { step: "op with whipped topping before serving. Garnish with chocolate shavings." }
        ],
        img: 'chocolate-pie.jpg',
        time: '1 hr 15 mins'
    },
    {
        id: '6',
        author: 'Kunal Kapoor',
        title: "Onion Spaghetti",
        ingredients: [
            { name: "olive oil", quantity: "2", parameter: "tablespoon" },
            { name: "large onions", quantity: "4", parameter: "sliced" },
            { name: "garlic", quantity: "2", parameter: "crushed" },
            { name: "tomato sauce", quantity: "1", parameter: "tablespoon" },
            { name: "whole peeled tomatoes", quantity: "1", parameter: "can" },
            { name: "salt", quantity: "1", parameter: "tablespoon" },
            { name: "freshly ground black pepper", quantity: "1/2", parameter: "tablespoon" },
            { name: "chopped fresh basil", quantity: "1", parameter: "tablespoon" },
            { name: "water", quantity: "1/4", parameter: "cup" },
            { name: "spaghetti", quantity: "1", parameter: "pound" }
        ],
        servings: '4',
        steps: [
            { step: "Heat oil in a large skillet over medium heat. Cook onions and garlic in oil until soft. Stir in tomato paste, tomatoes, salt, pepper, basil and water. Cover, reduce heat to low, and simmer 20 minutes, until thickened." },
            { step: "While sauce is simmering, bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain." },
            { step: "Toss sauce with hot pasta." }
        ],
        img: 'onion-spaghetti.jpg',
        time: '40 mins'
    },
    {
        id: '7',
        author: 'Sanjeev Kapoor',
        title: "Instant Jowar Dosa",
        ingredients: [
            { name: "jowar flour", quantity: "1", parameter: "cup" },
            { name: "rice flour", quantity: "1/4", parameter: "cup" },
            { name: "sooji", quantity: "2", parameter: "tablespoon" },
            { name: "butter milk", quantity: "1/2", parameter: "cup" },
            { name: "green chilli", quantity: "2", parameter: "finaly chopped" },
            { name: "salt", quantity: "1", parameter: "tablespoon" },
            { name: "ginger", quantity: "1", parameter: "grated" },
            { name: "curry leaves", quantity: "5", parameter: "finely chpped" },
            { name: "coriander leaves", quantity: "5", parameter: "finely chopped" },
            { name: "cumin seeds", quantity: "1", parameter: "tablespoon" },
            { name: "salt", quantity: "1", parameter: "tablespoom" },
            { name: "olive oil", quantity: "2", parameter: "tablespoon" }
        ],
        servings: '4',
        steps: [
            { step: "In a big mixing bowl , take all the dry flours ie jowar flour , rice flour , rava , grated ginger , chopped chilli , curry leaves , coriander leaves , cumin and salt . Don't add onion ." },
            { step: "Add some water and / or butter milk . Mix well so that no lumps are formed .let it sit for 5-10 mins . Mix and check the consistency. The batter should be thin like that of rava dosa batter." },
            { step: "Heat a tawa or nonstick pan. When the tawa is hot , rub it with a drop of oil using an onion piece. Sprinkle onion pieces ." },
            { step: "To the hot tawa pour a ladle full of jowar dosa batter in circular motion.Start pouring the batter from the outside rim of tawa to inwards center of tawa. As the batter is thin ,it will become lacy .( The method of pouring this dosa is similar to rava dosa) .Smear a few drops of oil around the dosa." },
            { step: "Lid the pan and cook it on a medium flame.Cook till bottom side starts to turn golden brown.Once it becomes crisp ,just fold and serve . No need to flip ." },
            { step: "Remove from tawa and serve hot Jowar dosa with chutney / chutney powder or sambar ." }
        ],
        img: 'jowar-dosa.jpg',
        time: '40 mins'
    },
    {
        id: '8',
        author: 'Sanjeev Kapoor',
        title: "Super Lemon Ice Cream",
        ingredients: [
            { name: "olive oil", quantity: "2", parameter: "tablespoon" },
            { name: "large onions", quantity: "4", parameter: "sliced" },
            { name: "garlic", quantity: "2", parameter: "crushed" },
            { name: "tomato sauce", quantity: "1", parameter: "tablespoon" },
            { name: "whole peeled tomatoes", quantity: "1", parameter: "can" },
            { name: "salt", quantity: "1", parameter: "tablespoon" },
            { name: "freshly ground black pepper", quantity: "1/2", parameter: "tablespoon" },
            { name: "chopped fresh basil", quantity: "1", parameter: "tablespoon" },
            { name: "water", quantity: "1/4", parameter: "cup" },
            { name: "spaghetti", quantity: "1", parameter: "pound" }
        ],
        servings: '4',
        steps: [
            { step: "Heat oil in a large skillet over medium heat. Cook onions and garlic in oil until soft. Stir in tomato paste, tomatoes, salt, pepper, basil and water. Cover, reduce heat to low, and simmer 20 minutes, until thickened." },
            { step: "While sauce is simmering, bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain." },
            { step: "Toss sauce with hot pasta." }
        ],
        img: 'lemon-icecream.jpg',
        time: '35 mins'
    },
    {
        id: '9',
        author: 'Kunal Kapoor',
        title: "Mojito",
        ingredients: [
            { name: " fresh mint leaves", quantity: "40", parameter: "" },
            { name: "lemon", quantity: "4", parameter: "cut into 4 wedges" },
            { name: "white sugar", quantity: "8", parameter: "tablespoon" },
            { name: "ice cubes", quantity: "4", parameter: "cup" },
            { name: "white rum", quantity: "6", parameter: "fluid ounces" },
            { name: "club soda ", quantity: "2", parameter: "cup" }
        ],
        servings: '4',
        steps: [
            { step: "Place mint leaves and 1 lime wedge into a sturdy glass. Use a muddler to crush the mint and lime to release the mint oils and lime juice. Add 2 more lime wedges and the sugar, and muddle again to release the lime juice. Do not strain the mixture." },
            { step: "Fill the glass almost to the top with ice. Pour the rum over the ice, and fill the glass with carbonated water. Stir, taste, and add more sugar if desired. Garnish with the remaining lime wedge." }
        ],
        img: 'mojito.jpg',
        time: '10 mins'
    },
    {
        id: '10',
        author: 'Kunal Kapoor',
        title: "Palak Paneer",
        ingredients: [
            { name: "cooking spray", quantity: "", parameter: "" },
            { name: "paneer", quantity: "1", parameter: "pound cubed" },
            { name: "canola oil", quantity: "4", parameter: "tablespoon" },
            { name: "cumin seeds", quantity: "2", parameter: "tablespoon" },
            { name: "fresh spinach", quantity: "2", parameter: "can" },
            { name: "garlic", quantity: "6", parameter: "clove" },
            { name: "large tomato", quantity: "2", parameter: "diced" },
            { name: "dried red chile peppers", quantity: "4", parameter: "" },
            { name: "water", quantity: "3", parameter: "cup" },
            { name: "chopped fresh ginger root", quantity: "2", parameter: "tablespoon" },
            { name: "curry powder", quantity: "2", parameter: "teaspoon" },
            { name: "ground coriander", quantity: "2", parameter: "teaspoon" },
            { name: "ground turmeric", quantity: "2", parameter: "teaspoon" },
            { name: "taste", quantity: "2", parameter: "pinch" }
        ],
        servings: '4',
        steps: [
            { step: "Heat a skillet coated with cooking spray over medium heat; fry paneer cubes until lightly browned on each side, about 5 minutes. Transfer paneer to a bowl." },
            { step: "Heat 1 tablespoon canola oil in the same skillet used to cook paneer over medium heat. Add cumin seeds and cook until seeds are slightly red. Stir water, spinach, tomato, garlic, chile peppers, ginger, curry powder, ground coriander, and ground turmeric into cumin seeds. Season with salt." },
            { step: "Transfer spinach mixture to a blender or food processor; puree until smooth." },
            { step: "Heat remaining 1 tablespoon canola oil in a saucepan over medium heat; add spinach puree and paneer cubes. Simmer until hot, about 5 minutes." }
        ],
        img: 'palak-paneer.jpg',
        time: '50 mins'
    }
];


const findList = () => {
    const authorsList = [];

    const list = [];
    for (let key in recipes) {
        list.push(recipes[key].author);
    }
    const authors = [...new Set(list)];

    console.log(authors);
    for (let key in authors) {
        const recipesList = recipes.filter(x => x.author === authors[key]);
        authorsList.push({
            name: authors[key],
            key: key,
            recipes: recipesList
        })
    };
    return authorsList;
};

export { recipes, findList };