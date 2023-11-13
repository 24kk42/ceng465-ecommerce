/*db.customers.insertOne({
    "first_name": "Poyraz",
    "last_name": "Ergu",
    "country": "Turkiye",
    "city": "Izmir",
    "email": "poyraz.ergu@mail.com",
    "birth_date": "09-12-2001",
    "created_at": "2023-11-11",
    "password": "poyraz123",
    "address": "Karsiyaka",
    "postal_code": "35018",
    "phone_number": "123-507-9999",
    "last_login": new Date(),
    "payment_cards": [
      {
        "card_no": "1111 2222 5050 1818",
        "expire_date": "11/2025",
        "security_code": "123",
        "card_name": "Poyraz's Visa",
        "provider": "Visa"
      },
      {
        "card_no": "5555 6666 6060 3535",
        "expire_date": "11/2024",
        "security_code": "789",
        "card_name": "Poyraz's Mastercard",
        "provider": "Mastercard"
      }
    ]
});

db.customers.updateOne(
    {"email": "alice.smith@mail.com"},
    {$set: {"address": "20 Ingram Street"}}
    );

db.customers.updateOne(
    {"email": "bob.johnson@mail.com"},
    {$set: {"password": "bobsnewpassword"}}
    );
*/

const pastOrders = db.orders.find(
  { "order_date": { $lt: "11-16-2023" } }, //Specific order date is 16th of November 2023
  { "_id": 0, "customer_id": 0,"payment_transaction": 0 }
).toArray();
print("------------------------------");
print("Orders before the 16th of November 2023");
print("------------------------------");
pastOrders.forEach(order =>{
  const productId = order.product_id.toString();
  printjson({...order, product_id: productId});
});



const specificRating = 4.8;
const productsWithSpecificRating = db.reviews.find(
  { "rating": specificRating },
  { "_id": 0, "date": 0 }
).toArray();
print("------------------------------");
print("4.8 Rated Products:");
print("------------------------------");
productsWithSpecificRating.forEach(review => {
  const orderId = review.order_id.toString();
  printjson({ ...review, order_id: orderId });
});


print("------------------------------");
const specificCountry = "Spain";
print("Customers are in " + specificCountry + " :");
print("------------------------------");
const peopleInSpecificCountry = db.customers.find(
  {"country": specificCountry},
  {"_id": 0, "country": 0, "email": 0, "birth_date": 0, "created_at": 0, "password": 0, "address": 0, "postal_code" : 0, "phone_number": 0, "last_login": 0, "payment_cards": 0}
).toArray();
printjson(peopleInSpecificCountry);


print("------------------------------");
print("Sports Outdoors Products More Expensive than 150.00 USD :");
print("------------------------------");
const sportsOutdoorsCategoryId = ObjectId("654d253766a50434894b9714");
const sportsOutdoorsProducts = db.products.find({
  "category_id": sportsOutdoorsCategoryId,
  "price": { $gte: 150.00 }
},
{"_id": 0, "currency": 0, "stock_quantity": 0, "category_id": 0, "created_at": 0}).toArray();

printjson(sportsOutdoorsProducts);




/*
//We're going to delete Skincare Essentials Set
const beautyPersonalCareCategoryId = ObjectId("654d253766a50434894b9717");
const result = db.products.deleteOne({
    "name": "Skincare Essentials Set",
    "description": "Complete set of skincare essentials for a radiant complexion.",
    "price": 79.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "GlowingSkinCo",
    "category_id": beautyPersonalCareCategoryId
  });
  printjson(result);


//This query will check is it deleted or not
db.products.find({
    "name": "Skincare Essentials Set",
    "description": "Complete set of skincare essentials for a radiant complexion.",
    "price": 79.99,
    "currency": "USD",
    "stock_quantity": 25,
    "manufacturer": "GlowingSkinCo",
    "category_id": beautyPersonalCareCategoryId
  }).pretty();*/


