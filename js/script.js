var demo = document.getElementById("demo");


const recipes = [
    {
        title: "Spaghetti Carbonara",
        img: "./images/c987e47793-062e728ad4ccc343589c.png",
        rating: 4.5,
        review: 120,
        prepTime: "20 mins",
        cookTime: "15 mins",
        serving: 4,
        level: "Easy",
        cuisine: "Italian",
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g grated Parmesan cheese",
            "Black pepper to taste",
            "Salt to taste",
            "2 tbsp olive oil",
            "1 clove garlic, minced",
            "1 tbsp butter",
        ],
        instructions: [
            "Cook the spaghetti according to package instructions.",
            "In a separate pan, cook the pancetta until crispy.",
            "In a bowl, whisk together eggs and grated Parmesan cheese.",
            "Drain the spaghetti and return it to the pot.",
            "Add the pancetta and egg mixture to the spaghetti, tossing quickly to coat.",
            "Serve immediately with extra Parmesan cheese."
        ],
        nutrition: {
            calories: 400,
            fat: "15g",
            protein: "20g",
            carbs: "50g",
            fiber: "3g",
            sodium: "600mg",
        },
    },
    {
        title: "Chicken Tikka Masala",
        img: "./images/avatar-4.jpg",
        rating: 4.7,
        review: 245,
        prepTime: "25 mins",
        cookTime: "35 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "Indian",
        description: "A popular Indian dish made with marinated chicken cooked in a spiced tomato sauce.",
        ingredients: [
            "500g chicken breast, cubed",
            "200g plain yogurt",
            "2 tbsp tikka masala paste",
            "400g canned tomatoes",
            "200ml heavy cream",
            "1 onion, chopped",
            "3 garlic cloves, minced",
            "1 tbsp ginger, grated",
            "1/4 cup white wine",

        ],
        instructions: [
            "Marinate chicken in yogurt and half the tikka masala paste for at least 1 hour.",
            "Grill or pan-sear the chicken until charred and cooked through.",
            "Sauté onion, garlic, and ginger until fragrant.",
            "Add remaining tikka masala paste and canned tomatoes, simmer for 10 minutes.",
            "Stir in cream and cooked chicken, simmer for another 10 minutes.",
            "Serve hot with rice or naan."
        ],
        nutrition: {
            calories: 520,
            fat: "28g",
            protein: "38g",
            carbs: "24g",
            fiber: "4g",
            sodium: "780mg",
        },
    },
    {
        title: "Classic Beef Tacos",
        img: "./images/c987e47793-062e728ad4ccc343589c (1).png",
        rating: 4.3,
        review: 98,
        prepTime: "15 mins",
        cookTime: "20 mins",
        serving: 4,
        level: "Easy",
        cuisine: "Mexican",
        description: "Delicious beef tacos with fresh toppings, perfect for a quick and satisfying meal.",
        ingredients: [
            "8 taco shells",
            "500g ground beef",
            "1 packet taco seasoning",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "1 cup shredded cheddar cheese",
            "1/2 cup sour cream",
            "1 onion, chopped",
            "2 tomatoes, diced",
        ],
        instructions: [
            "Brown the ground beef in a skillet over medium heat.",
            "Add taco seasoning and a splash of water, simmer for 5 minutes.",
            "Warm the taco shells according to package instructions.",
            "Fill each shell with beef, lettuce, tomatoes, and cheese.",
            "Top with sour cream and serve immediately."
        ],
        nutrition: {
            calories: 450,
            fat: "24g",
            protein: "26g",
            carbs: "30g",
            fiber: "3g",
            sodium: "690mg",
        },
    },
    {
        title: "California Sushi Rolls",
        img: "./images/cover.jpg",
        rating: 4.6,
        review: 187,
        prepTime: "40 mins",
        cookTime: "20 mins",
        serving: 4,
        level: "Advanced",
        cuisine: "Japanese",
        description: "Fresh and flavorful California sushi rolls made with avocado, cucumber, and imitation crab meat.",
        ingredients: [
            "2 cups sushi rice",
            "4 nori sheets",
            "1 avocado, sliced",
            "1 cucumber, julienned",
            "200g imitation crab meat",
            "2 tbsp rice vinegar",
            "Sesame seeds",
            "1/2 tsp red pepper flakes",
            "1 lemon, juiced",
        ],
        instructions: [
            "Cook sushi rice and season with rice vinegar, let it cool.",
            "Place a nori sheet on a bamboo mat, spread rice evenly.",
            "Flip the sheet so the rice faces down.",
            "Layer avocado, cucumber, and crab meat in the center.",
            "Roll tightly using the bamboo mat, sprinkle with sesame seeds.",
            "Slice into pieces and serve with soy sauce.",
            "1 cup chicken broth",
            "1 tsp dried oregano",
            "1 tsp dried basil",
        ],
        nutrition: {
            calories: 380,
            fat: "9g",
            protein: "14g",
            carbs: "62g",
            fiber: "5g",
            sodium: "540mg",
        },
    },
    {
        title: "Pad Thai",
        img: "./images/photo-1455619452474-d2be8b1e70cd.avif",
        rating: 4.4,
        review: 156,
        prepTime: "20 mins",
        cookTime: "15 mins",
        serving: 3,
        level: "Intermediate",
        cuisine: "Thai",
        description: "Popular Thai stir-fried noodles with shrimp and peanuts, a perfect balance of sweet, sour, and savory flavors.",
        ingredients: [
            "200g rice noodles",
            "150g shrimp, peeled",
            "2 eggs",
            "1/4 cup crushed peanuts",
            "2 tbsp tamarind paste",
            "2 tbsp fish sauce",
            "1 tbsp brown sugar",
            "Bean sprouts and lime wedges",
            "2 tbsp fresh parsley, chopped",

        ],
        instructions: [
            "Soak rice noodles in warm water until softened.",
            "Stir-fry shrimp in a hot wok until pink, set aside.",
            "Scramble eggs in the same wok, push to the side.",
            "Add noodles, tamarind paste, fish sauce, and sugar, toss well.",
            "Return shrimp to the wok, add bean sprouts and peanuts.",
            "Serve with lime wedges on the side."
        ],
        nutrition: {
            calories: 470,
            fat: "16g",
            protein: "24g",
            carbs: "58g",
            fiber: "3g",
            sodium: "820mg",
        },
    },
    {
        title: "Greek Salad",
        img: "./images/photo-1467003909585-2f8a72700288 (1).avif",
        rating: 4.2,
        review: 76,
        prepTime: "15 mins",
        cookTime: "0 mins",
        serving: 4,
        level: "Easy",
        cuisine: "Greek",
        description: "A refreshing Greek salad with tomatoes, cucumber, feta cheese, and olives, dressed in olive oil and vinegar.",
        ingredients: [
            "4 tomatoes, chopped",
            "1 cucumber, sliced",
            "1 red onion, sliced",
            "200g feta cheese, cubed",
            "1/2 cup kalamata olives",
            "3 tbsp olive oil",
            "1 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "1 cup heavy cream",

        ],
        instructions: [
            "Combine tomatoes, cucumber, onion, and olives in a large bowl.",
            "Add cubed feta cheese on top.",
            "Whisk olive oil, vinegar, and oregano together.",
            "Drizzle dressing over the salad and toss gently.",
            "Season with salt and pepper before serving."
        ],
        nutrition: {
            calories: 290,
            fat: "22g",
            protein: "9g",
            carbs: "12g",
            fiber: "3g",
            sodium: "610mg",
        },
    },
    {
        title: "French Onion Soup",
        img: "./images/photo-1467003909585-2f8a72700288.avif",
        rating: 4.6,
        review: 134,
        prepTime: "15 mins",
        cookTime: "50 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "French",
        description: "A rich and flavorful French onion soup topped with toasted baguette slices and melted Gruyère cheese.",
        ingredients: [
            "4 large onions, thinly sliced",
            "4 cups beef broth",
            "2 tbsp butter",
            "1 tbsp flour",
            "4 slices baguette",
            "1 cup grated Gruyère cheese",
            "1/2 cup dry white wine",
            "1/2 cup milk",
            "1 tbsp flour",
        ],
        instructions: [
            "Melt butter in a pot and caramelize onions slowly over low heat.",
            "Sprinkle flour over onions and stir for 1 minute.",
            "Deglaze with white wine, then add beef broth.",
            "Simmer for 30 minutes, season with salt and pepper.",
            "Ladle into oven-safe bowls, top with baguette slice and cheese.",
            "Broil until cheese is bubbly and golden."
        ],
        nutrition: {
            calories: 340,
            fat: "16g",
            protein: "14g",
            carbs: "32g",
            fiber: "3g",
            sodium: "980mg",
        },
    },
    {
        title: "Chicken Caesar Salad",
        img: "./images/photo-1509722747041-616f39b57569.avif",
        rating: 4.3,
        review: 89,
        prepTime: "15 mins",
        cookTime: "15 mins",
        serving: 2,
        level: "Easy",
        cuisine: "American",
        description: "A classic Caesar salad with grilled chicken, romaine lettuce, croutons, and Parmesan cheese, tossed in a creamy Caesar dressing.",
        ingredients: [
            "2 chicken breasts",
            "1 head romaine lettuce, chopped",
            "1/2 cup Caesar dressing",
            "1/2 cup croutons",
            "1/4 cup shaved Parmesan",
            "Salt and pepper to taste",
            "1 tsp paprika",
            "1 tsp cumin",
            "1/2 tsp cinnamon",
        ],
        instructions: [
            "Season chicken breasts with salt and pepper, grill until cooked through.",
            "Let chicken rest, then slice into strips.",
            "Toss romaine lettuce with Caesar dressing.",
            "Top with sliced chicken, croutons, and Parmesan.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 410,
            fat: "22g",
            protein: "36g",
            carbs: "14g",
            fiber: "3g",
            sodium: "720mg",
        },
    },
    {
        title: "Margherita Pizza",
        img: "./images/photo-1529692236671-f1f6cf9683ba (1).avif",
        rating: 4.8,
        review: 312,
        prepTime: "30 mins",
        cookTime: "12 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "Italian",
        description: "A classic Italian pizza topped with fresh mozzarella, tomato sauce, and basil leaves, baked to perfection.",
        ingredients: [
            "1 pizza dough ball",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt to taste",
            "2 carrots, diced",
            "1 celery stalk, chopped",
            "1 bell pepper, sliced",
        ],
        instructions: [
            "Preheat oven to 250°C with a pizza stone if available.",
            "Roll out the pizza dough on a floured surface.",
            "Spread tomato sauce evenly over the dough.",
            "Top with mozzarella slices and a drizzle of olive oil.",
            "Bake for 10-12 minutes until crust is golden.",
            "Top with fresh basil leaves before serving."
        ],
        nutrition: {
            calories: 560,
            fat: "20g",
            protein: "24g",
            carbs: "68g",
            fiber: "3g",
            sodium: "890mg",
        },
    },
    {
        title: "Beef Stroganoff",
        img: "./images/photo-1529692236671-f1f6cf9683ba.avif",
        rating: 4.5,
        review: 143,
        prepTime: "20 mins",
        cookTime: "30 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "Russian",
        description: "A creamy Russian dish made with sautéed beef, mushrooms, and onions, served over egg noodles.",
        ingredients: [
            "500g beef sirloin, sliced thin",
            "250g mushrooms, sliced",
            "1 onion, chopped",
            "1 cup sour cream",
            "2 cups beef broth",
            "2 tbsp flour",
            "300g egg noodles",
            "1 cup mushrooms, sliced",
            "1 zucchini, diced",
        ],
        instructions: [
            "Sear beef strips in a hot pan until browned, set aside.",
            "Sauté onion and mushrooms in the same pan.",
            "Sprinkle flour over vegetables, stir for 1 minute.",
            "Add beef broth and simmer until thickened.",
            "Stir in sour cream and return beef to the pan.",
            "Serve over cooked egg noodles."
        ],
        nutrition: {
            calories: 540,
            fat: "26g",
            protein: "32g",
            carbs: "42g",
            fiber: "3g",
            sodium: "710mg",
        },
    },
    {
        title: "Falafel Wrap",
        img: "./images/photo-1546069901-eacef0df6022.avif",
        rating: 4.4,
        review: 102,
        prepTime: "25 mins",
        cookTime: "15 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "Middle Eastern",
        description: "Crispy falafel balls wrapped in pita bread with fresh vegetables and tahini sauce, a popular Middle Eastern street food.",
        ingredients: [
            "2 cups cooked chickpeas",
            "1 onion, chopped",
            "3 garlic cloves",
            "1/4 cup fresh parsley",
            "1 tsp cumin",
            "4 pita breads",
            "1/2 cup tahini sauce",
            "1 cup shredded lettuce",
            "1 cup spinach leaves",

        ],
        instructions: [
            "Blend chickpeas, onion, garlic, parsley, and cumin in a food processor.",
            "Form the mixture into small balls or patties.",
            "Fry falafel in hot oil until golden and crispy.",
            "Warm the pita breads.",
            "Fill each pita with falafel, lettuce, and tahini sauce.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 430,
            fat: "18g",
            protein: "16g",
            carbs: "54g",
            fiber: "9g",
            sodium: "560mg",
        },
    },
    {
        title: "Garlic Shrimp Scampi",
        img: "./images/photo-1547592166-23ac45744acd.avif",
        rating: 4.6,
        review: 118,
        prepTime: "10 mins",
        cookTime: "15 mins",
        serving: 3,
        level: "Easy",
        cuisine: "Italian",
        description: "A quick and flavorful Italian dish featuring shrimp sautéed in garlic, butter, and white wine, served over linguine pasta.",
        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "5 garlic cloves, minced",
            "1/2 cup white wine",
            "4 tbsp butter",
            "2 tbsp olive oil",
            "Fresh parsley, chopped",
            "Lemon juice",
            "1/2 cup kale, chopped",

        ],
        instructions: [
            "Cook linguine according to package instructions.",
            "Sauté garlic in olive oil and butter until fragrant.",
            "Add shrimp and cook until pink, about 3 minutes per side.",
            "Deglaze pan with white wine and lemon juice.",
            "Toss cooked pasta into the pan, mix well.",
            "Garnish with fresh parsley and serve."
        ],
        nutrition: {
            calories: 480,
            fat: "18g",
            protein: "28g",
            carbs: "48g",
            fiber: "2g",
            sodium: "650mg",
        },
    },
    {
        title: "Vegetable Stir Fry",
        img: "./images/photo-1559314809-0d155014e29e.avif",
        rating: 4.1,
        review: 64,
        prepTime: "15 mins",
        cookTime: "10 mins",
        serving: 3,
        level: "Easy",
        cuisine: "Chinese",
        description: "A quick and healthy stir-fry with a mix of fresh vegetables, seasoned with soy sauce and sesame oil.",
        ingredients: [
            "1 broccoli head, cut into florets",
            "1 bell pepper, sliced",
            "1 carrot, julienned",
            "150g snap peas",
            "3 tbsp soy sauce",
            "1 tbsp sesame oil",
            "2 garlic cloves, minced",
            "1 tsp grated ginger",
            "1 cup broccoli florets",
        ],
        instructions: [
            "Heat sesame oil in a wok over high heat.",
            "Add garlic and ginger, stir-fry for 30 seconds.",
            "Add broccoli and carrots, stir-fry for 3 minutes.",
            "Add bell pepper and snap peas, stir-fry for 2 more minutes.",
            "Pour in soy sauce and toss well.",
            "Serve hot with steamed rice."
        ],
        nutrition: {
            calories: 210,
            fat: "9g",
            protein: "7g",
            carbs: "26g",
            fiber: "6g",
            sodium: "740mg",
        },
    },
    {
        title: "Chicken Fajitas",
        img: "./images/photo-1565299585323-38d6b0865b47 (1).avif",
        rating: 4.5,
        review: 176,
        prepTime: "20 mins",
        cookTime: "20 mins",
        serving: 4,
        level: "Easy",
        cuisine: "Mexican",
        description: "Sizzling chicken fajitas with bell peppers and onions, served with warm flour tortillas and your favorite toppings.",
        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 onion, sliced",
            "2 tbsp fajita seasoning",
            "8 flour tortillas",
            "2 tbsp vegetable oil",
            "1 lime, juiced",
            "1 cup cauliflower florets",
            "1/2 cup peas",
        ],
        instructions: [
            "Toss chicken with fajita seasoning and lime juice.",
            "Heat oil in a large skillet, cook chicken until browned.",
            "Add peppers and onion, cook until softened.",
            "Warm the tortillas in a dry pan.",
            "Fill tortillas with the chicken and vegetable mixture.",
            "Serve with salsa and sour cream."
        ],
        nutrition: {
            calories: 460,
            fat: "16g",
            protein: "34g",
            carbs: "44g",
            fiber: "4g",
            sodium: "700mg",
        },
    },
    {
        title: "Mushroom Risotto",
        img: "./images/photo-1565557623262-b51c2513a641 (1).avif",
        rating: 4.7,
        review: 158,
        prepTime: "15 mins",
        cookTime: "35 mins",
        serving: 4,
        level: "Advanced",
        cuisine: "Italian",
        description: "A creamy Italian risotto made with arborio rice, sautéed mushrooms, and Parmesan cheese, perfect for a comforting meal.",
        ingredients: [
            "1.5 cups arborio rice",
            "300g mushrooms, sliced",
            "5 cups vegetable stock",
            "1/2 cup white wine",
            "1 onion, chopped",
            "1/2 cup grated Parmesan",
            "3 tbsp butter",
            "1/2 cup corn kernels",
            "1 avocado, sliced",
        ],
        instructions: [
            "Sauté mushrooms in butter until golden, set aside.",
            "Sauté onion until translucent, add rice and toast for 2 minutes.",
            "Deglaze with white wine, stir until absorbed.",
            "Add stock one ladle at a time, stirring constantly until absorbed.",
            "Continue until rice is creamy and al dente, about 25 minutes.",
            "Stir in mushrooms and Parmesan before serving."
        ],
        nutrition: {
            calories: 490,
            fat: "16g",
            protein: "13g",
            carbs: "68g",
            fiber: "3g",
            sodium: "620mg",
        },
    },
    {
        title: "Classic Fish and Chips",
        img: "./images/photo-1565299585323-38d6b0865b47 (1).avif",
        rating: 4.4,
        review: 142,
        prepTime: "20 mins",
        cookTime: "25 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "British",
        description: "A traditional British dish featuring battered and fried fish fillets served with crispy fries, perfect for a hearty meal.",
        ingredients: [
            "4 white fish fillets",
            "1 cup flour",
            "1 cup cold sparkling water",
            "4 large potatoes, cut into fries",
            "1 tsp baking powder",
            "Vegetable oil for frying",
            "Salt and malt vinegar",
            "1/2 cup black beans",
            "1/2 cup chickpeas",
        ],
        instructions: [
            "Cut potatoes into fries and fry in batches until golden, drain.",
            "Whisk flour, baking powder, and sparkling water into a batter.",
            "Dip fish fillets into the batter, coating evenly.",
            "Fry battered fish until golden and crispy, about 5-6 minutes.",
            "Drain on paper towels and season with salt.",
            "Serve with fries and malt vinegar."
        ],
        nutrition: {
            calories: 610,
            fat: "26g",
            protein: "32g",
            carbs: "62g",
            fiber: "5g",
            sodium: "780mg",
        },
    },
    {
        title: "Grilled Lamb Kebabs",
        img: "./images/photo-1633504581786-316c8002b1b9.avif",
        rating: 4.6,
        review: 121,
        prepTime: "30 mins",
        cookTime: "15 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "Middle Eastern",
        description: "Juicy lamb kebabs marinated in spices and grilled to perfection, served with flatbread and yogurt sauce.",
        ingredients: [
            "600g lamb shoulder, cubed",
            "1 onion, grated",
            "3 garlic cloves, minced",
            "2 tbsp olive oil",
            "1 tsp cumin",
            "1 tsp paprika",
            "1 lemon, juiced",
            "Wooden skewers",
            "1 cup cooked rice",

        ],
        instructions: [
            "Marinate lamb cubes with onion, garlic, oil, spices, and lemon juice for 2 hours.",
            "Thread lamb onto skewers.",
            "Preheat grill to medium-high heat.",
            "Grill skewers for 12-15 minutes, turning occasionally.",
            "Rest for a few minutes before serving.",
            "Serve with flatbread and yogurt sauce."
        ],
        nutrition: {
            calories: 430,
            fat: "24g",
            protein: "36g",
            carbs: "6g",
            fiber: "1g",
            sodium: "480mg",
        },
    },
    {
        title: "Roasted Pumpkin Soup",
        img: "./images/photo-1612874742237-6526221588e3.avif",
        rating: 4.3,
        review: 87,
        prepTime: "15 mins",
        cookTime: "40 mins",
        serving: 4,
        level: "Easy",
        cuisine: "American",
        description: "A creamy and comforting roasted pumpkin soup, perfect for chilly days, made with roasted pumpkin, onions, and a touch of cream.",
        ingredients: [
            "1 kg pumpkin, cubed",
            "1 onion, chopped",
            "3 cups vegetable stock",
            "1/2 cup heavy cream",
            "2 tbsp olive oil",
            "1 tsp nutmeg",
            "Salt and pepper to taste",
            "1 cup quinoa",
            "2 tbsp soy sauce",
        ],
        instructions: [
            "Toss pumpkin cubes with olive oil and roast at 200°C for 25 minutes.",
            "Sauté onion in a pot until softened.",
            "Add roasted pumpkin and vegetable stock, simmer for 10 minutes.",
            "Blend the soup until smooth using an immersion blender.",
            "Stir in cream and nutmeg, season to taste.",
            "Serve warm with crusty bread."
        ],
        nutrition: {
            calories: 260,
            fat: "14g",
            protein: "4g",
            carbs: "30g",
            fiber: "5g",
            sodium: "560mg",
        },
    },
    {
        title: "Ratatouille",
        img: "./images/photo-1603133872878-684f208fb84b.avif",
        rating: 4.2,
        review: 71,
        prepTime: "25 mins",
        cookTime: "45 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "French",
        description: "A traditional French Provençal stewed vegetable dish, made with eggplant, zucchini, tomatoes, and bell peppers, seasoned with herbs.",
        ingredients: [
            "1 eggplant, sliced",
            "2 zucchini, sliced",
            "2 tomatoes, sliced",
            "1 bell pepper, chopped",
            "1 onion, chopped",
            "3 garlic cloves, minced",
            "3 tbsp olive oil",
            "1 tsp herbes de Provence",
            "1 tbsp honey",

        ],
        instructions: [
            "Sauté onion, garlic, and bell pepper in olive oil until softened.",
            "Spread the mixture into a baking dish.",
            "Arrange alternating slices of eggplant, zucchini, and tomato on top.",
            "Drizzle with olive oil and sprinkle with herbes de Provence.",
            "Cover and bake at 190°C for 35-40 minutes.",
            "Serve warm as a side or main dish."
        ],
        nutrition: {
            calories: 220,
            fat: "12g",
            protein: "4g",
            carbs: "24g",
            fiber: "7g",
            sodium: "320mg",
        },
    },
    {
        title: "Butter Chicken",
        img: "./images/photo-1574894709920-11b28e7367e3.avif",
        rating: 4.8,
        review: 289,
        prepTime: "20 mins",
        cookTime: "30 mins",
        serving: 4,
        level: "Intermediate",
        cuisine: "Indian",
        description: "A rich and creamy Indian dish made with marinated chicken cooked in a spiced tomato and butter sauce, served with naan or rice.",
        ingredients: [
            "500g chicken thighs, cubed",
            "1 cup plain yogurt",
            "400g canned tomatoes",
            "200ml heavy cream",
            "4 tbsp butter",
            "1 tbsp garam masala",
            "3 garlic cloves, minced",
            "1 tbsp ginger, grated",
            "1 tbsp balsamic vinegar",

        ],
        instructions: [
            "Marinate chicken in yogurt and half the garam masala for 1 hour.",
            "Grill or pan-sear marinated chicken until charred, set aside.",
            "Melt butter and sauté garlic and ginger until fragrant.",
            "Add canned tomatoes and remaining garam masala, simmer for 15 minutes.",
            "Blend sauce until smooth, return to pan and stir in cream.",
            "Add chicken back to the sauce and simmer for 10 minutes before serving."
        ],
        nutrition: {
            calories: 540,
            fat: "32g",
            protein: "36g",
            carbs: "18g",
            fiber: "3g",
            sodium: "690mg",
        },
    }
];
changeRecipes();

