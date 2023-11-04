db.products.updateMany(
    {},
    {
      $set: { "currency": "USD" }
    }
  );