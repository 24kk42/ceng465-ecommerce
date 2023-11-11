// Beauty & Personal Care category data
const beautyPersonalCareCategoryId = ObjectId("654d253766a50434894b9717");

// Products for Beauty & Personal Care
const beautyPersonalCareProductsData = [
  {
    "name": "Skincare Essentials Set",
    "description": "Complete set of skincare essentials for a radiant complexion.",
    "price": 79.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "GlowingSkinCo",
    "created_at": new Date(),
    "category_id": beautyPersonalCareCategoryId,
  },
  {
    "name": "Hair Care Bundle",
    "description": "Bundle of high-quality products for healthy and beautiful hair.",
    "price": 59.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "HairCareMaster",
    "created_at": new Date(),
    "category_id": beautyPersonalCareCategoryId,
  },
  {
    "name": "Fragrance Collection",
    "description": "Collection of premium fragrances for a captivating scent.",
    "price": 89.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "ScentMasters",
    "created_at": new Date(),
    "category_id": beautyPersonalCareCategoryId,
  },
  {
    "name": "Makeup Essentials Kit",
    "description": "Essential makeup kit for a flawless and stylish look.",
    "price": 129.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "GlamourTech",
    "created_at": new Date(),
    "category_id": beautyPersonalCareCategoryId,
  },
  {
    "name": "Grooming Tool Set",
    "description": "Comprehensive set of grooming tools for personal care.",
    "price": 49.99,
    "currency": "USD",
    "stock_quantity": 22,
    "manufacturer": "GroomingMasters",
    "created_at": new Date(),
    "category_id": beautyPersonalCareCategoryId,
  },
];

db.products.insertMany(beautyPersonalCareProductsData);

const totalBeautyPersonalCareProductCount = beautyPersonalCareProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: beautyPersonalCareCategoryId },
  { $set: { productCount: totalBeautyPersonalCareProductCount } }
);
