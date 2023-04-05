// import all images from assets/images directory
import mainImage from "../figmaImages/cars-img/2019 Corolla.jpg"
import mainImage1 from "../figmaImages/cars-img/Rav.jpg"
import img from "../figmaImages/cars-img/miti.jpg"
import img1 from "../figmaImages/cars-img/2000 Nissan grt r34.jpg"
import img2 from "../figmaImages/cars-img/RX7.jpg"
import img3 from "../figmaImages/cars-img/2022 Kia seltos.jpg"
import img4 from "../figmaImages/cars-img/pr toyota.jpg"
import img5 from "../figmaImages/cars-img/STINGER.jpg"
import img6 from "../figmaImages/cars-img/KIA RIO.jpg"
import img7 from "../figmaImages/cars-img/JEEP.jpg"
import img8 from "../figmaImages/cars-img/2023 Kia sorento.jpg"


const carData = [
  {
    id:0,
    brand: "Toyota",
    rating: 112,
    carName: "Corolla",
    imgUrl: mainImage,/* MAIN IMAGE 1*/
    fuel:"Petrol 92 unleded",
    model: "Sedan",
    price: 85,
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Tiptronic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id:1,
    brand: "Toyota",
    rating: 112,
    carName: "RAV4",
    imgUrl: mainImage1,/* MAIN IMAGE 2*/
    model: "SUV",
    fuel:"Petrol 92 unleded",
    price: 150,
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

/* THE REST OF THE FEED */
  {
    id: 2,
    brand: "Mitsubishi",
    rating: 102,
    carName: "Lancer Evo 8",
    imgUrl: img,
    fuel:"Petrol 92 unleded",
    model: "Sedan",
    price: 150,
    seats: "4",
    gps: "GPS Navigation",
    seatType: "No Heated seats",
    automatic: "Manual",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "Nissan",
    rating: 132,
    carName: "Nissan Skyline GTR R34",
    imgUrl: img1,
    model: "Coupe",
    price: 265,
    seats: "2",
    fuel:"Petrol 92 unleded",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id:4,
    brand: "Mazda",
    rating: 112,
    carName: "Mazda RX-7",
    imgUrl: img2,/* images of current cars */
    model: "Coupe",
    price: 180,
    seats: "2",
    fuel:"Petrol 95 Premium",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "KIA",
    rating: 94,
    carName: "Kia Seltos",
    imgUrl: img3,
    model: "SUV",
    price: 90,
    seats: "4",
    fuel:"Petrol 92 unleded",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Toyota",
    rating: 119,
    carName: "Toyota Supra",
    imgUrl:img4,
    model: "Coupe",
    price: 90,
    seats: "2",
    fuel:"Petrol 92 unleded",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Kia",
    rating: 82,
    carName: "Kia Stinger",
    imgUrl: img5,
    model: "Sedan",
    price: 91,
    fuel:"Petrol 92 unleded",
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Kia",
    rating: 52,
    carName: "Kia Rio",
    imgUrl: img6,
    model: "Hatchback",
    price: 60,
    seats: "4",
    fuel:"Petrol 92 unleded",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 9,
    brand: "Jeep",
    rating: 112,
    carName: "Jeep Gladiator",
    imgUrl:img7,/* images of current cars */
    model: "4X4 Utility Truck",
    price: 160,
    fuel:"Petrol 92 unleded",
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 10,
    brand: "Kia",
    rating: 112,
    carName: "Kia Sorrento",
    imgUrl:img8,/* images of current cars */
    model: "SUV",
    price: 150,
    fuel:"Petrol 92 unleded",
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
