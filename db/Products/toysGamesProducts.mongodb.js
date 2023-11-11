// Toys & Games category data
const toysGamesCategoryId = ObjectId("654d253766a50434894b971b");

// Products for Toys & Games
const toysGamesProductsData = [
  {
    "name": "Board Game Collection",
    "description": "Collection of classic board games for family fun.",
    "price": 34.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "FamilyFunGames",
    "created_at": new Date(),
    "category_id": toysGamesCategoryId,
  },
  {
    "name": "Educational Building Blocks",
    "description": "Educational building blocks for creative play and learning.",
    "price": 19.99,
    "currency": "USD",
    "stock_quantity": 30,
    "manufacturer": "SmartBlocks",
    "created_at": new Date(),
    "category_id": toysGamesCategoryId,
  },
  {
    "name": "Outdoor Sports Equipment Set",
    "description": "Set of outdoor sports equipment for active play.",
    "price": 59.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "ActivePlayTech",
    "created_at": new Date(),
    "category_id": toysGamesCategoryId,
  },
  {
    "name": "Plush Stuffed Animals Bundle",
    "description": "Bundle of adorable plush stuffed animals for cuddly companionship.",
    "price": 24.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "CuddlyCritters",
    "created_at": new Date(),
    "category_id": toysGamesCategoryId,
  },
  {
    "name": "Remote Control Car",
    "description": "Remote control car for exciting and remote adventures.",
    "price": 39.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "RCAdventure",
    "created_at": new Date(),
    "category_id": toysGamesCategoryId,
  },
];

db.products.insertMany(toysGamesProductsData);

const totalToysGamesProductCount = toysGamesProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: toysGamesCategoryId },
  { $set: { productCount: totalToysGamesProductCount } }
);
