const ordersData = [
    {
        customer_id: ObjectId("6550b2940e02a75441400b5b"),
        product_id: ObjectId("654d2780726508d38b5c6236"),
        order_date: "11/05/2023",
        amount: 3,
        status: "DELIVERED",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "11/05/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "1111 2222 3333 4444",
            "expire_date": "10/2025",
            "security_code": "321",
            "card_name": "Alice's Visa",
            "provider": "Visa"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b5c"),
        product_id: ObjectId("654d28dd4e4a00c808c6000a"),
        order_date: "08/01/2023",
        amount: 1,
        status: "DELIVERED",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "08/01/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "7777 8888 9999 0000",
            "expire_date": "09/2028",
            "security_code": "789",
            "card_name": "Bob's Amex",
            "provider": "American Express"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b5d"),
        product_id: ObjectId("654d294e7be215464fdb9c6c"),
        order_date: "09/25/2023",
        amount: 1,
        status: "DELIVERED",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "09/25/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "1234 5678 9012 3456",
            "expire_date": "07/2024",
            "security_code": "234",
            "card_name": "Charlie's Mastercard",
            "provider": "Mastercard"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b5e"),
        product_id: ObjectId("654d2a24e45cdb55f75a3670"),
        order_date: "09/11/2023",
        amount: 2,
        status: "DELIVERED",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "09/11/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "1111 2222 3333 4444",
            "expire_date": "05/2026",
            "security_code": "321",
            "card_name": "Mehmet's Visa",
            "provider": "Visa"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b5f"),
        product_id: ObjectId("654d2a7c943fe132364393d1"),
        order_date: "03/29/2023",
        amount: 3,
        status: "DELIVERED",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "03/29/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "7777 8888 9999 0000",
            "expire_date": "08/2025",
            "security_code": "789",
            "card_name": "Hans's Mastercard",
            "provider": "Mastercard"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b60"),
        product_id: ObjectId("654d2a7c943fe132364393d0"),
        order_date: "12/20/2023",
        amount: 3,
        status: "ON DELIVER",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "12/20/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "1234 5678 9012 3456",
            "expire_date": "11/2029",
            "security_code": "234",
            "card_name": "Monica's Mastercard",
            "provider": "Mastercard"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b61"),
        product_id: ObjectId("654d2a7c943fe132364393d2"),
        order_date: "11/25/2023",
        amount: 1,
        status: "ON DELIVER",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "11/25/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "5555 6666 7777 8888",
            "expire_date": "12/2024",
            "security_code": "456",
            "card_name": "Ayşe's Visa",
            "provider": "Visa"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b62"),
        product_id: ObjectId("654d2aa09d0e095cf943f5fe"),
        order_date: "11/27/2023",
        amount: 2,
        status: "ON DELIVER",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "11/27/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "9876 5432 1098 7654",
            "expire_date": "07/2026",
            "security_code": "567",
            "card_name": "Mauricio's Mastercard",
            "provider": "Mastercard"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b63"),
        product_id: ObjectId("654d2acd74569d09c3956866"),
        order_date: "11/28/2023",
        amount: 1,
        status: "ON DELIVER",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "11/28/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "1111 2222 3333 4444",
            "expire_date": "02/2025",
            "security_code": "321",
            "card_name": "Charles's Visa",
            "provider": "Visa"
          }
        }
      },
      {
        customer_id: ObjectId("6550b2940e02a75441400b64"),
        product_id: ObjectId("654d2acd74569d09c3956866"),
        order_date: "11/28/2023",
        amount: 3,
        status: "ON DELIVER",
        payment_transaction: {
          payment_method: "banking",
          transaction_date: "11/28/2023",
          tax: 5.0,
          payment_card: {
            "card_no": "1234 5678 9012 3456",
            "expire_date": "05/2024",
            "security_code": "234",
            "card_name": "Isabella's Visa",
            "provider": "Visa"
          }
        }
      },
]

for (const order of ordersData) {
  if (order.status === 'DELIVERED') {
    // Decrement in products collection
    const purchasedProduct = db.products.findOne({ _id: order.product_id });
    if (purchasedProduct) {
      db.products.updateOne(
        { _id: order.product_id },
        { $inc: { stock_quantity: -order.amount } }
      );
    }

    const category = db.categories.findOne({ _id: purchasedProduct.category_id });
    if (category) {
      db.categories.updateOne(
        { _id: category._id },
        { $inc: { productCount: -order.amount } }
      );
    }
  }

  // Insert the current order into the 'orders' collection
  db.orders.insertOne(order);
  db.orders.createIndex({ order_date: 1 },{name:"dateSortedIndex"});

}
