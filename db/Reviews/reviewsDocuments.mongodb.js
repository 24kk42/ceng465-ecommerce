const reviewsData = [
    {
      comment: "Great service, prompt delivery!",
      rating: 5,
      date: "11/06/2023",
      order_id: ObjectId("6550f7acd4ae193d5384444c")
    },
    {
      comment: "Product quality was amazing!",
      rating: 4.5,
      date: "08/03/2023",
      order_id: ObjectId("6550f7add4ae193d5384444d")
    },
    {
      comment: "Timely and hassle-free delivery.",
      rating: 4.8,
      date: "09/30/2023",
      order_id: ObjectId("6550f7aed4ae193d5384444e")
    },
    {
      comment: "The product exceeded expectations.",
      rating: 4.7,
      date: "09/14/2023",
      order_id: ObjectId("6550f7afd4ae193d5384444f")
    },
    {
      comment: "Prompt customer service and delivery.",
      rating: 4.9,
      date: "04/02/2023",
      order_id: ObjectId("6550f7b0d4ae193d53844450")
    },
    {
      comment: "Good experience overall.",
      rating: 4.2,
      date: "12/23/2023",
      order_id: ObjectId("6550f7b0d4ae193d53844451")
    },
    {
      comment: "Satisfied with the purchase.",
      rating: 4.6,
      date: "11/29/2023",
      order_id: ObjectId("6550f7b0d4ae193d53844452")
    },
    {
      comment: "Highly recommended!",
      rating: 5,
      date: "11/30/2023",
      order_id: ObjectId("6550f7b0d4ae193d53844453")
    },
    {
      comment: "Smooth transaction and delivery.",
      rating: 4.8,
      date: "11/30/2023",
      order_id: ObjectId("6550f7b0d4ae193d53844454")
    },
    {
      comment: "Good value for the price.",
      rating: 4.3,
      date: "12/01/2023",
      order_id: ObjectId("6550f7b1d4ae193d53844455")
    }
  ];
  
  
 db.reviews.insertMany(reviewsData)
  