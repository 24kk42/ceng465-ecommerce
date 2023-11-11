// Fitness & Wellness category data
const fitnessWellnessCategoryId = ObjectId("654d253766a50434894b971a");

// Products for Fitness & Wellness
const fitnessWellnessProductsData = [
  {
    "name": "Home Gym Essentials Set",
    "description": "Complete set of essentials for your home gym.",
    "price": 299.99,
    "currency": "USD",
    "stock_quantity": 20,
    "manufacturer": "FitTech",
    "created_at": new Date(),
    "category_id": fitnessWellnessCategoryId,
  },
  {
    "name": "Yoga Mat and Accessories Bundle",
    "description": "Yoga mat and accessories for a fulfilling yoga practice.",
    "price": 49.99,
    "currency": "USD",
    "stock_quantity": 15,
    "manufacturer": "YogaEssentials",
    "created_at": new Date(),
    "category_id": fitnessWellnessCategoryId,
  },
  {
    "name": "Smart Fitness Tracker",
    "description": "Smart fitness tracker to monitor your workouts and health.",
    "price": 79.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "HealthTech",
    "created_at": new Date(),
    "category_id": fitnessWellnessCategoryId,
  },
  {
    "name": "Nutrition Shake Blender",
    "description": "Blender for preparing nutritious shakes and smoothies.",
    "price": 39.99,
    "currency": "USD",
    "stock_quantity": 18,
    "manufacturer": "NutriBlend",
    "created_at": new Date(),
    "category_id": fitnessWellnessCategoryId,
  },
  {
    "name": "Dumbbell Set with Rack",
    "description": "Dumbbell set with a convenient rack for strength training.",
    "price": 129.99,
    "currency": "USD",
    "stock_quantity": 22,
    "manufacturer": "StrengthMaster",
    "created_at": new Date(),
    "category_id": fitnessWellnessCategoryId,
  },
];

db.products.insertMany(fitnessWellnessProductsData);

const totalFitnessWellnessProductCount = fitnessWellnessProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: fitnessWellnessCategoryId },
  { $set: { productCount: totalFitnessWellnessProductCount } }
);
