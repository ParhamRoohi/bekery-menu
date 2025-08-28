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
  //
  // {
  //   ProductID: 1,
  //   Title: "قهوه اسپرسو",
  //   ProductImage: "",
  //   Description: "اسپرسویی غلیظ و خوش‌طعم برای شروع روز.",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 450,
  //     PrevPrice: 500,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 2,
  //   Title: "لاته",
  //   ProductImage: "",
  //   Description: "قهوه با شیر بخار داده شده و فوم خوشمزه.",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 550,
  //     PrevPrice: 600,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 3,
  //   Title: "کاپوچینو",
  //   ProductImage: "",
  //   Description: "مخلوطی خوشمزه از اسپرسو، شیر و فوم.",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 520,
  //     PrevPrice: 570,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 4,
  //   Title: "قهوه فرانسه",
  //   ProductImage: "",
  //   Description: "قهوه‌ای ملایم و مناسب برای مصرف روزانه.",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 480,
  //     PrevPrice: 520,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "موکا",
  //   ProductImage: "",
  //   Description: "ترکیب قهوه و شکلات برای طعمی دلنشین.",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 600,
  //     PrevPrice: 600,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 6,
  //   Title: "آیس لاته",
  //   ProductImage: "",
  //   Description: "قهوه‌ای خنک و شیرین برای روزهای گرم.",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 580,
  //     PrevPrice: 630,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 7,
  //   Title: "آیس موکا",
  //   ProductImage: "",
  //   Description: "موکای خنک با شکلات و یخ فراوان.",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 620,
  //     PrevPrice: 670,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 8,
  //   Title: "چای ماسالا",
  //   ProductImage: "",
  //   Description: "چای هندی با ادویه‌های گرم و معطر.",
  //   Category: {
  //     CategoryFA: "نوشیدنی سنتی",
  //     CategoryEN: "Traditional Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 530,
  //     PrevPrice: 580,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 9,
  //   Title: "آب‌میوه طبیعی پرتقال",
  //   ProductImage: "",
  //   Description: "آب پرتقال تازه و طبیعی بدون شکر افزوده.",
  //   Category: {
  //     CategoryFA: "نوشیدنی طبیعی",
  //     CategoryEN: "Natural Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 400,
  //     PrevPrice: 450,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 10,
  //   Title: "آب‌میوه سیب",
  //   ProductImage: "",
  //   Description: "آب سیب طبیعی و خنک، مناسب برای تمامی سنین.",
  //   Category: {
  //     CategoryFA: "نوشیدنی طبیعی",
  //     CategoryEN: "Natural Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 390,
  //     PrevPrice: 420,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 11,
  //   Title: "کیک شکلاتی",
  //   ProductImage: "",
  //   Description: "کیکی نرم و خوش‌طعم با لایه‌های شکلاتی.",
  //   Category: {
  //     CategoryFA: "دسر",
  //     CategoryEN: "Dessert",
  //   },
  //   Price: {
  //     CurrentPrice: 480,
  //     PrevPrice: 500,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 12,
  //   Title: "چیزکیک توت‌فرنگی",
  //   ProductImage: "",
  //   Description: "چیزکیکی خوشمزه با لایه‌ای از توت‌فرنگی تازه.",
  //   Category: {
  //     CategoryFA: "دسر",
  //     CategoryEN: "Dessert",
  //   },
  //   Price: {
  //     CurrentPrice: 520,
  //     PrevPrice: 570,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 13,
  //   Title: "براونی",
  //   ProductImage: "",
  //   Description: "براونی شکلاتی با بافتی نرم و خوش‌طعم.",
  //   Category: {
  //     CategoryFA: "دسر",
  //     CategoryEN: "Dessert",
  //   },
  //   Price: {
  //     CurrentPrice: 460,
  //     PrevPrice: 490,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 14,
  //   Title: "بیسکوییت جو",
  //   ProductImage: "",
  //   Description: "بیسکوییتی سالم با جو پرک و عسل طبیعی.",
  //   Category: {
  //     CategoryFA: "میان‌وعده",
  //     CategoryEN: "Snack",
  //   },
  //   Price: {
  //     CurrentPrice: 350,
  //     PrevPrice: 380,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 15,
  //   Title: "کوکی شکلاتی",
  //   ProductImage: "",
  //   Description: "کوکی پر از چیپس شکلات، مناسب با قهوه.",
  //   Category: {
  //     CategoryFA: "میان‌وعده",
  //     CategoryEN: "Snack",
  //   },
  //   Price: {
  //     CurrentPrice: 330,
  //     PrevPrice: 360,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 16,
  //   Title: "قهوه ترک",
  //   ProductImage: "",
  //   Description: "قهوه‌ای غلیظ با عطر و طعم سنتی.",
  //   Category: {
  //     CategoryFA: "نوشیدنی سنتی",
  //     CategoryEN: "Traditional Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 500,
  //     PrevPrice: 550,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 17,
  //   Title: "شیک شکلات",
  //   ProductImage: "",
  //   Description: "شیک شکلاتی غلیظ با بستنی و شیر تازه.",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 590,
  //     PrevPrice: 640,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 18,
  //   Title: "شیک موز",
  //   ProductImage: "",
  //   Description: "شیک موزی انرژی‌زا با طعم طبیعی موز.",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 570,
  //     PrevPrice: 600,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 19,
  //   Title: "ساندویچ مرغ گریل",
  //   ProductImage: "",
  //   Description: "ساندویچی سالم و خوشمزه با مرغ گریل شده.",
  //   Category: {
  //     CategoryFA: "غذای سبک",
  //     CategoryEN: "Light Meal",
  //   },
  //   Price: {
  //     CurrentPrice: 850,
  //     PrevPrice: 900,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 20,
  //   Title: "پانینی سبزیجات",
  //   ProductImage: "",
  //   Description: "پانینی گرم با سبزیجات تازه و پنیر موزارلا.",
  //   Category: {
  //     CategoryFA: "غذای سبک",
  //     CategoryEN: "Light Meal",
  //   },
  //   Price: {
  //     CurrentPrice: 780,
  //     PrevPrice: 830,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 1,
  //   Title: "اسپرسو",
  //   ProductImage: "",
  //   Description: "اسپرسویی غلیظ و خوش‌طعم برای شروع روز.",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 90,
  //     PrevPrice: 90,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 2,
  //   Title: "لاته",
  //   ProductImage: "",
  //   Description: "قهوه با شیر بخار داده شده و فوم خوشمزه",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه ",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 130,
  //     PrevPrice: 130,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 3,
  //   Title: "کاپوچینو",
  //   ProductImage: "",
  //   Description: "مخلوطی خوشمزه از اسپرسو، شیر و فوم",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 120,
  //     PrevPrice: 120,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "موکا",
  //   ProductImage: "",
  //   Description: "ترکیب قهوه و شکلات برای طعمی دلنشین",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 150,
  //     PrevPrice: 150,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "آمریکانو",
  //   ProductImage: "",
  //   Description: "ترکیب قهوه و آب",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 110,
  //     PrevPrice: 110,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "رگولار",
  //   ProductImage: "",
  //   Description: "قهوه دمی",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 80,
  //     PrevPrice: 80,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "آفاگاتو",
  //   ProductImage: "",
  //   Description: "اسپرسو با بستنی",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم بر پایه قهوه",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 160,
  //     PrevPrice: 160,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 6,
  //   Title: "آیس رگولار",
  //   ProductImage: "",
  //   Description: "سرد دمی",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد بر پایه قهوه",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 80,
  //     PrevPrice: 80,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 7,
  //   Title: "آیس موکا",
  //   ProductImage: "",
  //   Description: "موکای خنک با شکلات و یخ فراوان",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد بر پایه قهوه",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 160,
  //     PrevPrice: 160,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 7,
  //   Title: "آیس آمریکانو",
  //   ProductImage: "",
  //   Description: "  اسپرسو با یخ و آب",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد بر پایه قهوه",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 110,
  //     PrevPrice: 110,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 7,
  //   Title: "آیس لاته",
  //   ProductImage: "",
  //   Description: "  اسپرسو با یخ و شیر",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد بر پایه قهوه",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 130,
  //     PrevPrice: 130,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 7,
  //   Title: "اسپرسو تونیک",
  //   ProductImage: "",
  //   Description: " اسپرسو با آب گازدار و لیمو",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد بر پایه قهوه",
  //     CategoryEN: "Cold Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 180,
  //     PrevPrice: 180,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "چای سیاه",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نوشیدنی گرم",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 60,
  //     PrevPrice: 60,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "پیناکولادا ",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 230,
  //     PrevPrice: 230,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "هاوایی ",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 200,
  //     PrevPrice: 200,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "آیس تی هلو ",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 160,
  //     PrevPrice: 160,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "جینجر بیر",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 130,
  //     PrevPrice: 130,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "رفرشر لیمو",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نوشیدنی سرد",
  //     CategoryEN: "Hot Drink",
  //   },
  //   Price: {
  //     CurrentPrice: 100,
  //     PrevPrice: 100,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "چاپاتا",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نان",
  //     CategoryEN: "Bread",
  //   },
  //   Price: {
  //     CurrentPrice: 35,
  //     PrevPrice: 35,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "سیمیت",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "نان",
  //     CategoryEN: "Bread",
  //   },
  //   Price: {
  //     CurrentPrice: 85,
  //     PrevPrice: 85,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "رول دارچین",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "پیستری",
  //     CategoryEN: "Pastry",
  //   },
  //   Price: {
  //     CurrentPrice: 105,
  //     PrevPrice: 105,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "رول نوتلا فندق",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "پیستری",
  //     CategoryEN: "Pastry",
  //   },
  //   Price: {
  //     CurrentPrice: 115,
  //     PrevPrice: 115,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "کوکی دبل چاکلت",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "کوکی و کیک",
  //     CategoryEN: "Cookies and cakes",
  //   },
  //   Price: {
  //     CurrentPrice: 90,
  //     PrevPrice: 90,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "کوکی جو و کرن بری ",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "کوکی و کیک",
  //     CategoryEN: "Cookies and cakes",
  //   },
  //   Price: {
  //     CurrentPrice: 95,
  //     PrevPrice: 95,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "سیمیت دیپ پیازچه و گردو",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "صبحانه و میان وعده",
  //     CategoryEN: "Breakfast and snacks",
  //   },
  //   Price: {
  //     CurrentPrice: 159,
  //     PrevPrice: 159,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: "سیمیت بوقلمون",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "صبحانه و میان وعده",
  //     CategoryEN: "Breakfast and snacks",
  //   },
  //   Price: {
  //     CurrentPrice: 298,
  //     PrevPrice: 298,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: " سیمیت بیکن",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "صبحانه و میان وعده",
  //     CategoryEN: "Breakfast and snacks",
  //   },
  //   Price: {
  //     CurrentPrice: 288,
  //     PrevPrice: 288,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: " چاپاتا بیکن",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "صبحانه و میان وعده",
  //     CategoryEN: "Breakfast and snacks",
  //   },
  //   Price: {
  //     CurrentPrice: 288,
  //     PrevPrice: 288,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: " چاپاتا بوقلمون",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "صبحانه و میان وعده",
  //     CategoryEN: "Breakfast and snacks",
  //   },
  //   Price: {
  //     CurrentPrice: 298,
  //     PrevPrice: 298,
  //   },
  //   Quantity: 0,
  // },
  // {
  //   ProductID: 5,
  //   Title: " چاپاتا مرغ تندری",
  //   ProductImage: "",
  //   Description: " چای سیاه خوش عطر",
  //   Category: {
  //     CategoryFA: "صبحانه و میان وعده",
  //     CategoryEN: "Breakfast and snacks",
  //   },
  //   Price: {
  //     CurrentPrice: 298,
  //     PrevPrice: 298,
  //   },
  //   Quantity: 0,
  // },
  {
    ProductID: 1,
    Title: "اسپرسو",
    ProductImage: "",
    Description:
      "قهوه‌ای غلیظ و پرعطر با طعمی قوی و بی‌نظیر برای عاشقان قهوه خالص",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 90,
      PrevPrice: 90,
    },
    Quantity: 0,
  },
  {
    ProductID: 2,
    Title: "لاته",
    ProductImage: "",
    Description:
      "ترکیبی نرم از اسپرسو و شیر بخار داده شده با لایه ای از فوم شیر",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 130,
      PrevPrice: 130,
    },
    Quantity: 0,
  },
  {
    ProductID: 3,
    Title: "کاپوچینو",
    ProductImage: "",
    Description: "تعادل کامل اسپرسو، شیر گرم و فوم شیر با تزئین پودر کاکائو",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 120,
      PrevPrice: 120,
    },
    Quantity: 0,
  },
  {
    ProductID: 4,
    Title: "موکا",
    ProductImage: "",
    Description:
      "ترکیب دلنشین اسپرسو، شیر و شکلات برای تجربه‌ای شیرین و انرژی‌بخش",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 150,
      PrevPrice: 150,
    },
    Quantity: 0,
  },
  {
    ProductID: 5,
    Title: "آمریکانو",
    ProductImage: "",
    Description: "اسپرسویی رقیق شده با آب داغ برای طعمی ملایم‌تر و حجم بیشتر",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 110,
      PrevPrice: 110,
    },
    Quantity: 0,
  },
  {
    ProductID: 6,
    Title: "رگولار",
    ProductImage: "",
    Description: "قهوه دمی سنتی با عطری غنی و طعمی اصیل و به یاد ماندنی",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 80,
      PrevPrice: 80,
    },
    Quantity: 0,
  },
  {
    ProductID: 7,
    Title: "آفاگاتو",
    ProductImage: "",
    Description: "اسپرسوی داغ همراه با بستنی وانیلی برای ترکیبی گرم و سرد لذیذ",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 160,
      PrevPrice: 160,
    },
    Quantity: 0,
  },
  {
    ProductID: 8,
    Title: "آیس رگولار",
    ProductImage: "",
    Description: "قهوه دمی سرد شده با یخ، طراوتبخش و انرژی‌زا برای روزهای گرم",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 80,
      PrevPrice: 80,
    },
    Quantity: 0,
  },
  {
    ProductID: 9,
    Title: "آیس موکا",
    ProductImage: "",
    Description:
      "نوشیدنی خنک ترکیبی از اسپرسو، شکلات، شیر و یخ، topped with whipped cream",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 150,
      PrevPrice: 150,
    },
    Quantity: 0,
  },
  {
    ProductID: 10,
    Title: "آیس آمریکانو",
    ProductImage: "",
    Description:
      "اسپرسوی خنک شده با آب و یخ، انتخابی ایده‌آل برای طرفداران قهوه ملایم",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 110,
      PrevPrice: 110,
    },
    Quantity: 0,
  },
  {
    ProductID: 11,
    Title: "آیس لاته",
    ProductImage: "",
    Description: "اسپرسو با شیر سرد و یخ، نرم و خامه‌ای با طعمی ملایم و دلپذیر",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 130,
      PrevPrice: 130,
    },
    Quantity: 0,
  },
  {
    ProductID: 12,
    Title: "اسپرسو تونیک",
    ProductImage: "",
    Description:
      "ترکیب نوآورانه اسپرسو با آب تونیک و لیمو، تجربه‌ای منحصر به فرد از طعم‌ها",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 180,
      PrevPrice: 180,
    },
    Quantity: 0,
  },
  {
    ProductID: 13,
    Title: "چای سیاه",
    ProductImage: "",
    Description:
      "چای سیاه اصیل ایرانی با عطری خوش و طعمی غنی، دمی شده به روش سنتی",
    Category: {
      CategoryFA: "نوشیدنی گرم",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 60,
      PrevPrice: 60,
    },
    Quantity: 0,
  },
  {
    ProductID: 14,
    Title: "پیناکولادا",
    ProductImage: "",
    Description:
      "نوشیدنی استوایی ترکیب آناناس، نارگیل و شیر، با طعمی شیرین و گرمسیری",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 230,
      PrevPrice: 230,
    },
    Quantity: 0,
  },
  {
    ProductID: 15,
    Title: "هاوایی",
    ProductImage: "",
    Description:
      "ترکیب میوه‌های استوایی شامل آناناس، نارگیل و انبه با یخ خرد شده",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 200,
      PrevPrice: 200,
    },
    Quantity: 0,
  },
  {
    ProductID: 16,
    Title: "آیس تی هلو",
    ProductImage: "",
    Description: "چای سرد شده با طعم هلو طبیعی، طراوتبخش و کمی شیرین",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 160,
      PrevPrice: 160,
    },
    Quantity: 0,
  },
  {
    ProductID: 17,
    Title: "جینجر بیر",
    ProductImage: "",
    Description: "نوشیدنی زنجبیلی تند و شیرین با ریشه‌های طبیعی زنجبیل و لیمو",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 130,
      PrevPrice: 130,
    },
    Quantity: 0,
  },
  {
    ProductID: 18,
    Title: "رفرشر لیمو",
    ProductImage: "",
    Description:
      "نوشیدنی لیمویی ترش و شیرین با نعناع تازه، ایده‌آل برای روزهای گرم",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 100,
      PrevPrice: 100,
    },
    Quantity: 0,
  },
  {
    ProductID: 19,
    Title: "چاپاتا",
    ProductImage: "",
    Description: "نان سنتی هندی نازک و نرم، پخته شده با آرد کامل و بدون مخمر",
    Category: {
      CategoryFA: "نان",
      CategoryEN: "Bread",
    },
    Price: {
      CurrentPrice: 35,
      PrevPrice: 35,
    },
    Quantity: 0,
  },
  {
    ProductID: 20,
    Title: "سیمیت",
    ProductImage: "",
    Description: "نان حلقوی ترکیه‌ای پوشیده از کنجد، ترد outside و نرم inside",
    Category: {
      CategoryFA: "نان",
      CategoryEN: "Bread",
    },
    Price: {
      CurrentPrice: 85,
      PrevPrice: 85,
    },
    Quantity: 0,
  },
  {
    ProductID: 21,
    Title: "رول دارچین",
    ProductImage: "",
    Description:
      "رول نرم و شیرین پر شده با دارچین و شکر، topped with glaze icing",
    Category: {
      CategoryFA: "پیستری",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 105,
      PrevPrice: 105,
    },
    Quantity: 0,
  },
  {
    ProductID: 22,
    Title: "رول نوتلا فندق",
    ProductImage: "",
    Description: "رول خمیری پر شده با نوتلا و فندق خرد شده، topped with شکلات",
    Category: {
      CategoryFA: "پیستری",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 115,
      PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 23,
    Title: "کوکی دبل چاکلت",
    ProductImage: "",
    Description: "کوکی شکلاتی پر از chunks شکلات شیری و تلخ برای عاشقان شکلات",
    Category: {
      CategoryFA: "کوکی و کیک",
      CategoryEN: "Cookies and cakes",
    },
    Price: {
      CurrentPrice: 90,
      PrevPrice: 90,
    },
    Quantity: 0,
  },
  {
    ProductID: 24,
    Title: "کوکی جو و کرن بری",
    ProductImage: "",
    Description: "کوکی جو دوسر با کرن بری خشک و گردو، ترکیبی از تردی و شیرینی",
    Category: {
      CategoryFA: "کوکی و کیک",
      CategoryEN: "Cookies and cakes",
    },
    Price: {
      CurrentPrice: 95,
      PrevPrice: 95,
    },
    Quantity: 0,
  },
  {
    ProductID: 25,
    Title: "سیمیت دیپ پیازچه و گردو",
    ProductImage: "",
    Description: "سیمیت همراه با دیپ خامه‌ای پیازچه تازه و گردو خرد شده",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 159,
      PrevPrice: 159,
    },
    Quantity: 0,
  },
  {
    ProductID: 26,
    Title: "سیمیت بوقلمون",
    ProductImage: "",
    Description: "سیمیت پر شده با بوقلمون، پنیر، کاهو و گوجه فرنگی",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 298,
      PrevPrice: 298,
    },
    Quantity: 0,
  },
  {
    ProductID: 27,
    Title: "سیمیت بیکن",
    ProductImage: "",
    Description: "سیمیت پر شده با بیکن ترد، پنیر چدار و تخم مرغ",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 288,
      PrevPrice: 288,
    },
    Quantity: 0,
  },
  {
    ProductID: 28,
    Title: "چاپاتا بیکن",
    ProductImage: "",
    Description: "چاپاتای پر شده با بیکن، پنیر، قارچ و سس مخصوص",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 288,
      PrevPrice: 288,
    },
    Quantity: 0,
  },
  {
    ProductID: 29,
    Title: "چاپاتا بوقلمون",
    ProductImage: "",
    Description: "چاپاتای پر شده با بوقلمون، پنیر فتا، اسفناج و سس کرانبری",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 298,
      PrevPrice: 298,
    },
    Quantity: 0,
  },
  {
    ProductID: 30,
    Title: "چاپاتا مرغ تندری",
    ProductImage: "",
    Description: "چاپاتای پر شده با مرغ تندری، کاهو، گوجه و سس مایو",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 315,
      PrevPrice: 315,
    },
    Quantity: 0,
  },
];
