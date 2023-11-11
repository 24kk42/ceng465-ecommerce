// Books & Literature category data
const booksLiteratureCategoryId = ObjectId("654d253766a50434894b9718");

// Products for Books & Literature
const booksLiteratureProductsData = [
  {
    "name": "Bestseller Mystery Novel",
    "description": "Gripping mystery novel that keeps you on the edge of your seat.",
    "price": 19.99,
    "currency": "USD",
    "stock_quantity": 30,
    "author": "MysteryAuthor",
    "created_at": new Date(),
    "category_id": booksLiteratureCategoryId,
  },
  {
    "name": "Classic Literature Collection",
    "description": "Collection of timeless classics from renowned authors.",
    "price": 39.99,
    "currency": "USD",
    "stock_quantity": 20,
    "author": "ClassicAuthors",
    "created_at": new Date(),
    "category_id": booksLiteratureCategoryId,
  },
  {
    "name": "Sci-Fi Adventure Book",
    "description": "Exciting sci-fi adventure that takes you to new realms.",
    "price": 29.99,
    "currency": "USD",
    "stock_quantity": 35,
    "author": "SciFiExplorer",
    "created_at": new Date(),
    "category_id": booksLiteratureCategoryId,
  },
  {
    "name": "Inspiring Self-Help Guide",
    "description": "Self-help guide to inspire and empower personal growth.",
    "price": 24.99,
    "currency": "USD",
    "stock_quantity": 25,
    "author": "MotivationMaster",
    "created_at": new Date(),
    "category_id": booksLiteratureCategoryId,
  },
  {
    "name": "Children's Storybook Set",
    "description": "Enchanting storybook set for young readers.",
    "price": 14.99,
    "currency": "USD",
    "stock_quantity": 22,
    "author": "ChildrensAuthor",
    "created_at": new Date(),
    "category_id": booksLiteratureCategoryId,
  },
];

db.products.insertMany(booksLiteratureProductsData);

const totalBooksLiteratureProductCount = booksLiteratureProductsData.reduce(
  (total, product) => total + product.stock_quantity,
  0
);
db.categories.update(
  { _id: booksLiteratureCategoryId },
  { $set: { productCount: totalBooksLiteratureProductCount } }
);
