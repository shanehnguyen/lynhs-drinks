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
      "Our #1 seller. Bold-brewed Thai tea, sweetened and finished with milk for that unmistakable orange-hued classic.",
    caffeine: "Caffeinated",
    bestFor: "Guests who want the crowd favorite",
    servingStyle: "Iced",
  },
  {
    slug: "jasmine-milk-tea",
    name: "Jasmine Milk Tea",
    category: "Milk Tea",
    img: "/shop/jasmine-milk-tea.png",
    tastesLike: ["Floral", "Light", "Creamy"],
    description:
      "Fragrant jasmine green tea brewed fresh and rounded out with milk — lighter and more floral than a classic milk tea.",
    caffeine: "Caffeinated",
    bestFor: "Daytime events & lighter palates",
    servingStyle: "Iced",
  },
  {
    slug: "strawberry-milk-tea",
    name: "Strawberry Milk Tea",
    category: "Milk Tea",
    img: "/shop/strawberry-milk-tea.png",
    tastesLike: ["Fruity", "Sweet", "Creamy"],
    description:
      "Real strawberry blended into a creamy milk tea base for a dessert-like sipper guests keep coming back for.",
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
    description: "Sweet mango puree swirled into classic milk tea for a bright, tropical twist.",
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
    description: "Nutty, earthy taro blended into a silky purple milk tea — a boba-shop favorite.",
    caffeine: "Caffeinated",
    bestFor: "First-timers curious about taro",
    servingStyle: "Iced",
  },
  {
    slug: "brown-sugar-milk-tea",
    name: "Brown Sugar Milk Tea",
    category: "Milk Tea",
    img: "/shop/brown-sugar-milk-tea.png",
    tastesLike: ["Caramelized", "Rich", "Chewy Boba"],
    description:
      "Hand-stirred brown sugar syrup layered through fresh milk tea, always served with chewy boba pearls.",
    caffeine: "Caffeinated",
    bestFor: "Guests who want the full boba experience",
    servingStyle: "Iced",
  },
  {
    slug: "green-thai-tea",
    name: "Green Thai Tea",
    category: "Milk Tea",
    img: "/shop/thai-tea.png",
    tastesLike: ["Floral", "Light", "Creamy"],
    description: "A lighter, more floral take on the Thai tea classic, brewed from green tea leaves.",
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
      "Our #1 fruit tea. Passion fruit, mango, and pineapple layered over fresh-brewed black tea.",
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
    description: "Sweet-and-tart tamarind served over ice — a nostalgic favorite at every festival.",
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
    description: "Bright, tangy passion fruit layered over lightly brewed green tea.",
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
    description: "Delicate lychee paired with a floral green tea base — light and fragrant.",
    caffeine: "Caffeinated",
    bestFor: "Elegant, daytime affairs",
    servingStyle: "Iced",
  },
  {
    slug: "mango-green-tea",
    name: "Mango Green Tea",
    category: "Fruit Tea",
    img: "/shop/mango-green-tea.png",
    tastesLike: ["Ripe Mango", "Fresh", "Light"],
    description: "Ripe mango puree over fresh green tea for a clean, fruit-forward sipper.",
    caffeine: "Caffeinated",
    bestFor: "Family-friendly events",
    servingStyle: "Iced",
  },
  {
    slug: "strawberry-milk",
    name: "Strawberry Milk",
    category: "Fruit Tea",
    img: "/shop/strawberry-milk.png",
    tastesLike: ["Fruity", "Sweet", "Creamy"],
    description: "Fresh strawberry blended with milk — no tea, just a sweet, creamy classic kids love.",
    caffeine: "Caffeine-Free",
    bestFor: "School events & younger guests",
    servingStyle: "Iced",
  },
  {
    slug: "peach-green-tea",
    name: "Peach Green Tea",
    category: "Fruit Tea",
    img: "/shop/peach-green-tea.png",
    tastesLike: ["Juicy Peach", "Light", "Refreshing"],
    description: "Juicy peach over lightly brewed green tea, easygoing and crowd-pleasing.",
    caffeine: "Caffeinated",
    bestFor: "Everyday catering menus",
    servingStyle: "Iced",
  },
  {
    slug: "guava-juice",
    name: "Guava Juice",
    category: "Fruit Tea",
    img: "/shop/guava-juice.png",
    tastesLike: ["Tropical", "Sweet", "Fruity"],
    description: "Fresh, sweet guava juice served ice-cold — simple and refreshing.",
    caffeine: "Caffeine-Free",
    bestFor: "Kid-friendly menus",
    servingStyle: "Iced",
  },
  {
    slug: "pomegranate-tea",
    name: "Pomegranate Tea",
    category: "Fruit Tea",
    img: "/shop/pomegranate-tea.png",
    tastesLike: ["Tart", "Bold", "Fruity"],
    description: "Bold pomegranate layered over black tea for a deep, tart-sweet finish.",
    caffeine: "Caffeinated",
    bestFor: "Fall & winter events",
    servingStyle: "Iced",
  },
  {
    slug: "dragon-fruit-tea",
    name: "Dragon Fruit Tea",
    category: "Fruit Tea",
    img: "/shop/dragon-fruit-tea.png",
    tastesLike: ["Mild", "Sweet", "Vibrant"],
    description: "Vibrant dragon fruit blended into iced tea — as pretty as it is refreshing.",
    caffeine: "Caffeinated",
    bestFor: "Photo-worthy drink bars",
    servingStyle: "Iced",
  },
  {
    slug: "pineapple-tea",
    name: "Pineapple Tea",
    category: "Fruit Tea",
    img: "/shop/pineapple-tea.png",
    tastesLike: ["Tropical", "Bright", "Sweet"],
    description: "Bright pineapple over iced tea for a tropical, sunny-day favorite.",
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
      "Slow-dripped dark roast coffee finished with sweetened condensed milk — rich, bold, and unmistakably Vietnamese.",
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
      "A layered Thai dessert drink with jelly, fruit, and coconut milk — as much a treat as a drink.",
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
    description: "Salted preserved kumquat muddled into a tangy, citrus-forward cooler.",
    caffeine: "Caffeine-Free",
    bestFor: "Adventurous palates",
    servingStyle: "Iced",
  },
  {
    slug: "pandan-mungbean-milk",
    name: "Pandan Mungbean Milk",
    category: "Specialty",
    img: "/shop/pandan-mungbean-milk.png",
    tastesLike: ["Nutty", "Fragrant", "Creamy"],
    description: "Fragrant pandan blended with creamy mung bean — a traditional Vietnamese favorite.",
    caffeine: "Caffeine-Free",
    bestFor: "Cultural celebrations",
    servingStyle: "Iced",
  },
  {
    slug: "herbal-drink",
    name: "Herbal Drink",
    category: "Specialty",
    img: "/shop/herbal-drink.png",
    tastesLike: ["Cooling", "Herbal", "Lightly Sweet"],
    description: "A traditional cooling herbal tea, lightly sweetened and served ice-cold.",
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
    description: "Grass jelly served dessert-style with a light sweet syrup — a festival staple.",
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
    description: "Dark roast coffee topped with a salted cream foam — bold with a savory-sweet finish.",
    caffeine: "Caffeinated",
    bestFor: "Coffee lovers looking for something new",
    servingStyle: "Iced",
  },
  {
    slug: "vietnamese-coconut-coffee",
    name: "Vietnamese Coconut Coffee",
    category: "Specialty",
    img: "/shop/vietnamese-coconut-coffee.png",
    tastesLike: ["Coconut", "Bold", "Creamy"],
    description: "Dark roast coffee blended with coconut cream into a frozen, dessert-like sipper.",
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
    description: "Classic chewy tapioca pearls, cooked fresh daily.",
  },
  {
    slug: "salted-cream",
    name: "Salted Cream",
    img: "/shop/salted-cream.png",
    description: "A whipped, lightly salted cream cap that floats on top.",
  },
  {
    slug: "egg-cream",
    name: "Egg Cream",
    img: "/shop/egg-cream.png",
    description: "A silky, egg-custard-style cream layer for extra richness.",
  },
  {
    slug: "cheese-foam",
    name: "Cheese Foam",
    img: "/shop/cheese-foam.png",
    description: "A savory-sweet whipped cream cheese foam cap.",
  },
  {
    slug: "coconut-cream",
    name: "Coconut Cream",
    img: "/shop/coconut-cream.png",
    description: "Rich coconut cream for a tropical finish.",
  },
  {
    slug: "matcha-foam",
    name: "Matcha Foam",
    img: "/shop/matcha-foam.png",
    description: "Earthy whipped matcha foam layered on top.",
  },
  {
    slug: "jelly",
    name: "Jelly",
    img: "/shop/jelly.png",
    description: "Soft, lightly sweet jelly cubes for extra texture.",
  },
];

export function getDrinkBySlug(slug: string) {
  return DRINKS.find((d) => d.slug === slug);
}

export function getRelatedDrinks(drink: ShopDrink, count = 3) {
  return DRINKS.filter((d) => d.category === drink.category && d.slug !== drink.slug).slice(0, count);
}
