const products = [
  {
    "id": "1",
    "title": "Nike Air Max 1",
    "subtitle": "Nike Air Max 1 White/Orange",
    "color": "White/Cream/Limestone/University Red",
    "price": 140,
    "code": "CODE-1001",
    "sizes": [
      39,
      40,
      41
    ],
    "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "videoThumb": "https://example.com/videos/thumb1.webp",
    "related": [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 1."
  },
  {
    "id": "2",
    "title": "Nike Bone Beige",
    "subtitle": "Nike Dunk Low Bone Beige",
    "color": "Color Variant 2",
    "price": 119,
    "code": "CODE-1002",
    "sizes": [
      40,
      41,
      42
    ],
    "image": "https://i.pinimg.com/736x/a2/ed/43/a2ed4379f33e72536f93a04d2df49ad5.jpg",
    "videoThumb": "https://example.com/videos/thumb2.webp",
    "related": [
      "https://example.com/images/related2_1.webp",
      "https://example.com/images/related2_2.webp"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 2."
  },
  {
    "id": "3",
    "title": "Nike Reverse Mocha",
    "subtitle": "Nike Travis Scott Reverse Mocha",
    "color": "Color Variant 3",
    "price": 225,
    "code": "CODE-1003",
    "sizes": [
      41,
      42,
      40
    ],
    "image": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Ftravis-scott-air-jordan-1-low-reverse-mocha-detailed-look-release-info-dm7866-162-000.jpg?w=960&cbr=1&q=90&fit=max",
    "videoThumb": "https://example.com/videos/thumb3.webp",
    "related": [
      "https://example.com/images/related3_1.webp",
      "https://example.com/images/related3_2.webp"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 3."
  },
  {
    "id": "4",
    "title": "Nike St. John Red",
    "subtitle": "Nike Dunk Low SP St. John Red",
    "color": "Color Variant 4",
    "price": 119,
    "code": "CODE-1004",
    "sizes": [
      42,
      39,
      41
    ],
    "image": "https://i.pinimg.com/736x/c8/ea/35/c8ea3584bc61d138e6c02832d35bc03a.jpg",
    "videoThumb": "https://example.com/videos/thumb4.webp",
    "related": [
      "https://example.com/images/related4_1.webp",
      "https://example.com/images/related4_2.webp"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 4."
  },
  {
    "id": "5",
    "title": "Nike Air Force 1",
    "subtitle": "Nike Air Force 1 White Low",
    "color": "Color Variant 5",
    "price": 73,
    "code": "CODE-1005",
    "sizes": [
      38,
      40,
      42
    ],
    "image": "https://i.pinimg.com/736x/06/f2/b6/06f2b608c576b96ffd5cb4767649e31a.jpg",
    "videoThumb": "https://example.com/videos/thumb5.webp",
    "related": [
      "https://example.com/images/related5_1.webp",
      "https://example.com/images/related5_2.webp"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 5."
  },
  {
    "id": "6",
    "title": "Nike Air Jordan 1",
    "subtitle": "Nike Jordan Low SE Craft Black/Grey",
    "color": "Color Variant 6",
    "price": 123,
    "code": "CODE-1006",
    "sizes": [
      39,
      41,
      40
    ],
    "image": "https://images.unsplash.com/photo-1679284392816-191b1c849f76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "videoThumb": "https://example.com/videos/thumb6.webp",
    "related": [
      "https://example.com/images/related6_1.webp",
      "https://example.com/images/related6_2.webp"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 6."
  },
  {
    "id": "7",
    "title": "Addidas Samba OG",
    "subtitle": "Addidas White Samba OG",
    "color": "Color Variant 7",
    "price": 128,
    "code": "CODE-1007",
    "sizes": [
      40,
      42,
      41
    ],
    "image": "https://i.pinimg.com/736x/7a/55/83/7a5583517446c5aabc68f92973e37d05.jpg",
    "videoThumb": "https://example.com/videos/thumb7.webp",
    "related": [
      "https://example.com/images/related7_1.webp",
      "https://example.com/images/related7_2.webp"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 7."
  },
  {
    "id": "8",
    "title": "Nike Retro Panda",
    "subtitle": "Nike Dunk Low Retro Panda Black",
    "color": "Color Variant 8",
    "price": 66,
    "code": "CODE-1008",
    "sizes": [
      41,
      39,
      42
    ],
    "image": "https://i.pinimg.com/736x/45/cd/59/45cd59bc7f0df5c8d896c3eefd18f72f.jpg",
    "videoThumb": "https://example.com/videos/thumb8.webp",
    "related": [
      "https://example.com/images/related8_1.webp",
      "https://example.com/images/related8_2.webp"
    ],
    "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
    "note": "This is a limited edition of model 8."
  },
  // {
  //   "id": "9",
  //   "title": "Shoe Model 9",
  //   "subtitle": "Comfortable and stylish sneaker #9",
  //   "color": "Color Variant 9",
  //   "price": 2900,
  //   "code": "CODE-1009",
  //   "sizes": [
  //     42,
  //     40,
  //     40
  //   ],
  //   "image": "https://example.com/images/shoe9.webp",
  //   "videoThumb": "https://example.com/videos/thumb9.webp",
  //   "related": [
  //     "https://example.com/images/related9_1.webp",
  //     "https://example.com/images/related9_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 9."
  // },
  // {
  //   "id": "10",
  //   "title": "Shoe Model 10",
  //   "subtitle": "Comfortable and stylish sneaker #10",
  //   "color": "Color Variant 10",
  //   "price": 3000,
  //   "code": "CODE-1010",
  //   "sizes": [
  //     38,
  //     41,
  //     41
  //   ],
  //   "image": "https://example.com/images/shoe10.webp",
  //   "videoThumb": "https://example.com/videos/thumb10.webp",
  //   "related": [
  //     "https://example.com/images/related10_1.webp",
  //     "https://example.com/images/related10_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 10."
  // },
  // {
  //   "id": "11",
  //   "title": "Shoe Model 11",
  //   "subtitle": "Comfortable and stylish sneaker #11",
  //   "color": "Color Variant 11",
  //   "price": 3100,
  //   "code": "CODE-1011",
  //   "sizes": [
  //     39,
  //     42,
  //     42
  //   ],
  //   "image": "https://example.com/images/shoe11.webp",
  //   "videoThumb": "https://example.com/videos/thumb11.webp",
  //   "related": [
  //     "https://example.com/images/related11_1.webp",
  //     "https://example.com/images/related11_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 11."
  // },
  // {
  //   "id": "12",
  //   "title": "Shoe Model 12",
  //   "subtitle": "Comfortable and stylish sneaker #12",
  //   "color": "Color Variant 12",
  //   "price": 3200,
  //   "code": "CODE-1012",
  //   "sizes": [
  //     40,
  //     39,
  //     40
  //   ],
  //   "image": "https://example.com/images/shoe12.webp",
  //   "videoThumb": "https://example.com/videos/thumb12.webp",
  //   "related": [
  //     "https://example.com/images/related12_1.webp",
  //     "https://example.com/images/related12_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 12."
  // },
  // {
  //   "id": "13",
  //   "title": "Shoe Model 13",
  //   "subtitle": "Comfortable and stylish sneaker #13",
  //   "color": "Color Variant 13",
  //   "price": 3300,
  //   "code": "CODE-1013",
  //   "sizes": [
  //     41,
  //     40,
  //     41
  //   ],
  //   "image": "https://example.com/images/shoe13.webp",
  //   "videoThumb": "https://example.com/videos/thumb13.webp",
  //   "related": [
  //     "https://example.com/images/related13_1.webp",
  //     "https://example.com/images/related13_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 13."
  // },
  // {
  //   "id": "14",
  //   "title": "Shoe Model 14",
  //   "subtitle": "Comfortable and stylish sneaker #14",
  //   "color": "Color Variant 14",
  //   "price": 3400,
  //   "code": "CODE-1014",
  //   "sizes": [
  //     42,
  //     41,
  //     42
  //   ],
  //   "image": "https://example.com/images/shoe14.webp",
  //   "videoThumb": "https://example.com/videos/thumb14.webp",
  //   "related": [
  //     "https://example.com/images/related14_1.webp",
  //     "https://example.com/images/related14_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 14."
  // },
  // {
  //   "id": "15",
  //   "title": "Shoe Model 15",
  //   "subtitle": "Comfortable and stylish sneaker #15",
  //   "color": "Color Variant 15",
  //   "price": 3500,
  //   "code": "CODE-1015",
  //   "sizes": [
  //     38,
  //     42,
  //     40
  //   ],
  //   "image": "https://example.com/images/shoe15.webp",
  //   "videoThumb": "https://example.com/videos/thumb15.webp",
  //   "related": [
  //     "https://example.com/images/related15_1.webp",
  //     "https://example.com/images/related15_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 15."
  // },
  // {
  //   "id": "16",
  //   "title": "Shoe Model 16",
  //   "subtitle": "Comfortable and stylish sneaker #16",
  //   "color": "Color Variant 16",
  //   "price": 3600,
  //   "code": "CODE-1016",
  //   "sizes": [
  //     39,
  //     39,
  //     41
  //   ],
  //   "image": "https://example.com/images/shoe16.webp",
  //   "videoThumb": "https://example.com/videos/thumb16.webp",
  //   "related": [
  //     "https://example.com/images/related16_1.webp",
  //     "https://example.com/images/related16_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 16."
  // },
  // {
  //   "id": "17",
  //   "title": "Shoe Model 17",
  //   "subtitle": "Comfortable and stylish sneaker #17",
  //   "color": "Color Variant 17",
  //   "price": 3700,
  //   "code": "CODE-1017",
  //   "sizes": [
  //     40,
  //     40,
  //     42
  //   ],
  //   "image": "https://example.com/images/shoe17.webp",
  //   "videoThumb": "https://example.com/videos/thumb17.webp",
  //   "related": [
  //     "https://example.com/images/related17_1.webp",
  //     "https://example.com/images/related17_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 17."
  // },
  // {
  //   "id": "18",
  //   "title": "Shoe Model 18",
  //   "subtitle": "Comfortable and stylish sneaker #18",
  //   "color": "Color Variant 18",
  //   "price": 3800,
  //   "code": "CODE-1018",
  //   "sizes": [
  //     41,
  //     41,
  //     40
  //   ],
  //   "image": "https://example.com/images/shoe18.webp",
  //   "videoThumb": "https://example.com/videos/thumb18.webp",
  //   "related": [
  //     "https://example.com/images/related18_1.webp",
  //     "https://example.com/images/related18_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 18."
  // },
  // {
  //   "id": "19",
  //   "title": "Shoe Model 19",
  //   "subtitle": "Comfortable and stylish sneaker #19",
  //   "color": "Color Variant 19",
  //   "price": 3900,
  //   "code": "CODE-1019",
  //   "sizes": [
  //     42,
  //     42,
  //     41
  //   ],
  //   "image": "https://example.com/images/shoe19.webp",
  //   "videoThumb": "https://example.com/videos/thumb19.webp",
  //   "related": [
  //     "https://example.com/images/related19_1.webp",
  //     "https://example.com/images/related19_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 19."
  // },
  // {
  //   "id": "20",
  //   "title": "Shoe Model 20",
  //   "subtitle": "Comfortable and stylish sneaker #20",
  //   "color": "Color Variant 20",
  //   "price": 4000,
  //   "code": "CODE-1020",
  //   "sizes": [
  //     38,
  //     39,
  //     42
  //   ],
  //   "image": "https://example.com/images/shoe20.webp",
  //   "videoThumb": "https://example.com/videos/thumb20.webp",
  //   "related": [
  //     "https://example.com/images/related20_1.webp",
  //     "https://example.com/images/related20_2.webp"
  //   ],
  //   "careInstruction": "Wipe with a clean cloth, air dry. Avoid direct sunlight.",
  //   "note": "This is a limited edition of model 20."
  // }
];

export default products;