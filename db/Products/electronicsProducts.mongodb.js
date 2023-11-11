// Electronics category data
const electronicsCategoryId = ObjectId("654d253766a50434894b9712");

// Products for Electronics
const electronicsProductsData = [
  {
    "name": "High-Performance Smartphone",
    "description": "The latest smartphone with cutting-edge features.",
    "price": 799.99,
    "currency": "USD",
    "stock_quantity": 30,
    "manufacturer": "TechMaster",
    "created_at": new Date(),
    "category_id": electronicsCategoryId,
  },
  {
    "name": "Ultra-Slim Laptop",
    "description": "Lightweight and powerful laptop for professionals.",
    "price": 1299.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "LaptopTech",
    "created_at": new Date(),
    "category_id": electronicsCategoryId,
  },
  {
    "name": "Smart TV 4K",
    "description": "Immersive 55-inch 4K Ultra HD Smart TV.",
    "price": 899.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "VisionTech",
    "created_at": new Date(),
    "category_id": electronicsCategoryId,
  },
  {
    "name": "Wireless Noise-Canceling Headphones",
    "description": "Experience superior sound quality with wireless convenience.",
    "price": 199.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "AudioMaster",
    "created_at": new Date(),
    "category_id": electronicsCategoryId,
  },
  {
    "name": "High-Resolution Camera",
    "description": "Capture every moment with a high-resolution camera.",
    "price": 599.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "CameraTech",
    "created_at": new Date(),
    "category_id": electronicsCategoryId,
  },
];

db.products.insertMany(electronicsProductsData);

const totalElectronicsProductCount = electronicsProductsData.reduce((total, product) => total + product.stock_quantity, 0);
db.categories.update({ _id: electronicsCategoryId }, { $set: { productCount: totalElectronicsProductCount } });