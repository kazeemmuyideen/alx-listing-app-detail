import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Beach Villa",
    rating: 4.8,
    address: { city: "Lagos", country: "Nigeria" },
    image: "/images/villa.jpg",
    description: "Beautiful villa by the beach with all modern amenities.",
    category: ["Wi-Fi", "Pool", "Kitchen", "Free parking"],
    price: 120,
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Amazing experience!",
        avatar: "/images/user1.jpg",
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Very clean and great location.",
        avatar: "/images/user2.jpg",
      },
    ],
  },
];
