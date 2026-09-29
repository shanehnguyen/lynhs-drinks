export type Category = "Milk Tea" | "Fruit Tea" | "Specialty";

export type ShopDrink = {
  slug: string;
  name: string;
  category: Category;
  img?: string;
  tastesLike: string[];
  description: string;
  caffeine: "Caffeinated" | "Decaf" | "Caffeine-Free";
  bestFor: string;
  servingStyle: "Iced" | "Hot or Iced";
};

// Pricing is by the gallon (128 oz). Other specialty drinks are priced per event.
export const GALLON_OZ = 128;

export function gallonPrice(drink: ShopDrink): number | null {
  if (drink.name === "Vietnamese Coffee") return 40;
  if (drink.category === "Specialty") return null;
  if (drink.category === "Fruit Tea") return 25;
  if (/thai/i.test(drink.name)) return 25;
  return 20;
}

export function priceLabel(drink: ShopDrink): string {
  const price = gallonPrice(drink);
  return price === null ? "Price varies" : `$${price} / gallon`;
}

export type ShopTopping = {
  slug: string;
  name: string;
  img?: string;
  description: string;
};

export const DRINKS: ShopDrink[] = [
  {
    slug: "thai-milk-tea",
    name: "Thai Milk Tea",
    category: "Milk Tea",
    img: "/shop/thai-milk-tea.png",
    tastesLike: ["Bold", "Creamy", "Spiced"],
    description:
      "Our #1 seller. Strong Thai tea with sugar and milk. It is the classic orange drink.",
    caffeine: "Caffeinated",
    bestFor: "Guests who want the top seller",
    servingStyle: "Iced",
  },
  {
    slug: "jasmine-milk-tea",
    name: "Jasmine Milk Tea",
    category: "Milk Tea",
    img: "/shop/jasmine-milk-tea.png",
    tastesLike: ["Floral", "Light", "Creamy"],
    description:
      "Jasmine green tea made fresh, with milk. It is lighter and more flowery than a classic milk tea.",
    caffeine: "Caffeinated",
    bestFor: "Daytime events & lighter tastes",
    servingStyle: "Iced",
  },
  {
    slug: "strawberry-milk-tea",
    name: "Strawberry Milk Tea",
    category: "Milk Tea",
    img: "/shop/strawberry-milk-tea.png",
    tastesLike: ["Fruity", "Sweet", "Creamy"],
    description:
      "Real strawberry mixed into a creamy milk tea. It tastes like dessert, and guests come back for more.",
    caffeine: "Caffeinated",
    bestFor: "Birthday parties & school events",
    servingStyle: "Iced",
  },
  {
    slug: "mango-milk-tea",
    name: "Mango Milk Tea",
    category: "Milk Tea",
    img: "/shop/mango-milk-tea.png",
    tastesLike: ["Tropical", "Sweet", "Creamy"],
    description: "Sweet mango puree mixed into classic milk tea. Bright and tropical.",
    caffeine: "Caffeinated",
    bestFor: "Summer events",
    servingStyle: "Iced",
  },
  {
    slug: "taro-milk-tea",
    name: "Taro Milk Tea",
    category: "Milk Tea",
    img: "/shop/taro-milk-tea.png",
    tastesLike: ["Nutty", "Earthy", "Silky"],
    description: "Nutty, earthy taro mixed into a smooth purple milk tea. A boba shop favorite.",
    caffeine: "Caffeinated",
    bestFor: "Guests trying taro for the first time",
    servingStyle: "Iced",
  },
  {
    slug: "brown-sugar-milk-tea",
    name: "Brown Sugar Milk Tea",
    category: "Milk Tea",
    img: "/shop/brown-sugar-milk-tea.png",
    tastesLike: ["Caramel", "Rich", "Chewy Boba"],
    description:
      "Brown sugar syrup stirred by hand into fresh milk tea. Always served with chewy boba.",
    caffeine: "Caffeinated",
    bestFor: "Guests who love boba",
    servingStyle: "Iced",
  },
  {
    slug: "green-thai-tea",
    name: "Green Thai Tea",
    category: "Milk Tea",
    img: "/shop/thai-tea.png",
    tastesLike: ["Floral", "Light", "Creamy"],
    description: "A lighter, more flowery Thai tea, made from green tea leaves.",
    caffeine: "Caffeinated",
    bestFor: "Guests who love Thai tea but want it lighter",
    servingStyle: "Iced",
  },
  {
    slug: "tropical-fruit-tea",
    name: "Tropical Fruit Tea",
    category: "Fruit Tea",
    img: "/shop/tropical-fruit-tea.png",
    tastesLike: ["Passion Fruit", "Mango", "Pineapple"],
    description:
      "Our #1 fruit tea. Passion fruit, mango and pineapple over fresh black tea.",
    caffeine: "Caffeinated",
    bestFor: "Warm-weather events",
    servingStyle: "Iced",
  },
  {
    slug: "iced-tamarind",
    name: "Iced Tamarind",
    category: "Fruit Tea",
    img: "/shop/iced-tamarind.png",
    tastesLike: ["Sweet", "Tart", "Refreshing"],
    description: "Sweet and sour tamarind over ice. An old favorite at every festival.",
    caffeine: "Caffeine-Free",
    bestFor: "Church festivals & cultural events",
    servingStyle: "Iced",
  },
  {
    slug: "passion-fruit-tea",
    name: "Passion Fruit Tea",
    category: "Fruit Tea",
    img: "/shop/passion-fruit-tea.png",
    tastesLike: ["Bright", "Tangy", "Floral"],
    description: "Bright, tangy passion fruit over light green tea.",
    caffeine: "Caffeinated",
    bestFor: "Weddings & bridal showers",
    servingStyle: "Iced",
  },
  {
    slug: "lychee-tea",
    name: "Lychee Tea",
    category: "Fruit Tea",
    img: "/shop/lychee-tea.png",
    tastesLike: ["Delicate", "Floral", "Sweet"],
    description: "Lychee over a flowery green tea. Light and sweet.",
    caffeine: "Caffeinated",
    bestFor: "Fancy daytime events",
    servingStyle: "Iced",
  },
  {
    slug: "mango-green-tea",
    name: "Mango Green Tea",
    category: "Fruit Tea",
    img: "/shop/mango-green-tea.png",
    tastesLike: ["Ripe Mango", "Fresh", "Light"],
    description: "Ripe mango puree over fresh green tea. Clean and fruity.",
    caffeine: "Caffeinated",
    bestFor: "Family events",
    servingStyle: "Iced",
  },
  {
    slug: "strawberry-milk",
    name: "Strawberry Milk",
    category: "Fruit Tea",
    img: "/shop/strawberry-milk.png",
    tastesLike: ["Fruity", "Sweet", "Creamy"],
    description: "Fresh strawberry mixed with milk, with no tea. Sweet and creamy, and kids love it.",
    caffeine: "Caffeine-Free",
    bestFor: "School events & kids",
    servingStyle: "Iced",
  },
  {
    slug: "peach-green-tea",
    name: "Peach Green Tea",
    category: "Fruit Tea",
    img: "/shop/peach-green-tea.png",
    tastesLike: ["Juicy Peach", "Light", "Refreshing"],
    description: "Juicy peach over light green tea. A safe pick for any crowd.",
    caffeine: "Caffeinated",
    bestFor: "Any event",
    servingStyle: "Iced",
  },
  {
    slug: "guava-juice",
    name: "Guava Juice",
    category: "Fruit Tea",
    img: "/shop/guava-juice.png",
    tastesLike: ["Tropical", "Sweet", "Fruity"],
    description: "Fresh, sweet guava juice, served ice cold.",
    caffeine: "Caffeine-Free",
    bestFor: "Menus for kids",
    servingStyle: "Iced",
  },
  {
    slug: "pomegranate-tea",
    name: "Pomegranate Tea",
    category: "Fruit Tea",
    img: "/shop/pomegranate-tea.png",
    tastesLike: ["Tart", "Bold", "Fruity"],
    description: "Bold pomegranate over black tea. Tart and sweet.",
    caffeine: "Caffeinated",
    bestFor: "Fall & winter events",
    servingStyle: "Iced",
  },
  {
    slug: "dragon-fruit-tea",
    name: "Dragon Fruit Tea",
    category: "Fruit Tea",
    img: "/shop/dragon-fruit-tea.png",
    tastesLike: ["Mild", "Sweet", "Bright"],
    description: "Dragon fruit mixed into iced tea. It looks as good as it tastes.",
    caffeine: "Caffeinated",
    bestFor: "Events with lots of photos",
    servingStyle: "Iced",
  },
  {
    slug: "pineapple-tea",
    name: "Pineapple Tea",
    category: "Fruit Tea",
    img: "/shop/pineapple-tea.png",
    tastesLike: ["Tropical", "Bright", "Sweet"],
    description: "Bright pineapple over iced tea. A sunny day favorite.",
    caffeine: "Caffeinated",
    bestFor: "Summer weddings",
    servingStyle: "Iced",
  },
  {
    slug: "vietnamese-coffee",
    name: "Vietnamese Coffee",
    category: "Specialty",
    img: "/shop/vietnamese-coffee.png",
    tastesLike: ["Bold", "Dark Roast", "Sweet"],
    description:
      "Dark roast coffee, dripped slowly, with sweetened condensed milk. Rich, strong and very Vietnamese.",
    caffeine: "Caffeinated",
    bestFor: "Morning & brunch events",
    servingStyle: "Hot or Iced",
  },
  {
    slug: "che-thai",
    name: "Che Thai",
    category: "Specialty",
    img: "/shop/che-thai.png",
    tastesLike: ["Layered", "Coconut", "Jelly"],
    description:
      "A Thai dessert drink in layers of jelly, fruit and coconut milk. Part drink, part treat.",
    caffeine: "Caffeine-Free",
    bestFor: "Dessert tables & festivals",
    servingStyle: "Iced",
  },
  {
    slug: "salted-kumquat-juice",
    name: "Salted Kumquat Juice",
    category: "Specialty",
    img: "/shop/salted-kumquat-juice.png",
    tastesLike: ["Tangy", "Salty-Sweet", "Citrus"],
    description: "Salted, preserved kumquat crushed into a tangy citrus drink.",
    caffeine: "Caffeine-Free",
    bestFor: "Guests who like to try new things",
    servingStyle: "Iced",
  },
  {
    slug: "pandan-mungbean-milk",
    name: "Pandan Mungbean Milk",
    category: "Specialty",
    img: "/shop/pandan-mungbean-milk.png",
    tastesLike: ["Nutty", "Fragrant", "Creamy"],
    description: "Pandan mixed with creamy mung bean. An old Vietnamese favorite.",
    caffeine: "Caffeine-Free",
    bestFor: "Cultural events",
    servingStyle: "Iced",
  },
  {
    slug: "herbal-drink",
    name: "Herbal Drink",
    category: "Specialty",
    img: "/shop/herbal-drink.png",
    tastesLike: ["Cooling", "Herbal", "Lightly Sweet"],
    description: "A classic cooling herbal tea, lightly sweet and served ice cold.",
    caffeine: "Caffeine-Free",
    bestFor: "Hot-weather events",
    servingStyle: "Iced",
  },
  {
    slug: "jelly-grass-desserts",
    name: "Jelly Grass Desserts",
    category: "Specialty",
    img: "/shop/jelly-grass-desserts.png",
    tastesLike: ["Herbal", "Jelly", "Lightly Sweet"],
    description: "Grass jelly with a light, sweet syrup. A festival favorite.",
    caffeine: "Caffeine-Free",
    bestFor: "Dessert tables",
    servingStyle: "Iced",
  },
  {
    slug: "viet-salted-coffee",
    name: "Viet Salted Coffee",
    category: "Specialty",
    img: "/shop/viet-salted-coffee.png",
    tastesLike: ["Bold", "Salty-Sweet", "Creamy"],
    description: "Dark roast coffee with salted cream foam on top. Strong, salty and sweet.",
    caffeine: "Caffeinated",
    bestFor: "Coffee lovers who want something new",
    servingStyle: "Iced",
  },
  {
    slug: "vietnamese-coconut-coffee",
    name: "Vietnamese Coconut Coffee",
    category: "Specialty",
    img: "/shop/vietnamese-coconut-coffee.png",
    tastesLike: ["Coconut", "Bold", "Creamy"],
    description: "Dark roast coffee blended with coconut cream into a frozen drink. It tastes like dessert.",
    caffeine: "Caffeinated",
    bestFor: "Hot summer afternoons",
    servingStyle: "Iced",
  },
];

