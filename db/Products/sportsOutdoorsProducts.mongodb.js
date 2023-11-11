// Sports & Outdoors category data
const sportsOutdoorsCategoryId = ObjectId("654d253766a50434894b9714");

// Products for Sports & Outdoors
const sportsOutdoorsProductsData = [
  {
    "name": "High-Performance Running Shoes",
    "description": "Top-quality running shoes for athletes.",
    "price": 99.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "AthleticCo",
    "created_at": new Date(),
    "category_id": sportsOutdoorsCategoryId,
  },
  {
    "name": "Adjustable Dumbbell Set",
    "description": "Versatile dumbbell set for home workouts.",
    "price": 149.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "FitGear",
    "created_at": new Date(),
    "category_id": sportsOutdoorsCategoryId,
  },
  {
    "name": "Camping Gear Bundle",
    "description": "Complete set of camping gear for outdoor enthusiasts.",
    "price": 299.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "OutdoorMaster",
    "created_at": new Date(),
    "category_id": sportsOutdoorsCategoryId,
  },
  {
    "name": "Mountain Bike Pro",
    "description": "Professional-grade mountain bike for adventurous rides.",
    "price": 799.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "BikeTech",
    "created_at": new Date(),
    "category_id": sportsOutdoorsCategoryId,
  },
  {
    "name": "Waterproof Hiking Boots",
    "description": "Durable and waterproof hiking boots for challenging trails.",
    "price": 129.99,
    "currency": "USD",
    "stock_quantity": 22,
    "manufacturer": "HikeMaster",
    "created_at": new Date(),
    "category_id": sportsOutdoorsCategoryId,
  },
];

db.products.insertMany(sportsOutdoorsProductsData);

const totalSportsOutdoorsProductCount = sportsOutdoorsProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: sportsOutdoorsCategoryId },
  { $set: { productCount: totalSportsOutdoorsProductCount } }
);
