import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "P",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Dior handbag",
      slug: "dior-handbag",
      category: "HandBag",
      image: "/images/bag1.jpg",
      price: 500,
      brand: "Dior",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "Dior handbag for women",
      isFeatured: true,
      baner: "/images/baner1.jpg",
      gender: "women",
    },
    {
      name: "Gucci handbag",
      slug: "gucci-handbag",
      category: "HandBag",
      image: "/images/bag2.jpg",
      price: 700,
      brand: "Gucci",
      rating: 4.7,
      numReviews: 8,
      countInStock: 20,
      description: "Gucci handbag for women",
      isFeatured: true,
      baner: "/images/baner2.jpg",
      gender: "women",
    },
  ],
};
export default data;