export const TOPPINGS: ShopTopping[] = [
  {
    slug: "boba",
    name: "Boba",
    img: "/shop/boba.png",
    description: "Chewy tapioca pearls, cooked fresh each day.",
  },
  {
    slug: "salted-cream",
    name: "Salted Cream",
    img: "/shop/salted-cream.png",
    description: "Whipped cream with a little salt. It floats on top.",
  },
  {
    slug: "egg-cream",
    name: "Egg Cream",
    img: "/shop/egg-cream.png",
    description: "A smooth, rich cream layer that tastes like egg custard.",
  },
  {
    slug: "cheese-foam",
    name: "Cheese Foam",
    img: "/shop/cheese-foam.png",
    description: "Whipped cream cheese foam on top. Sweet and a little salty.",
  },
  {
    slug: "coconut-cream",
    name: "Coconut Cream",
    img: "/shop/coconut-cream.png",
    description: "Rich coconut cream on top.",
  },
  {
    slug: "matcha-foam",
    name: "Matcha Foam",
    img: "/shop/matcha-foam.png",
    description: "Whipped matcha foam on top, with an earthy taste.",
  },
  {
    slug: "jelly",
    name: "Jelly",
    img: "/shop/jelly.png",
    description: "Soft, lightly sweet jelly cubes to chew.",
  },
];

export function getDrinkBySlug(slug: string) {
  return DRINKS.find((d) => d.slug === slug);
}

export function getRelatedDrinks(drink: ShopDrink, count = 3) {
  return DRINKS.filter((d) => d.category === drink.category && d.slug !== drink.slug).slice(0, count);
}