function changeRecipes() {
    var randomIndex = Math.floor(Math.random() * recipes.length);
    var recipe = recipes[randomIndex];
    demo.innerHTML = `<div class="col-md-5">
                    <div class="h-100">
                        <div class="img-wrrap h-100 w-100 ">
                            <img src="${recipe.img}" alt="Food Image" class="img-fluid  shadow-sm h-100 w-100 object-fit-cover ">
                        </div>
                    </div>

                </div>
                <div class="col-md-7 h-100 overflow-y-auto p-3 p-md-5">
                    <div class="badges d-flex align-items-center justify-content-start gap-2  ">
                    <span class="badge bg-light text-secondary rounded-pill"></span>${recipe.level}</span>
                    <span class="badge bg-info text-primary rounded-pill">${recipe.cuisine}</span>
                    </div>
                    <div class="d-flex  align-items-center justify-content-between my-2 ">
                            <div class="text ">
                        <h2 class=" fs-1 fw-bold mb-0">${recipe.title}</h2>
                    </div>
                    <div class="icons d-flex mx-3 gap-3">
                        <div class="icon  d-flex align-items-center justify-content-center p-3  bg-light rounded rounded-3 shadow-sm">
                        <i class="fa-solid text-warning fa-bookmark fs-5"></i>
                    </div>
                     <div class="icon d-flex align-items-center justify-content-center p-3  bg-light rounded rounded-3 shadow-sm">
                        <i class="fa-solid fa-share-nodes text-warning fs-5"></i>
                    </div>
                    </div>

                    </div>
                    <p class="fs-6 text-muted mt-0">${recipe.description}</p>
                    <div class="alert alert-warning  d-flex align-items-center justify-content-start gap-2 my-4 border-0 border-start border-4 border-danger rounded-start rounded-3" role="alert">
                              <i class="fa-solid fa-triangle-exclamation fs-4 text-danger"></i>

                        <div>
                            <h5 class="fs-6 fw-bold m-0">${recipe.cookTime}</h5>
                            <p>${recipe.prepTime}</p>
                        </div>
                    </div>
    <ul class="nav nav-pills nav-fill mb-3 " id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-ingredients" type="button" role="tab" aria-controls="pills-ingredients" aria-selected="true"><i class="fa-solid fa-list-check m-2"></i>Ingredients</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-instructions-tab" data-bs-toggle="pill" data-bs-target="#pills-instructions" type="button" role="tab" aria-controls="pills-instructions" aria-selected="false"><i class="fa-solid fa-book-open m-2"></i>instructions</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-nutrition-tab" data-bs-toggle="pill" data-bs-target="#pills-nutrition" type="button" role="tab" aria-controls="pills-nutrition" aria-selected="false"><i class="fa-solid fa-chart-pie m-2"></i>nutrition</button>
  </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-Chef" data-bs-toggle="pill" data-bs-target="#pills-Chef" type="button" role="tab" aria-controls="pills-Chef" aria-selected="false"><i class="fa-solid fa-lightbulb m-2"></i>Chef's Tips</button>
  </li>

    </ul>
    <div class="tab-content my-tab-content" id="pills-tabContent">
  <div class="tab-pane  fade show active" id="pills-ingredients" role="tabpanel" aria-labelledby="pills-ingredients-tab" tabindex="0">
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">1</div>
    <span class="text-muted">${recipe.ingredients[0]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">2</div>
    <span class="text-muted">${recipe.ingredients[1]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">3</div>
    <span class="text-muted">${recipe.ingredients[2]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">4</div>
    <span class="text-muted">${recipe.ingredients[3]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">5</div>
    <span class="text-muted">${recipe.ingredients[4]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">6</div>
    <span class="text-muted">${recipe.ingredients[5]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">7</div>
    <span class="text-muted">${recipe.ingredients[6]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">8</div>
    <span class="text-muted">${recipe.ingredients[7]}</span>
</div>
<div class="d-flex">
        <div class="h6 me-2  bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 25px; height: 25px; color: white;">9</div>
    <span class="text-muted">${recipe.ingredients[8]}</span>
</div>
  </div>
  <div class="tab-pane fade" id="pills-instructions" role="tabpanel" aria-labelledby="pills-instructions-tab" tabindex="0">
    <div class="d-flex justify-content-start align-items-center gap-2 mb-3">
        <div class="h6 me-2  bg-warning rounded rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; color: white;">1</div>
        <h6>${recipe.instructions[0]}</h6>
    </div>
        <div class="d-flex justify-content-start align-items-center gap-2 mb-3">
        <div class="h6 me-2  bg-warning rounded rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; color: white;">2</div>
        <h6>${recipe.instructions[1]}</h6>
    </div>
        <div class="d-flex justify-content-start align-items-center gap-2 mb-3">
        <div class="h6 me-2  bg-warning rounded rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; color: white;">3</div>
        <h6>${recipe.instructions[2]}</h6>
    </div>
        <div class="d-flex justify-content-start align-items-center gap-2 mb-3">
        <div class="h6 me-2  bg-warning rounded rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; color: white;">4</div>
        <h6>${recipe.instructions[3]}</h6>
    </div>
        <div class="d-flex justify-content-start align-items-center gap-2 mb-3">
        <div class="h6 me-2  bg-warning rounded rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; color: white;">5</div>
        <h6>${recipe.instructions[4]}</h6>
    </div>
        <div class="d-flex justify-content-start align-items-center gap-2 mb-3">
        <div class="h6 me-2  bg-warning rounded rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; color: white;">6</div>
        <h6>${recipe.instructions[5]}</h6>
    </div>
  </div>
  <div class="tab-pane fade " id="pills-nutrition" role="tabpanel" aria-labelledby="pills-nutrition-tab" tabindex="0">
    <div class="row">
        <div class="col-md-6">
            <div class="nutrition-card d-flex align-items-center justify-content-between  gap-3 p-3 mb-3 bg-light rounded rounded-3 shadow-sm";">
                <div class="d-flex justify-content-center align-items-start gap-2">
                    <div class="nutrion-icon d-flex align-items-center justify-content-center p-2 rounded rounded-3" style="background-color: #FFEDD4;">
                    <i class="fa-solid fa-fire text-warning"></i>
                </div>
                <h5>Calories</h5>
                </div>
                <div class="nutrion-text">
                    <h4>${recipe.nutrition.calories}</h4>
                </div>
            </div>
                    <div class="nutrition-card d-flex align-items-center justify-content-between  gap-3 p-3 mb-3 bg-light rounded rounded-3 shadow-sm";">
                <div class="d-flex justify-content-center align-items-center gap-2">
                    <div class="nutrion-icon d-flex align-items-center justify-content-center p-2 rounded rounded-3" style="background-color: #FFEDD4;">
                    <i class="fa-brands fa-pagelines text-warning"></i>
                </div>
                <h5>Carbohydrates</h5>
                </div>
                <div class="nutrion-text ">
                    <h4>${recipe.nutrition.carbohydrates}</h4>
                </div>
            </div>
                        <div class="nutrition-card d-flex align-items-center justify-content-between  gap-3 p-3 mb-3 bg-light rounded rounded-3 shadow-sm";">
                <div class="d-flex justify-content-center align-items-center gap-2">
                    <div class="nutrion-icon d-flex align-items-center justify-content-center p-2 rounded rounded-5" style="background-color: #FFEDD4;">
                    <i class="fa-solid fa-fire text-warning"></i>
                </div>
                <h5>Fiber</h5>
                </div>
                <div class="nutrion-text">
                    <h4>${recipe.nutrition.fiber}</h4>
                </div>
            </div>

        </div>
                <div class="col-md-6">
            <div class="nutrition-card d-flex align-items-center justify-content-between  gap-3 p-3 mb-3 bg-light rounded rounded-3 shadow-sm";">
                <div class="d-flex justify-content-center align-items-start gap-2">
                    <div class="nutrion-icon d-flex align-items-center justify-content-center p-2 rounded rounded-3" style="background-color: #FFEDD4;">
                       <i class="fa-solid fa-dumbbell "></i>
                </div>
                <h5>Protein</h5>
                </div>
                <div class="nutrion-text">
                    <h4>${recipe.nutrition.protein}</h4>
                </div>
            </div>
                        <div class="nutrition-card d-flex align-items-center justify-content-between  gap-3 p-3 mb-3 bg-light rounded rounded-3 shadow-sm";">
                <div class="d-flex justify-content-center align-items-start gap-2">
                    <div class="nutrion-icon d-flex align-items-center justify-content-center p-2 rounded rounded-3" style="background-color: #FFEDD4;">
                    <i class="fa-solid fa-droplet text-danger "></i>
                </div>
                <h5>Fat</h5>
                </div>
                <div class="nutrion-text">
                    <h4>${recipe.nutrition.fat}</h4>
                </div>
            </div>
                        <div class="nutrition-card d-flex align-items-center justify-content-between  gap-3 p-3 mb-3 bg-light rounded rounded-3 shadow-sm";">
                <div class="d-flex justify-content-center align-items-start gap-2">
                    <div class="nutrion-icon d-flex align-items-center justify-content-center p-2 rounded rounded-5" style="background-color: #FFEDD4;">
                    <i class="fa-solid fa-cube text-danger"></i>
                </div>
                <h5>Sodium</h5>
                </div>
                <div class="nutrion-text">
                    <h4>${recipe.nutrition.sodium}</h4>
                </div>
            </div>

        </div>
    </div>
  </div>
    <div class="tab-pane fade" id="pills-Chef-tab" role="tabpanel" aria-labelledby="pills-Chef-tab" tabindex="0">
                            <div class="alert alert-warning  d-flex align-items-center justify-content-start gap-2 my-4 border-0 border-start border-4 border-danger rounded-start rounded-3" role="alert">
                              <i class="fa-solid fa-triangle-exclamation fs-4 text-danger"></i>

                        <div>
                            <h5 class="fs-6 fw-bold m-0">Extended Preparation Time</h5>
                            <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                        </div>
                    </div>
                                        <div class="alert alert-warning  d-flex align-items-center justify-content-start gap-2 my-4 border-0 border-start border-4 border-danger rounded-start rounded-3" role="alert">
                              <i class="fa-solid fa-triangle-exclamation fs-4 text-danger"></i>

                        <div>
                            <h5 class="fs-6 fw-bold m-0">Extended Preparation Time</h5>
                            <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                        </div>
                    </div>
                                        <div class="alert alert-warning  d-flex align-items-center justify-content-start gap-2 my-4 border-0 border-start border-4 border-danger rounded-start rounded-3" role="alert">
                              <i class="fa-solid fa-triangle-exclamation fs-4 text-danger"></i>

                        <div>
                            <h5 class="fs-6 fw-bold m-0">Extended Preparation Time</h5>
                            <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                        </div>
                    </div>
  
    </div>
  
            </div>
            <button onclick="changeRecipes()" class="btn btn-warning m-3 rounded-3 text-white d-flex align-items-center justify-content-center gap-2" id="try-another-recipe">
                <i class="fa-solid fa-repeat"></i>Try Another Recipe
            </button>
        </div>`

}