// Home Decor category data
const homeDecorCategoryId = ObjectId("654d253766a50434894b9719");

// Products for Home Decor
const homeDecorProductsData = [
  {
    "name": "Modern Wall Art Set",
    "description": "Contemporary wall art set for a stylish home decor.",
    "price": 49.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "ArtisticDesigns",
    "created_at": new Date(),
    "category_id": homeDecorCategoryId,
  },
  {
    "name": "Cozy Throw Pillows",
    "description": "Soft and cozy throw pillows for a comfortable living space.",
    "price": 29.99,
    "currency": "USD",
    "stock_quantity": 10,
    "manufacturer": "PillowCraft",
    "created_at": new Date(),
    "category_id": homeDecorCategoryId,
  },
  {
    "name": "Elegant Table Centerpiece",
    "description": "Elegant centerpiece for your dining or coffee table.",
    "price": 39.99,
    "currency": "USD",
    "stock_quantity": 12,
    "manufacturer": "EleganceCraft",
    "created_at": new Date(),
    "category_id": homeDecorCategoryId,
  },
  {
    "name": "LED String Lights",
    "description": "Decorative LED string lights to add ambiance to any room.",
    "price": 19.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "LightCraft",
    "created_at": new Date(),
    "category_id": homeDecorCategoryId,
  },
  {
    "name": "Sculpture Artwork",
    "description": "Artistic sculpture for a unique and creative home decor.",
    "price": 59.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "SculptureMasters",
    "created_at": new Date(),
    "category_id": homeDecorCategoryId,
  },
];

db.products.insertMany(homeDecorProductsData);

const totalHomeDecorProductCount = homeDecorProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: homeDecorCategoryId },
  { $set: { productCount: totalHomeDecorProductCount } }
);
