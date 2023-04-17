// import all images from assets/images directory
import mainImage from "../figmaImages/cars-img/2019 Corolla.jpg"
import mainImage2 from "../figmaImages/cars-img/2019 Corolla 2.jpg"
import mainImage3 from "../figmaImages/cars-img/2019 Corolla 3.jpg"
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

    id: 0,
    brand: "Toyota",
    rating: 112,
    carName: "Corolla",
    imgUrl: mainImage,
    imgUrl2 : mainImage2,
    imgUrl3 : mainImage3,/* MAIN IMAGE 1*/
    fuel: "Petrol 92 unleded",
    model: "Sedan",
    price: 85,
    priceOff: 75,
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Tiptronic",
    description:
      " The Toyota Corolla 2019 Hatchback is a popular and reliable car for traveling in New Zealand. It offers good fuel efficiency and comfortable seating for up to five passengers, making it a great choice for road trips around the country. The Corolla 2019 Hatchback comes with a range of safety features, including a rearview camera, automatic emergency braking, and lane departure warning. These features can give you added peace of mind while driving on New Zealand's often winding and narrow roads. In terms of storage space, the Corolla 2019 Hatchback has a decent-sized trunk for a small car, and the rear seats can be folded down to create even more space for luggage or camping gear. Overall, the Toyota Corolla 2019 Hatchback is a reliable and practical choice for traveling in New Zealand, particularly for those who are looking for a comfortable and fuel-efficient vehicle that can handle the country's varied terrain.",
  },
  {
    id: 1,
    brand: "Toyota",
    rating: 112,
    carName: "RAV4",
    imgUrl: mainImage1,/* MAIN IMAGE 2*/
    model: "SUV",
    fuel: "Petrol 92 unleded",
    price: 150,
    priceOff: 135,
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Toyota RAV4 2019 is a popular and reliable SUV for traveling in New Zealand. It offers good ground clearance, all-wheel drive capability, and plenty of cargo space, making it a great choice for those looking to explore off the beaten path. The RAV4 2019 comes with a range of safety features, including a rearview camera, automatic emergency braking, and lane departure warning. It also has adaptive cruise control, which can be useful for long drives on New Zealand's open roads.The RAV4's spacious interior and comfortable seating for up to five passengers make it a great car for road trips around the country. Additionally, its fuel efficiency is relatively good for an SUV, which can help keep costs down during longer journeys.One thing to keep in mind is that the RAV4's larger size may make it more challenging to navigate through some of New Zealand's narrow roads and tight parking spots in cities.However, this can be mitigated by choosing a model with features such as blind spot monitoring and rear cross- traffic alert.",
  },

  /* THE REST OF THE FEED */
  {
    id: 2,
    brand: "Mitsubishi",
    rating: 102,
    carName: "Lancer Evo 8",
    imgUrl: img,
    fuel: "2.0 liter",
    model: "Sedan",
    price: 150,
    seats: "4",
    gps: "GPS Navigation",
    seatType: "No Heated seats",
    automatic: "Manual",
    description: "The Mitsubishi Lancer Evo 8 is a great car to travel in New Zealand due to its exceptional handling and performance on winding roads and mountainous terrain. The car's all-wheel drive system and advanced suspension make it an excellent choice for exploring New Zealand's diverse landscapes and twisting roads. The Evo 8's turbocharged engine provides plenty of power, allowing drivers to effortlessly navigate steep inclines and winding roads. Additionally, the car's compact size and precise steering make it easy to maneuver in tight spaces and narrow roads.",
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
    fuel: "6.5 litre",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      "The Nissan Skyline R34 is a high-performance sports car that can provide a thrilling driving experience while traveling in New Zealand. With all-wheel drive and a powerful engine, it can handle New Zealand's winding roads and challenging terrain with ease. The car also offers comfortable seating and a unique, stylish design that can turn heads on the road. Plus, the Skyline R34 has a dedicated fan base and community of enthusiasts in New Zealand, making it a great way to connect with like-minded individuals during your travels."
  },
  {
    id: 4,
    brand: "Mazda",
    rating: 112,
    carName: "Mazda RX-7",
    imgUrl: img2,/* images of current cars */
    model: "Coupe",
    price: 180,
    seats: "2",
    fuel: "2.6 litre",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      "The Mazda RX-7 is a sports car known for its high-performance rotary engine and exceptional handling, making it a fun and thrilling car to drive on winding roads. While the RX-7's compact size may limit its storage space and passenger capacity, it can also make it more maneuverable on narrow New Zealand roads and tight parking spots. Additionally, the RX-7 has a sleek and stylish design that may appeal to those who prioritize aesthetics in their choice of vehicle. However, it is important to note that the RX-7 is an older model car, with the last model year being produced in 2002, which means that it may not have the same level of safety features and technology as more modern cars."
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
    fuel: "5.0 Liter",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Kia Seltos is a great car for traveling in New Zealand for several reasons. Firstly, it offers plenty of space for passengers and luggage, with ample legroom and a large cargo area that can be expanded by folding down the rear seats. Secondly, the Seltos is available with all-wheel drive, making it a great option for exploring New Zealand's rugged terrain and varied weather conditions. Additionally, it offers good ground clearance, which can help navigate rougher roads and uneven terrain.",
  },

  {
    id: 6,
    brand: "Toyota",
    rating: 119,
    carName: "Toyota Supra",
    imgUrl: img4,
    model: "Coupe",
    price: 90,
    seats: "2",
    fuel: "2.9 Liter",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Toyota Supra is a great car to travel in New Zealand because it offers a combination of powerful performance, comfortable seating, and sleek design. It has excellent handling and acceleration, making it a thrilling car to drive on New Zealand's winding roads and mountainous terrain. The Supra also has a spacious and comfortable interior with room for up to four passengers and enough cargo space for luggage or outdoor gear. Furthermore, the Supra is a rare and iconic car, which can make it a unique and special choice for those who appreciate classic cars. Overall, the Toyota Supra is a great car to travel in New Zealand for those looking for a fun, comfortable, and stylish ride.",
  },

  {
    id: 7,
    brand: "Kia",
    rating: 82,
    carName: "Kia Stinger",
    imgUrl: img5,
    model: "Sedan",
    price: 91,
    fuel: "2.5 liter",
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Kia Stinger is a great car to travel in New Zealand for several reasons. Firstly, the Stinger has a powerful engine and excellent handling, making it a fun and engaging car to drive on New Zealand's winding roads and mountainous terrain. It also has all-wheel drive capability, which can provide better traction on slippery roads. Secondly, the Stinger has a spacious and comfortable interior with plenty of legroom and headroom for both the driver and passengers. It also has a large trunk for storing luggage and gear.",
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
    fuel: "45 litres",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Kia Rio is a great car to travel in New Zealand for several reasons. Firstly, the Rio is a compact car that is easy to maneuver in the city and navigate on New Zealand's narrow and winding roads. It is also fuel-efficient, which can help keep costs down during longer trips. Secondly, the Rio has a comfortable and spacious interior with seating for up to five passengers. It also has a decent-sized trunk for storing luggage or gear for outdoor activities.",
  },
  {
    id: 9,
    brand: "Jeep",
    rating: 112,
    carName: "Jeep Gladiator",
    imgUrl: img7,/* images of current cars */
    model: "4X4 Utility Truck",
    price: 160,
    fuel: "Petrol 92 unleded",
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Jeep Gladiator is a great car to travel in New Zealand for several reasons. Firstly, it has a four- wheel drive system and high ground clearance, which makes it capable of tackling off - road trails and rugged terrain that other cars may not be able to handle. Secondly, the Gladiator has a spacious and versatile cargo bed that can accommodate larger items such as camping gear, bicycles, and even a small boat.This makes it a great choice for outdoor enthusiasts who plan to explore New Zealand's natural wonders.",
  },
  {
    id: 10,
    brand: "Kia",
    rating: 112,
    carName: "Kia Sorrento",
    imgUrl: img8,/* images of current cars */
    model: "SUV",
    price: 150,
    fuel: "Petrol 92 unleded",
    seats: "4",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Kia Sorento is a great car to travel in New Zealand for several reasons. Firstly, the Sorento has ample space for passengers and cargo, with comfortable seating for up to seven people and plenty of room for luggage or gear. This makes it a great option for families or larger groups traveling together. Secondly, the Sorento offers a smooth and comfortable ride, making it a great choice for longer road trips. It also has all-wheel drive capability, which can be useful for navigating New Zealand's varied terrain.",
  },
];

export default carData;
