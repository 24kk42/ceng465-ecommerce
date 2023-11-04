db.products.updateMany(
    {},
    {
      $set: { "created_at": new Date() }
    }
  );