// Furniture category data
const furnitureCategoryId = ObjectId("654d253766a50434894b9715");

// Products for Furniture
const furnitureProductsData = [
  {
    "name": "Elegant Sofa Set",
    "description": "Comfortable and elegant sofa set for your living room.",
    "price": 799.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "ComfortLiving",
    "created_at": new Date(),
    "category_id": furnitureCategoryId,
  },
  {
    "name": "Modern Office Desk",
    "description": "Sleek and modern desk for your home office.",
    "price": 299.99,
    "currency": "USD",
    "stock_quantity": 10,
    "manufacturer": "OfficeStyle",
    "created_at": new Date(),
    "category_id": furnitureCategoryId,
  },
  {
    "name": "Dining Table Set",
    "description": "Stylish dining table set for family gatherings.",
    "price": 499.99,
    "currency": "USD",
    "stock_quantity": 12,
    "manufacturer": "DineMaster",
    "created_at": new Date(),
    "category_id": furnitureCategoryId,
  },
  {
    "name": "Cozy Bed Frame",
    "description": "Cozy bed frame for a good night's sleep.",
    "price": 699.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "SleepTech",
    "created_at": new Date(),
    "category_id": furnitureCategoryId,
  },
  {
    "name": "Bookshelf Classic",
    "description": "Classic bookshelf for organizing your favorite reads.",
    "price": 149.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "BookMaster",
    "created_at": new Date(),
    "category_id": furnitureCategoryId,
  },
];

db.products.insertMany(furnitureProductsData);

const totalFurnitureProductCount = furnitureProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: furnitureCategoryId },
  { $set: { productCount: totalFurnitureProductCount } }
);
