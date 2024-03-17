const leopardIdCards = [
  {
    imgUrl: "images/gosebo.jpg",
    name: "Gosebo Male",
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
    imgUrl:
      "https://scontent.flba3-2.fna.fbcdn.net/v/t1.6435-9/167634316_10222749041208133_4001637953861654445_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=258fd2&_nc_ohc=evw44FaFLHgAX_H3EY_&_nc_ht=scontent.flba3-2.fna&oh=00_AfCR9eJuk947Kbnw5AkMC5n1GkAck-X2T7UZUTR7lEODLQ&oe=659AA19C",
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
    imgUrl:
      "https://scontent.flba3-2.fna.fbcdn.net/v/t1.6435-9/150215293_10160842675254778_5784240643750314826_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=258fd2&_nc_ohc=NITC7ER54gkAX9W3ZoH&_nc_ht=scontent.flba3-2.fna&oh=00_AfDTqvI8WhHmShHpczXHbjncm3nhivf4ayOSzJW-6N6dRQ&oe=659AA0B3",
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
      "https://scontent.flba3-2.fna.fbcdn.net/v/t1.18169-9/15192607_10205856398208587_705270772442712420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=258fd2&_nc_ohc=zoLFphjdm6QAX-V4gMA&_nc_ht=scontent.flba3-2.fna&oh=00_AfBAnTiRBo8FxD_9YK7XOyQe8Iy9syMoPeCccs9vGdva4w&oe=659AB01E",
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
    imgUrl:
      "https://scontent.flba3-2.fna.fbcdn.net/v/t1.6435-9/121775611_10160310409108448_875029685273673639_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=258fd2&_nc_ohc=sLsxoDgsjlcAX8DLZbV&_nc_ht=scontent.flba3-2.fna&oh=00_AfCR1dDOPGyL_7NwhZqZ05f31esYzMcOU33RmJ14dIc8PA&oe=659B15A6",
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
];

const leopardIdCardsSorted = leopardIdCards.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
});

export default leopardIdCardsSorted;
