type Product = {
  ProductID: number;
  Title: string;
  ProductImage: string;
  Description: string;
  Category: { CategoryFA: string; CategoryEN: string };
  Price: { CurrentPrice: number; PrevPrice: number };
  Quantity: number;
};
export const products: Product[] = [
  {
    ProductID: 1,
    Title: "قهوه اسپرسو",
    ProductImage: "../../public/images/product-sample.png",
    Description: "اسپرسویی غلیظ و خوش‌طعم برای شروع روز.",
    Category: {
      CategoryFA: "نوشیدنی گرم",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 45000,
      PrevPrice: 50000,
    },
    Quantity: 50,
  },
  {
    ProductID: 2,
    Title: "لاته",
    ProductImage: "../../public/images/product-sample.png",
    Description: "قهوه با شیر بخار داده شده و فوم خوشمزه.",
    Category: {
      CategoryFA: "نوشیدنی گرم",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 55000,
      PrevPrice: 60000,
    },
    Quantity: 40,
  },
  {
    ProductID: 3,
    Title: "کاپوچینو",
    ProductImage: "../../public/images/product-sample.png",
    Description: "مخلوطی خوشمزه از اسپرسو، شیر و فوم.",
    Category: {
      CategoryFA: "نوشیدنی گرم",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 52000,
      PrevPrice: 57000,
    },
    Quantity: 30,
  },
  {
    ProductID: 4,
    Title: "قهوه فرانسه",
    ProductImage: "../../public/images/product-sample.png",
    Description: "قهوه‌ای ملایم و مناسب برای مصرف روزانه.",
    Category: {
      CategoryFA: "نوشیدنی گرم",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 48000,
      PrevPrice: 52000,
    },
    Quantity: 45,
  },
  {
    ProductID: 5,
    Title: "موکا",
    ProductImage: "../../public/images/product-sample.png",
    Description: "ترکیب قهوه و شکلات برای طعمی دلنشین.",
    Category: {
      CategoryFA: "نوشیدنی گرم",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 60000,
      PrevPrice: 65000,
    },
    Quantity: 25,
  },
  {
    ProductID: 6,
    Title: "آیس لاته",
    ProductImage: "../../public/images/product-sample.png",
    Description: "قهوه‌ای خنک و شیرین برای روزهای گرم.",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 58000,
      PrevPrice: 63000,
    },
    Quantity: 20,
  },
  {
    ProductID: 7,
    Title: "آیس موکا",
    ProductImage: "../../public/images/product-sample.png",
    Description: "موکای خنک با شکلات و یخ فراوان.",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 62000,
      PrevPrice: 67000,
    },
    Quantity: 18,
  },
  {
    ProductID: 8,
    Title: "چای ماسالا",
    ProductImage: "../../public/images/product-sample.png",
    Description: "چای هندی با ادویه‌های گرم و معطر.",
    Category: {
      CategoryFA: "نوشیدنی سنتی",
      CategoryEN: "Traditional Drink",
    },
    Price: {
      CurrentPrice: 53000,
      PrevPrice: 58000,
    },
    Quantity: 22,
  },
  {
    ProductID: 9,
    Title: "آب‌میوه طبیعی پرتقال",
    ProductImage: "../../public/images/product-sample.png",
    Description: "آب پرتقال تازه و طبیعی بدون شکر افزوده.",
    Category: {
      CategoryFA: "نوشیدنی طبیعی",
      CategoryEN: "Natural Drink",
    },
    Price: {
      CurrentPrice: 40000,
      PrevPrice: 45000,
    },
    Quantity: 30,
  },
  {
    ProductID: 10,
    Title: "آب‌میوه سیب",
    ProductImage: "../../public/images/product-sample.png",
    Description: "آب سیب طبیعی و خنک، مناسب برای تمامی سنین.",
    Category: {
      CategoryFA: "نوشیدنی طبیعی",
      CategoryEN: "Natural Drink",
    },
    Price: {
      CurrentPrice: 39000,
      PrevPrice: 42000,
    },
    Quantity: 28,
  },
  {
    ProductID: 11,
    Title: "کیک شکلاتی",
    ProductImage: "../../public/images/product-sample.png",
    Description: "کیکی نرم و خوش‌طعم با لایه‌های شکلاتی.",
    Category: {
      CategoryFA: "دسر",
      CategoryEN: "Dessert",
    },
    Price: {
      CurrentPrice: 48000,
      PrevPrice: 50000,
    },
    Quantity: 10,
  },
  {
    ProductID: 12,
    Title: "چیزکیک توت‌فرنگی",
    ProductImage: "../../public/images/product-sample.png",
    Description: "چیزکیکی خوشمزه با لایه‌ای از توت‌فرنگی تازه.",
    Category: {
      CategoryFA: "دسر",
      CategoryEN: "Dessert",
    },
    Price: {
      CurrentPrice: 52000,
      PrevPrice: 57000,
    },
    Quantity: 12,
  },
  {
    ProductID: 13,
    Title: "براونی",
    ProductImage: "../../public/images/product-sample.png",
    Description: "براونی شکلاتی با بافتی نرم و خوش‌طعم.",
    Category: {
      CategoryFA: "دسر",
      CategoryEN: "Dessert",
    },
    Price: {
      CurrentPrice: 46000,
      PrevPrice: 49000,
    },
    Quantity: 15,
  },
  {
    ProductID: 14,
    Title: "بیسکوییت جو",
    ProductImage: "../../public/images/product-sample.png",
    Description: "بیسکوییتی سالم با جو پرک و عسل طبیعی.",
    Category: {
      CategoryFA: "میان‌وعده",
      CategoryEN: "Snack",
    },
    Price: {
      CurrentPrice: 35000,
      PrevPrice: 38000,
    },
    Quantity: 20,
  },
  {
    ProductID: 15,
    Title: "کوکی شکلاتی",
    ProductImage: "../../public/images/product-sample.png",
    Description: "کوکی پر از چیپس شکلات، مناسب با قهوه.",
    Category: {
      CategoryFA: "میان‌وعده",
      CategoryEN: "Snack",
    },
    Price: {
      CurrentPrice: 33000,
      PrevPrice: 36000,
    },
    Quantity: 18,
  },
  {
    ProductID: 16,
    Title: "قهوه ترک",
    ProductImage: "../../public/images/product-sample.png",
    Description: "قهوه‌ای غلیظ با عطر و طعم سنتی.",
    Category: {
      CategoryFA: "نوشیدنی سنتی",
      CategoryEN: "Traditional Drink",
    },
    Price: {
      CurrentPrice: 50000,
      PrevPrice: 55000,
    },
    Quantity: 20,
  },
  {
    ProductID: 17,
    Title: "شیک شکلات",
    ProductImage: "../../public/images/product-sample.png",
    Description: "شیک شکلاتی غلیظ با بستنی و شیر تازه.",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 59000,
      PrevPrice: 64000,
    },
    Quantity: 22,
  },
  {
    ProductID: 18,
    Title: "شیک موز",
    ProductImage: "../../public/images/product-sample.png",
    Description: "شیک موزی انرژی‌زا با طعم طبیعی موز.",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 57000,
      PrevPrice: 60000,
    },
    Quantity: 19,
  },
  {
    ProductID: 19,
    Title: "ساندویچ مرغ گریل",
    ProductImage: "../../public/images/product-sample.png",
    Description: "ساندویچی سالم و خوشمزه با مرغ گریل شده.",
    Category: {
      CategoryFA: "غذای سبک",
      CategoryEN: "Light Meal",
    },
    Price: {
      CurrentPrice: 85000,
      PrevPrice: 90000,
    },
    Quantity: 14,
  },
  {
    ProductID: 20,
    Title: "پانینی سبزیجات",
    ProductImage: "../../public/images/product-sample.png",
    Description: "پانینی گرم با سبزیجات تازه و پنیر موزارلا.",
    Category: {
      CategoryFA: "غذای سبک",
      CategoryEN: "Light Meal",
    },
    Price: {
      CurrentPrice: 78000,
      PrevPrice: 83000,
    },
    Quantity: 16,
  },
];
