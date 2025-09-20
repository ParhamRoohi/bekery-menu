type Product = {
  ProductID: number;
  Title: string;
  ProductImage: string;
  Description: string;
  Category: { CategoryFA: string; CategoryEN: string };
  Price: { CurrentPrice: number; PrevPrice?: number };
  Quantity: number;
};
export const products: Product[] = [
  {
    ProductID: 44,
    Title: "کروسان لوتوس",
    ProductImage: "../../public/images/Lotus-croissant.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 177,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },

  {
    ProductID: 52,
    Title: "گاتا گردویی",
    ProductImage: "../../public/images/Walnut-gata.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 188,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 53,
    Title: "مافین تخم مرغ + آمریکانو",
    ProductImage: "../../public/images/egg + coffee.png",
    Description: "",
    Category: {
      CategoryFA: "کمبو",
      CategoryEN: "Combo",
    },
    Price: {
      CurrentPrice: 170,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 54,
    Title: "مافین بوقلمون + آمریکانو",
    ProductImage: "../../public/images/turkey + coffee.png",
    Description: "",
    Category: {
      CategoryFA: "کمبو",
      CategoryEN: "Combo",
    },
    Price: {
      CurrentPrice: 187,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 55,
    Title: "مافین بیکن + آمریکانو",
    ProductImage: "../../public/images/becon + coffee.png",
    Description: "",
    Category: {
      CategoryFA: "کمبو",
      CategoryEN: "Combo",
    },
    Price: {
      CurrentPrice: 191,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 56,
    Title: "مافین تخم مرغ + رگولار",
    ProductImage: "../../public/images/egg + coffee.png",
    Description: "",
    Category: {
      CategoryFA: "کمبو",
      CategoryEN: "Combo",
    },
    Price: {
      CurrentPrice: 145,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 57,
    Title: "مافین بوقلمون + رگولار",
    ProductImage: "../../public/images/turkey + coffee.png",
    Description: "",
    Category: {
      CategoryFA: "کمبو",
      CategoryEN: "Combo",
    },
    Price: {
      CurrentPrice: 161,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 58,
    Title: "مافین بیکن + رگولار",
    ProductImage: "../../public/images/becon + coffee.png",
    Description: "",
    Category: {
      CategoryFA: "کمبو",
      CategoryEN: "Combo",
    },
    Price: {
      CurrentPrice: 165,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
];
