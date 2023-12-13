const leopardIdCards = [
  {
    imgUrl:
      "images/gosebo.jpg",
    name: "Gosebo Male",
  },
  {
    imgUrl:
      "https://scontent.flba3-2.fna.fbcdn.net/v/t1.6435-9/167634316_10222749041208133_4001637953861654445_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=258fd2&_nc_ohc=evw44FaFLHgAX_H3EY_&_nc_ht=scontent.flba3-2.fna&oh=00_AfCR9eJuk947Kbnw5AkMC5n1GkAck-X2T7UZUTR7lEODLQ&oe=659AA19C",
    name: "Serati Female",
  },
  {
    imgUrl:
      "https://scontent.flba3-2.fna.fbcdn.net/v/t1.6435-9/150215293_10160842675254778_5784240643750314826_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=258fd2&_nc_ohc=NITC7ER54gkAX9W3ZoH&_nc_ht=scontent.flba3-2.fna&oh=00_AfDTqvI8WhHmShHpczXHbjncm3nhivf4ayOSzJW-6N6dRQ&oe=659AA0B3",
    name: "Kimbia Female",
  },
  {
    imgUrl:
      "https://scontent.flba3-1.fna.fbcdn.net/v/t1.18169-9/16508044_10206384335726695_8649725216296321220_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=258fd2&_nc_ohc=DPj747qCi3MAX90ySxm&_nc_ht=scontent.flba3-1.fna&oh=00_AfCSGgXJWFjHWZcT_HIyBBVMF_sc2cytzlMEM6EZiyKhDw&oe=659AB70A",
    name: "Clover Male",
  },
  {
    imgUrl:
      "https://scontent.flba3-2.fna.fbcdn.net/v/t1.18169-9/15192607_10205856398208587_705270772442712420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=258fd2&_nc_ohc=zoLFphjdm6QAX-V4gMA&_nc_ht=scontent.flba3-2.fna&oh=00_AfBAnTiRBo8FxD_9YK7XOyQe8Iy9syMoPeCccs9vGdva4w&oe=659AB01E",
    name: "Motsamai Female",
  },
  {
    imgUrl: "images/zawadi.jpg",
    name: "Zawadi Male",
  },
  {
    imgUrl: "images/mogako.jpg",
    name: "Mogako Male"
  },
  {
    imgUrl: "images/nandi.jpg",
    name: "Nandi Female",
  },
  {
    imgUrl: "https://scontent.flba3-2.fna.fbcdn.net/v/t1.6435-9/121775611_10160310409108448_875029685273673639_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=258fd2&_nc_ohc=sLsxoDgsjlcAX8DLZbV&_nc_ht=scontent.flba3-2.fna&oh=00_AfCR1dDOPGyL_7NwhZqZ05f31esYzMcOU33RmJ14dIc8PA&oe=659B15A6",
    name: "Makatane Male",
  },
  {
    imgUrl: "https://scontent.flba3-1.fna.fbcdn.net/v/t31.18172-8/21414727_10207739353281287_1325416215287139443_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=258fd2&_nc_ohc=pW1Rtn6vIHMAX_NcR3X&_nc_ht=scontent.flba3-1.fna&oh=00_AfBlYe0VSTHGmQ9petG0HIac7u3OQw54YiiChEwhav9FwA&oe=659B048E",
    name: "Kgodisa Female",
  },
  
];

const leopardIdCardsSorted = leopardIdCards.sort((a, b)=> {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
})

export default leopardIdCardsSorted;

// {
//     imgUrl: "",
//     name: "",
// }
