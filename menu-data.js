/* All 79 customer-facing items from the TCCM sheet. */
const MENU = [
  {
    "name": "Classic Salted French Fries",
    "description": "Golden, crispy French fries lightly salted to perfection, served with classic mayonnaise and tangy tomato dip.",
    "carbs": "80",
    "protein": "6",
    "calories": 344,
    "price": 180,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Spicy Peri Peri French Fries",
    "description": "Crispy golden fries tossed in bold and zesty peri peri masala, served with creamy mayo and ketchup.",
    "carbs": "83",
    "protein": "7",
    "calories": 360,
    "price": 190,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Crispy Herb Potato Wedges",
    "description": "Thick-cut, golden potato wedges seasoned with aromatic herbs, served crisp with creamy mayonnaise and ketchup.",
    "carbs": "73",
    "protein": "6",
    "calories": 316,
    "price": 180,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Golden Crisp Hash Browns",
    "description": "Eight golden, crispy hash brown patties fried to a crunchy finish, accompanied by ketchup and mayo.",
    "carbs": "85",
    "protein": "6",
    "calories": 364,
    "price": 220,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Crispy Golden Veg Fingers",
    "description": "Eight crispy crumb-coated vegetable fingers fried golden brown, served with tangy tomato dip.",
    "carbs": "61",
    "protein": "7",
    "calories": 272,
    "price": 200,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Crispy Golden Chicken Fingers",
    "description": "Eight tender, seasoned chicken fingers breaded and fried till crunchy golden, paired with mayo and tomato sauce.",
    "carbs": "40",
    "protein": "32",
    "calories": 288,
    "price": 220,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Classic Crispy Chicken Nuggets",
    "description": "Eight classic bite-sized chicken nuggets with a crispy coating and juicy center, served with dips.",
    "carbs": "30",
    "protein": "22",
    "calories": 208,
    "price": 240,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Crispy Fish Fingers with Tartar Dip",
    "description": "Eight flaky fish fingers fried crisp and golden, served with rich, creamy tartar dip.",
    "carbs": "30",
    "protein": "26",
    "calories": 224,
    "price": 280,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Crispy Tender Chicken Strips",
    "description": "Succulent strips of marinated chicken breast seasoned with herbs, crisped to perfection and served with dips.",
    "carbs": "84",
    "protein": "57",
    "calories": 564,
    "price": 280,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Creamy Butter Garlic Prawns",
    "description": "Juicy pan-seared prawns tossed in a rich butter garlic cream sauce with parmesan, served with toasted bread.",
    "carbs": "27",
    "protein": "46",
    "calories": 292,
    "price": 380,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Crispy Korean Glazed Chicken",
    "description": "Crispy chicken tossed in a sweet, savory, and spicy Korean glaze, topped with toasted sesame seeds and scallions.",
    "carbs": "94",
    "protein": "57",
    "calories": 604,
    "price": 320,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Continental Crispy Fish & Chips",
    "description": "Crumb-crusted crispy basa fish fillet paired with golden fries and continental dipping sauce.",
    "carbs": "111",
    "protein": "49",
    "calories": 640,
    "price": 360,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Honey Chilli Garlic Chicken Wings",
    "description": "Crispy chicken wings coated in a finger-licking sweet, spicy honey chilli garlic glaze.",
    "carbs": "87",
    "protein": "48",
    "calories": null,
    "price": 320,
    "category": "Appetizers & Starters"
  },
  {
    "name": "Sausage & Fried Egg Breakfast Platter",
    "description": "Six chicken cocktail sausages sautéed with rosemary and garlic, served with a sunny fried egg and toast.",
    "carbs": "21",
    "protein": "29",
    "calories": 200,
    "price": 230,
    "category": "All-Day Breakfast"
  },
  {
    "name": "Classic Fluffy Maple Pancakes",
    "description": "Fluffy golden pancakes drizzled with warm maple syrup and a dollop of melted butter.",
    "carbs": "44",
    "protein": "4",
    "calories": null,
    "price": 140,
    "category": "All-Day Breakfast"
  },
  {
    "name": "Nutella French Toast",
    "description": "Warm, golden toast generously spread with rich Nutella hazelnut chocolate.",
    "carbs": "58",
    "protein": "7",
    "calories": null,
    "price": 270,
    "category": "All-Day Breakfast"
  },
  {
    "name": "Classic Continental Folded Omelette",
    "description": "Fluffy two-egg continental omelette prepared with fresh cream and cracked pepper, served with buttered toast.",
    "carbs": "16",
    "protein": "15",
    "calories": null,
    "price": 100,
    "category": "All-Day Breakfast"
  },
  {
    "name": "Loaded Cheesy Herb Omelette",
    "description": "Fluffy two-egg omelette loaded with melted mozzarella and cheddar cheese, seasoned with fragrant oregano.",
    "carbs": "17",
    "protein": "24",
    "calories": 164,
    "price": 220,
    "category": "All-Day Breakfast"
  },
  {
    "name": "Signature English Breakfast Platter",
    "description": "Hearty breakfast platter featuring hash browns, eggs, sausages, bacon, fresh seasonal fruits, butter, and toast.",
    "carbs": "41",
    "protein": "25",
    "calories": 264,
    "price": 249,
    "category": "All-Day Breakfast"
  },
  {
    "name": "Fresh Continental Garden Salad",
    "description": "Crisp medley of apple, pineapple, orange, and fresh tomatoes tossed with celery in a light creamy dressing.",
    "carbs": "25",
    "protein": "2",
    "calories": 108,
    "price": 250,
    "category": "Fresh Salads"
  },
  {
    "name": "Classic Veg Caesar Salad",
    "description": "Fresh crunchy lettuce, cucumber, and cherry tomatoes tossed in creamy Caesar dressing with parmesan and croutons.",
    "carbs": "31",
    "protein": "10",
    "calories": 164,
    "price": 250,
    "category": "Fresh Salads"
  },
  {
    "name": "Grilled Chicken Caesar Salad",
    "description": "Tender grilled chicken breast over crisp greens and cherry tomatoes, finished with Caesar dressing and parmesan.",
    "carbs": "31",
    "protein": "41",
    "calories": 288,
    "price": 300,
    "category": "Fresh Salads"
  },
  {
    "name": "Crunchy Apple Walnut Veg Salad",
    "description": "Crisp fresh apples, crunchy walnuts, and cashews tossed in a creamy honey-mustard and parmesan dressing.",
    "carbs": "48",
    "protein": "9",
    "calories": 228,
    "price": 300,
    "category": "Fresh Salads"
  },
  {
    "name": "Grilled Chicken Apple Walnut Salad",
    "description": "Grilled chicken breast layered with crisp apples, walnuts, cashews, and creamy honey-mustard dressing.",
    "carbs": "48",
    "protein": "40",
    "calories": 352,
    "price": 350,
    "category": "Fresh Salads"
  },
  {
    "name": "Classic Greek Feta Salad (Veg)",
    "description": "Colorful bell peppers, cucumber, cherry tomatoes, and crisp lettuce tossed with authentic feta cheese and herb vinaigrette.",
    "carbs": "17",
    "protein": "5",
    "calories": 88,
    "price": 350,
    "category": "Fresh Salads"
  },
  {
    "name": "Grilled Chicken Greek Feta Salad",
    "description": "Juicy grilled chicken breast with bell peppers, cucumber, tomatoes, and crumbled feta cheese in herb vinaigrette.",
    "carbs": "17",
    "protein": "36",
    "calories": 212,
    "price": 380,
    "category": "Fresh Salads"
  },
  {
    "name": "Cream of Broccoli & Almond Soup (Veg)",
    "description": "Velvety pureed broccoli soup enriched with toasted almonds, fresh cream, and a hint of garlic.",
    "carbs": "11",
    "protein": "7",
    "calories": 72,
    "price": 260,
    "category": "Gourmet Soups"
  },
  {
    "name": "Cream of Broccoli & Almond Chicken Soup",
    "description": "Velvety broccoli almond soup packed with tender shredded chicken breast and fresh cream.",
    "carbs": "11",
    "protein": "23",
    "calories": 136,
    "price": 280,
    "category": "Gourmet Soups"
  },
  // {
  //   "name": "Classic Cream of Mushroom Soup (Veg)",
  //   "description": "Rich, silky soup made with sautéed button mushrooms, aromatic garlic, and fresh cream.",
  //   "carbs": "6",
  //   "protein": "5",
  //   "price": 250,
  //   "category": "Gourmet Soups"
  // },
  // {
  //   "name": "Cream of Mushroom Chicken Soup",
  //   "description": "Hearty, velvety mushroom cream soup loaded with tender bites of chicken breast and herbs.",
  //   "carbs": "6",
  //   "protein": "21",
  //   "price": 280,
  //   "category": "Gourmet Soups"
  // },
  {
    "name": "Creamy Italian Herb Garlic Soup (Veg)",
    "description": "Comforting potato and roasted garlic cream soup infused with aromatic fresh Italian basil.",
    "carbs": "32",
    "protein": "7",
    "calories": null,
    "price": 240,
    "category": "Gourmet Soups"
  },
  {
    "name": "Creamy Italian Herb Garlic Chicken Soup",
    "description": "Rich Italian herb and roasted garlic soup blended with tender chicken breast pieces.",
    "carbs": "32",
    "protein": "23",
    "calories": 220,
    "price": 280,
    "category": "Gourmet Soups"
  },
  {
    "name": "Creamy White Sauce Alfredo Penne (Veg)",
    "description": "Penne pasta smothered in a rich, buttery garlic parmesan cream sauce, served with garlic toast.",
    "carbs": "93",
    "protein": "31",
    "calories": 496,
    "price": 380,
    "category": "Pasta Specialties"
  },
  {
    "name": "Creamy White Sauce Alfredo Chicken Penne",
    "description": "Penne tossed with tender grilled chicken in an indulgent garlic herb alfredo cream sauce.",
    "carbs": "93",
    "protein": "62",
    "calories": 620,
    "price": 400,
    "category": "Pasta Specialties"
  },
  {
    "name": "Classic Garlic & Olive Oil Spaghetti (Veg)",
    "description": "Al dente spaghetti tossed in extra virgin olive oil with minced garlic, chilli flakes, olives, and herbs.",
    "carbs": "86",
    "protein": "19",
    "calories": 420,
    "price": 330,
    "category": "Pasta Specialties"
  },
  {
    "name": "Garlic & Olive Oil Chicken Spaghetti",
    "description": "Classic aglio e olio spaghetti topped with grilled chicken, sliced olives, and aged parmesan.",
    "carbs": "86",
    "protein": "50",
    "calories": 544,
    "price": 360,
    "category": "Pasta Specialties"
  },
  {
    "name": "Creamy Basil Pesto Pasta (Veg)",
    "description": "Spaghetti tossed in fragrant homemade basil pesto sauce enriched with cream and parmesan.",
    "carbs": "94",
    "protein": "31",
    "calories": 496,
    "price": 320,
    "category": "Pasta Specialties"
  },
  {
    "name": "Creamy Basil Pesto Chicken Pasta",
    "description": "Tender chicken tossed with spaghetti in a lush, creamy basil pesto sauce with parmesan.",
    "carbs": "94",
    "protein": "62",
    "calories": 620,
    "price": 380,
    "category": "Pasta Specialties"
  },
  {
    "name": "Crispy Chicken Zinger Wrap",
    "description": "Crispy fried chicken strips wrapped in a soft tortilla with spicy jalapeños, cheese, and garlic mayo.",
    "carbs": "39",
    "protein": "41",
    "calories": 320,
    "price": 320,
    "category": "Wraps & Rolls"
  },
  {
    "name": "Spicy Grilled Chicken Loaded Wrap",
    "description": "Tortilla packed with seasoned chicken, crunchy peppers, onions, melted cheese, and sriracha mayo.",
    "carbs": "39",
    "protein": "41",
    "calories": 320,
    "price": 320,
    "category": "Wraps & Rolls"
  },
  {
    "name": "Classic Egg & Cheese Toast Sandwich",
    "description": "Toasted sandwich stuffed with fluffy eggs, sliced cheddar cheese, fresh veggies, and creamy mayo.",
    "carbs": "35",
    "protein": "24",
    "calories": 236,
    "price": 250,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Grilled Chicken & Cheese Sandwich",
    "description": "Golden grilled sandwich filled with seasoned chicken breast, crisp bell peppers, and melted cheese.",
    "carbs": "35",
    "protein": "42",
    "calories": 308,
    "price": 280,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Double Decker Chicken Club Sandwich",
    "description": "Triple-layer club sandwich stacked with juicy chicken breast, fried egg, fresh vegetables, and cheese.",
    "carbs": "49",
    "protein": "51",
    "calories": 400,
    "price": 380,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Sweet Corn & Mozzarella Cheese Sandwich",
    "description": "Crisp toasted bread bursting with sweet corn, gooey mozzarella, herbs, and zesty seasoning.",
    "carbs": "40",
    "protein": "17",
    "calories": 228,
    "price": 250,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Creamy Cheesy Mushroom Sandwich",
    "description": "Sautéed garlic mushrooms layered with gooey melted mozzarella and cheddar between toasted bread.",
    "carbs": "50",
    "protein": "20",
    "calories": 280,
    "price": 250,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Cheesy Grilled Mushroom Veg Burger",
    "description": "Savory mushroom and potato patty topped with melted cheese, crisp veggies, and special burger sauce.",
    "carbs": "68",
    "protein": "14",
    "calories": 328,
    "price": 290,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Crispy Fish Fillet & Cheese Burger",
    "description": "Golden crumbed basa fish fillet with melted cheese, lettuce, tomato, and tangy sauce on a toasted bun.",
    "carbs": "113",
    "protein": "57",
    "calories": 680,
    "price": 280,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Crispy Fried Chicken Burger",
    "description": "Crunchy, juicy fried chicken breast patty layered with melted cheese, fresh veggies, and spicy mayo.",
    "carbs": "112",
    "protein": "51",
    "calories": 652,
    "price": 320,
    "category": "Sandwiches & Burgers"
  },
  {
    "name": "Double Patty Crispy Chicken Burger",
    "description": "Two succulent chicken patties stacked with double cheese, crisp lettuce, tomato, and signature sauce.",
    "carbs": "38",
    "protein": "77",
    "calories": 460,
    "price": 380,
    "category": "Sandwiches & Burgers"
  },
  // {
  //   "name": "Classic Maple Butter Belgian Waffle",
  //   "description": "Freshly baked golden Belgian waffle drizzled with warm maple syrup and melted butter.",
  //   "carbs": "57",
  //   "protein": "6",
  //   "price": 190,
  //   "category": "Waffles & Pancakes"
  // },
  // {
  //   "name": "Honey Glazed Butter Belgian Waffle",
  //   "description": "Crispy golden Belgian waffle generously drizzled with pure honey and melted butter.",
  //   "carbs": "65",
  //   "protein": "6",
  //   "price": 150,
  //   "category": "Waffles & Pancakes"
  // },
  {
    "name": "Snickers Caramel Crunch Waffle",
    "description": "Crispy waffle topped with crushed Snickers, melted milk chocolate, caramel syrup, and cocoa dusting.",
    "carbs": "119",
    "protein": "16",
    "calories": 540,
    "price": 250,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "KitKat Crisp Chocolate Waffle",
    "description": "Fresh Belgian waffle layered with crispy KitKat bites, rich chocolate fudge, and cocoa powder.",
    "carbs": "109",
    "protein": "14",
    "calories": 492,
    "price": 250,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Roasted Cashew & Nutella Waffle",
    "description": "Belgian waffle smothered with creamy Nutella, crunchy roasted cashews, and maple syrup.",
    "carbs": "101",
    "protein": "16",
    "calories": 468,
    "price": 280,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Dark & White Fantasy Chocolate Waffle",
    "description": "Fresh waffle loaded with a swirl of rich dark and white melted chocolates and duo chocolate chips.",
    "carbs": "111",
    "protein": "13",
    "calories": 496,
    "price": 240,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Crunchy Oreo & Nutella Waffle",
    "description": "Crispy waffle topped with crushed Oreo biscuits, generous swirls of Nutella, and maple drizzle.",
    "carbs": "123",
    "protein": "14",
    "calories": 548,
    "price": 280,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Strawberry Snow Waffle",
    "description": "Crispy waffle garnished with fresh strawberries, cream cheese spread, white chocolate, and strawberry syrup.",
    "carbs": "110",
    "protein": "10",
    "calories": 480,
    "price": 240,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Fresh Strawberry & Nutella Waffle",
    "description": "Sweet fresh strawberries paired with decadent Nutella spread and strawberry drizzle on a hot waffle.",
    "carbs": "121",
    "protein": "11",
    "calories": null,
    "price": 280,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Triple Loaded Chocolate Waffle",
    "description": "Decadent waffle loaded with milk, dark, and white melted chocolate, chocolate chips, and syrup.",
    "carbs": "134",
    "protein": "16",
    "calories": 600,
    "price": 290,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Ferrero Rocher Deluxe Waffle",
    "description": "Premium waffle crowned with Ferrero Rocher pralines, rich Nutella, caramel, and chocolate drizzle.",
    "carbs": "124",
    "protein": "17",
    "calories": 564,
    "price": 290,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Overloaded Nutella Delight Waffle",
    "description": "An overloaded feast of pure Nutella spread generously across a warm, crispy Belgian waffle.",
    "carbs": "97",
    "protein": "13",
    "calories": 440,
    "price": 290,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Chocolate Marble Fluffy Pancakes",
    "description": "Fluffy pancakes marbled with melted dark and white chocolate, choco chips, and maple syrup.",
    "carbs": "101",
    "protein": "10",
    "calories": 444,
    "price": 220,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Rich Nutella Fluffy Pancakes",
    "description": "Warm, fluffy pancakes lavishly smothered in creamy Nutella spread and maple drizzle.",
    "carbs": "95",
    "protein": "10",
    "calories": 420,
    "price": 250,
    "category": "Waffles & Pancakes"
  },
  {
    "name": "Classic Chilled Cold Coffee",
    "description": "Classic blended iced coffee made with rich milk, robust coffee extract, and a touch of caramel.",
    "carbs": "31",
    "protein": "5",
    "calories": 144,
    "price": 190,
    "category": "Coffee & Cold Coffee"
  },
  {
    "name": "Choco Chip Ice Cream Cold Coffee",
    "description": "Rich cold coffee crowned with a creamy vanilla ice cream scoop and crunchy chocolate chips.",
    "carbs": "46",
    "protein": "7",
    "calories": 212,
    "price": 250,
    "category": "Coffee & Cold Coffee"
  },
  {
    "name": "Fresh Chilled Watermelon Juice",
    "description": "100% freshly pressed hydrating watermelon juice served crisp and chilled without additives.",
    "carbs": "30",
    "protein": "2",
    "calories": 128,
    "price": 140,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Fresh Squeezed Orange Juice",
    "description": "Pure, fresh-squeezed citrus orange juice loaded with vitamin C and refreshing flavor.",
    "carbs": "29",
    "protein": "2",
    "calories": 124,
    "price": 210,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Fresh Sweet Pineapple Juice",
    "description": "Freshly pressed tropical pineapple juice bursting with natural sweet and tangy goodness.",
    "carbs": "33",
    "protein": "1",
    "calories": 136,
    "price": 180,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Sunburst Mint Cooler",
    "description": "Refreshing fizzy blend of fresh garden mint, zesty lime juice, and chilled sparkling soda.",
    "carbs": "31",
    "protein": "0",
    "calories": 124,
    "price": 230,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Sparkling Strawberry Mint Mojito",
    "description": "Sparkling cooler featuring ripe strawberry syrup, crushed mint leaves, and fresh lime in soda.",
    "carbs": "39",
    "protein": "0",
    "calories": 156,
    "price": 250,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Exotic Passion Fruit Mint Mojito",
    "description": "Tangy tropical passion fruit syrup paired with fresh mint leaves, lime wedges, and bubbly soda.",
    "carbs": "39",
    "protein": "0",
    "calories": 156,
    "price": 250,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Crisp Green Apple Mint Mojito",
    "description": "Crisp green apple cooler muddled with fresh mint, lime, and effervescent sparkling soda.",
    "carbs": "39",
    "protein": "0",
    "calories": 156,
    "price": 250,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Chilled Peach Black Iced Tea",
    "description": "Chilled freshly brewed black tea infused with sweet peach essence and served over ice.",
    "carbs": "22",
    "protein": "0",
    "calories": 88,
    "price": 190,
    "category": "Fresh Juices & Coolers"
  },
  {
    "name": "Classic Creamy Vanilla Milkshake",
    "description": "Classic thick and creamy milkshake blended with velvety vanilla ice cream and caramel.",
    "carbs": "59",
    "protein": "9",
    "calories": 272,
    "price": 190,
    "category": "Shakes"
  },
  {
    "name": "KitKat Crunchy Shake",
    "description": "Indulgent thick shake blended with crispy KitKat bars, vanilla ice cream, and chocolate sauce.",
    "carbs": "72",
    "protein": "10",
    "calories": 328,
    "price": 240,
    "category": "Shakes"
  },
  {
    "name": "Snickers Caramel Peanut Shake",
    "description": "Thick milkshake loaded with chunky Snickers, caramel syrup, roasted peanuts, and vanilla ice cream.",
    "carbs": "93",
    "protein": "14",
    "calories": 428,
    "price": 240,
    "category": "Shakes"
  },
  {
    "name": "Rich Hazelnut Velvet Milkshake",
    "description": "Creamy milkshake blended with decadent hazelnut spread, roasted peanuts, and rich chocolate fudge.",
    "carbs": "83",
    "protein": "14",
    "calories": 388,
    "price": 260,
    "category": "Shakes"
  },
  {
    "name": "Fresh Strawberry Shake",
    "description": "Thick, luscious milkshake crafted with sweet ripe strawberries and creamy vanilla ice cream.",
    "carbs": "54",
    "protein": "8",
    "calories": 248,
    "price": 210,
    "category": "Shakes"
  },
  {
    "name": "Oreo Cookies & Cream  Shake",
    "description": "Irresistible cookies-and-cream shake blended with crushed Oreos and rich vanilla ice cream.",
    "carbs": "81",
    "protein": "10",
    "calories": 364,
    "price": 210,
    "category": "Shakes"
  }
];