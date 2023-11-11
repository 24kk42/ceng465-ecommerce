// Kitchen Appliances category data
const kitchenAppliancesCategoryId = ObjectId("654d253766a50434894b9713");

// Products for Kitchen Appliances
const kitchenAppliancesProductsData = [
  {
    "name": "Multifunctional Blender",
    "description": "Powerful blender for smoothies, soups, and more.",
    "price": 89.99,
    "currency": "USD",
    "stock_quantity": 35,
    "manufacturer": "BlendMaster",
    "created_at": new Date(),
    "category_id": kitchenAppliancesCategoryId,
  },
  {
    "name": "Coffee Maker Deluxe",
    "description": "Advanced programmable coffee maker for your perfect brew.",
    "price": 79.99,
    "currency": "USD",
    "stock_quantity": 22,
    "manufacturer": "BrewTech",
    "created_at": new Date(),
    "category_id": kitchenAppliancesCategoryId,
  },
  {
    "name": "Air Fryer Pro",
    "description": "Healthier frying with the latest air frying technology.",
    "price": 129.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "KitchenTech",
    "created_at": new Date(),
    "category_id": kitchenAppliancesCategoryId,
  },
  {
    "name": "Smart Microwave Oven",
    "description": "Microwave oven with smart features for modern kitchens.",
    "price": 199.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "MicrowaveMaster",
    "created_at": new Date(),
    "category_id": kitchenAppliancesCategoryId,
  },
  {
    "name": "Digital Toaster",
    "description": "Efficient toaster with digital controls for your breakfast needs.",
    "price": 49.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "ToasterTech",
    "created_at": new Date(),
    "category_id": kitchenAppliancesCategoryId,
  },
];

db.products.insertMany(kitchenAppliancesProductsData);

const totalKitchenAppliancesProductCount = kitchenAppliancesProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: kitchenAppliancesCategoryId },
  { $set: { productCount: totalKitchenAppliancesProductCount } }
);
