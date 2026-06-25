const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1245.00,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRk7MxRp8322UqwwMPME_2PtAo4Qrc0ig4UCz_-XB4G7KDwO365SaoNway7a-HM6Ywjks4ukrxGWJ_N9IBDo0cBiQd6BUi_v9uJjVB4C1q8osAOwmOYL3A",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2674.99,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRy4c-_scSI6l9IuKJB13oYTh9wfNJdD4cVQEWWiAAstUtGV049_oZ03MCV9uJd8XJ83o0gZu_CQOZRFMz5lQhZ4JT5LWGNp-a0eAoj-cvtdSggXtcOeyUy",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 2990.00,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4QPX5qXb3nQw5wSZj5mRGItboz-7ZWFgyKyIkPv3xNk27avU_vYQ2cJuz48KzHydr5nkTSpGx1l5xqpXiIXA7ylA06yyS",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 2700.00,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3xKB3DpFVfFOiP02-zwEWaLDTn0QVEpdsPlp2K7gxZlWNjIcXNrYogSNXosrnLQGh9_lasAsInENAonMuav-hw89jTakGBP4fIaYm_8eHksrJ-1R7aGQX59w",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 967.99,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREUKzyV-SAeoxl45pZFhXYpySIWwGWl8eO8-9lSc8NMuABnx7gCy4QBBu7qD5VDweN_ZA_8I6n3pkE2H4bOa5uwDT4V4k8wpi65ron4MwkhyuUP-vfQ75p",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 892.40,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfjUJP-FWgLGVrh8QaCY-29FqAAJkAWbuLzOn2IVyk0oJJD1oFZuHtVGeY2fjFMRFYxMMp80YcdyEF0CoHXB0F8GHUiQ5EoMqfes7ufnhO_DEK47iZQvrz1w",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
