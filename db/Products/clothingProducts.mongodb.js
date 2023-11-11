// Clothing category data
const clothingCategoryId = ObjectId("654d253766a50434894b9716");

// Products for Clothing
const clothingProductsData = [
  {
    "name": "Stylish Denim Jeans",
    "description": "Classic denim jeans for a fashionable look.",
    "price": 59.99,
    "currency": "USD",
    "stock_quantity": 30,
    "manufacturer": "FashionDenim",
    "created_at": new Date(),
    "category_id": clothingCategoryId,
  },
  {
    "name": "Elegant Evening Dress",
    "description": "Elegant dress for special evening occasions.",
    "price": 129.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "EveningElegance",
    "created_at": new Date(),
    "category_id": clothingCategoryId,
  },
  {
    "name": "Casual T-Shirt Collection",
    "description": "Comfortable and stylish t-shirts for casual wear.",
    "price": 29.99,
    "currency": "USD",
    "stock_quantity": 35,
    "manufacturer": "CasualWearCo",
    "created_at": new Date(),
    "category_id": clothingCategoryId,
  },
  {
    "name": "Sporty Hoodie",
    "description": "Sporty hoodie for a trendy and comfortable style.",
    "price": 49.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "SportStyle",
    "created_at": new Date(),
    "category_id": clothingCategoryId,
  },
  {
    "name": "Formal Suit Set",
    "description": "Formal suit set for a polished and professional look.",
    "price": 199.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "FormalWear",
    "created_at": new Date(),
    "category_id": clothingCategoryId,
  },
];

// Inserting Clothing products
db.products.insertMany(clothingProductsData);

// Updating Clothing category count
const totalClothingProductCount = clothingProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: clothingCategoryId },
  { $set: { productCount: totalClothingProductCount } }
);
