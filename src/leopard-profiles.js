const leopardIdCards = [
  {
    imgUrl: "images/gosebo.jpg",
    name: "Gosebo Male",
    gallery: [
      {
        img1: "images/gosebo1.jpg",
      },
      {
        img2: "images/gosebo2.jpg",
      },
      {
        img3: "images/gosebo3.jpg",
      },
      {
        img4: "images/gosebo4.jpg",
      },
    ],
  },
  {
    imgUrl: "images/serati.jpg",
    name: "Serati Female",
    gallery: [
      {
        img1: "",
      },
      {
        img2: "",
      },
      {
        img3: "",
      },
      {
        img4: "",
      },
    ],
  },
  {
    imgUrl: "images/kimbia.jpg",
    name: "Kimbia Female",
    gallery: [
      {
        img1: "",
      },
      {
        img2: "",
      },
      {
        img3: "",
      },
      {
        img4: "",
      },
    ],
  },
  {
    imgUrl: "images/Clover.jpg",
    name: "Clover Male",
    idCard: "images/clover-id-card.jpg",
    gallery: [
      {
        img1: "images/clover.jpg",
      },
      {
        img2: "images/clover2.jpg",
      },
      {
        img3: "images/clover3.jpg",
      },
      {
        img4: "images/clover4.jpg",
      },
    ],
  },
  {
    imgUrl:
    "images/motsamai.jpg",
    name: "Motsamai Female",
    gallery: [
      {
        img1: "",
      },
      {
        img2: "",
      },
      {
        img3: "",
      },
      {
        img4: "",
      },
    ],
  },
  {
    imgUrl: "images/zawadi.jpg",
    name: "Zawadi Male",
    gallery: [
      {
        img1: "",
      },
      {
        img2: "",
      },
      {
        img3: "",
      },
      {
        img4: "",
      },
    ],
  },
  {
    imgUrl: "images/mogako.jpg",
    name: "Mogako Male",
    gallery: [
      {
        img1: "",
      },
      {
        img2: "",
      },
      {
        img3: "",
      },
      {
        img4: "",
      },
    ],
  },
  {
    imgUrl: "images/nandi.jpg",
    name: "Nandi Female",
    gallery: [
      {
        img1: "",
      },
      {
        img2: "",
      },
      {
        img3: "",
      },
      {
        img4: "",
      },
    ],
  },
  {
    imgUrl: "images/makatane.jpg",
    name: "Makatane Male",
    gallery: [
      {
        img1: "",
      },
      {
        img2: "",
      },
      {
        img3: "",
      },
      {
        img4: "",
      },
    ],
  },
  {
    imgUrl: "/images/tree.jpg",
    name: "Kgodisa Female",
    idCard: "images/kgodisa-id-card.jpg",
    gallery: [
      {
        img1: "images/kgodisa1.jpg",
      },
      {
        img2: "images/kgodisa2.jpg",
      },
      {
        img3: "images/kgodisa3.jpg",
      },
      {
        img4: "images/kgodisa4.jpg",
      },
    ],
  },
];

const leopardIdCardsSorted = leopardIdCards.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
});

export default leopardIdCardsSorted;
