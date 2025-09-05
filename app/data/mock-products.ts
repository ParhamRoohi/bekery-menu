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
    ProductID: 1,
    Title: "اسپرسو",
    ProductImage: "../../public/images/esperso.png",
    Description:
      "قهوه‌ای غلیظ و پرعطر با طعمی قوی و بی‌نظیر برای عاشقان قهوه خالص",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 90,
      //PrevPrice: 90,
    },
    Quantity: 0,
  },
  {
    ProductID: 2,
    Title: "لاته",
    ProductImage: "../../public/images/latte.png",
    Description:
      "ترکیبی نرم از اسپرسو و شیر بخار داده شده با لایه ای از فوم شیر",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 130,
      //PrevPrice: 130,
    },
    Quantity: 0,
  },
  {
    ProductID: 3,
    Title: "کاپوچینو",
    ProductImage: "../../public/images/capochino.png",
    Description: "تعادل کامل اسپرسو، شیر گرم و فوم شیر با تزئین پودر کاکائو",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 120,
      //PrevPrice: 120,
    },
    Quantity: 0,
  },
  {
    ProductID: 4,
    Title: "موکا",
    ProductImage: "../../public/images/mocha.png",
    Description:
      "ترکیب دلنشین اسپرسو، شیر و شکلات برای تجربه‌ای شیرین و انرژی‌بخش",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 150,
      //PrevPrice: 150,
    },
    Quantity: 0,
  },
  {
    ProductID: 5,
    Title: "آمریکانو",
    ProductImage: "../../public/images/americano.png",
    Description: "اسپرسویی رقیق شده با آب داغ برای طعمی ملایم‌تر و حجم بیشتر",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 110,
      //PrevPrice: 110,
    },
    Quantity: 0,
  },
  {
    ProductID: 6,
    Title: "رگولار",
    ProductImage: "../../public/images/americano.png",
    Description: "قهوه دمی سنتی با عطری غنی و طعمی اصیل و به یاد ماندنی",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 80,
      //PrevPrice: 80,
    },
    Quantity: 0,
  },
  {
    ProductID: 7,
    Title: "آفاگاتو",
    ProductImage: "../../public/images/effagato.png",
    Description: "اسپرسوی داغ همراه با بستنی وانیلی برای ترکیبی گرم و سرد لذیذ",
    Category: {
      CategoryFA: "نوشیدنی گرم بر پایه قهوه",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 160,
      //PrevPrice: 160,
    },
    Quantity: 0,
  },
  {
    ProductID: 8,
    Title: "آیس رگولار",
    ProductImage: "../../public/images/ice-americano.png",
    Description: "قهوه دمی سرد شده با یخ، طراوتبخش و انرژی‌زا برای روزهای گرم",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 80,
      //PrevPrice: 80,
    },
    Quantity: 0,
  },
  {
    ProductID: 9,
    Title: "آیس موکا",
    ProductImage: "../../public/images/ice-mocha.png",
    Description: "نوشیدنی خنک ترکیبی از اسپرسو، شکلات، شیر و یخ",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 150,
      //PrevPrice: 150,
    },
    Quantity: 0,
  },
  {
    ProductID: 10,
    Title: "آیس آمریکانو",
    ProductImage: "../../public/images/ice-americano.png",
    Description:
      "اسپرسوی خنک شده با آب و یخ، انتخابی ایده‌آل برای طرفداران قهوه ملایم",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 110,
      //PrevPrice: 110,
    },
    Quantity: 0,
  },
  {
    ProductID: 11,
    Title: "آیس لاته",
    ProductImage: "../../public/images/ice-latte.png",
    Description: "اسپرسو با شیر سرد و یخ، نرم و خامه‌ای با طعمی ملایم و دلپذیر",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 130,
      //PrevPrice: 130,
    },
    Quantity: 0,
  },
  {
    ProductID: 12,
    Title: "اسپرسو تونیک",
    ProductImage: "../../public/images/tonic.png",
    Description:
      "ترکیب نوآورانه اسپرسو با آب تونیک و لیمو، تجربه‌ای منحصر به فرد از طعم‌ها",
    Category: {
      CategoryFA: "نوشیدنی سرد بر پایه قهوه",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 180,
      //PrevPrice: 180,
    },
    Quantity: 0,
  },
  {
    ProductID: 13,
    Title: "چای سیاه",
    ProductImage: "../../public/images/tea.png",
    Description:
      "چای سیاه اصیل ایرانی با عطری خوش و طعمی غنی، دمی شده به روش سنتی",
    Category: {
      CategoryFA: "نوشیدنی گرم",
      CategoryEN: "Hot Drink",
    },
    Price: {
      CurrentPrice: 60,
      //PrevPrice: 60,
    },
    Quantity: 0,
  },
  {
    ProductID: 14,
    Title: "پیناکولادا",
    ProductImage: "../../public/images/pina.png",
    Description:
      "نوشیدنی استوایی ترکیب آناناس، نارگیل و شیر، با طعمی شیرین و گرمسیری",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 230,
      //PrevPrice: 230,
    },
    Quantity: 0,
  },
  {
    ProductID: 15,
    Title: "هاوایی",
    ProductImage: "../../public/images/havai.png",
    Description:
      "ترکیب میوه‌های استوایی شامل آناناس، نارگیل و انبه با یخ خرد شده",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 200,
      //PrevPrice: 200,
    },
    Quantity: 0,
  },
  {
    ProductID: 16,
    Title: "آیس تی هلو",
    ProductImage: "../../public/images/ice-tea.png",
    Description: "چای سرد شده با طعم هلو طبیعی، طراوتبخش و کمی شیرین",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 160,
      //PrevPrice: 160,
    },
    Quantity: 0,
  },
  {
    ProductID: 17,
    Title: "جینجر بیر",
    ProductImage: "../../public/images/ginger.png",
    Description: "نوشیدنی زنجبیلی تند و شیرین با ریشه‌های طبیعی زنجبیل و لیمو",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 130,
      //PrevPrice: 130,
    },
    Quantity: 0,
  },
  {
    ProductID: 18,
    Title: "رفرشر لیمو",
    ProductImage: "../../public/images/lemon.png",
    Description:
      "نوشیدنی لیمویی ترش و شیرین با نعناع تازه، ایده‌آل برای روزهای گرم",
    Category: {
      CategoryFA: "نوشیدنی سرد",
      CategoryEN: "Cold Drink",
    },
    Price: {
      CurrentPrice: 100,
      //PrevPrice: 100,
    },
    Quantity: 0,
  },
  {
    ProductID: 19,
    Title: "چاپاتا",
    ProductImage: "../../public/images/chapata.png",
    Description: "نان سنتی هندی نازک و نرم، پخته شده با آرد کامل و بدون مخمر",
    Category: {
      CategoryFA: "نان",
      CategoryEN: "Bread",
    },
    Price: {
      CurrentPrice: 35,
      //PrevPrice: 35,
    },
    Quantity: 0,
  },
  {
    ProductID: 20,
    Title: "سیمیت",
    ProductImage: "../../public/images/simit.png",
    Description: "نان حلقوی ترکیه‌ای پوشیده از کنجد، ترد outside و نرم inside",
    Category: {
      CategoryFA: "نان",
      CategoryEN: "Bread",
    },
    Price: {
      CurrentPrice: 85,
      //PrevPrice: 85,
    },
    Quantity: 0,
  },
  {
    ProductID: 21,
    Title: "رول دارچین",
    ProductImage: "../../public/images/cinamon-rolle.png",
    Description: "رول نرم و شیرین پر شده با دارچین و شکر",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 105,
      //PrevPrice: 105,
    },
    Quantity: 0,
  },
  {
    ProductID: 22,
    Title: "رول نوتلا فندق",
    ProductImage: "../../public/images/nutella.png",
    Description: "رول خمیری پر شده با نوتلا و فندق خرد شده",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 115,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 23,
    Title: "کوکی دبل چاکلت",
    ProductImage: "../../public/images/double-chocolate-cookie.png",
    Description: "کوکی  پر از شکلات",
    Category: {
      CategoryFA: "کوکی و کیک",
      CategoryEN: "Cookies and cakes",
    },
    Price: {
      CurrentPrice: 70,
      //PrevPrice: 90,
    },
    Quantity: 0,
  },
  {
    ProductID: 24,
    Title: "کوکی جو و کرن بری",
    ProductImage: "../../public/images/barley-cranberry-cookies.png",
    Description: "کوکی جو دوسر با کرن بری خشک و گردو، ترکیبی از تردی و شیرینی",
    Category: {
      CategoryFA: "کوکی و کیک",
      CategoryEN: "Cookies and cakes",
    },
    Price: {
      CurrentPrice: 75,
      //PrevPrice: 95,
    },
    Quantity: 0,
  },
  {
    ProductID: 25,
    Title: "سیمیت دیپ پیازچه و گردو",
    ProductImage: "../../public/images/simit-cheese.png",
    Description: "سیمیت همراه با دیپ خامه‌ای پیازچه تازه و گردو خرد شده",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 159,
      //PrevPrice: 159,
    },
    Quantity: 0,
  },
  {
    ProductID: 26,
    Title: "سیمیت بوقلمون",
    ProductImage: "../../public/images/simit-turkey.png",
    Description: "سیمیت پر شده با بوقلمون، پنیر، کاهو و گوجه فرنگی",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 398,
      //PrevPrice: 298,
    },
    Quantity: 0,
  },
  {
    ProductID: 27,
    Title: "سیمیت بیکن",
    ProductImage: "../../public/images/simit-bacon.png",
    Description: "سیمیت پر شده با بیکن ترد، پنیر چدار و تخم مرغ",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 388,
      //PrevPrice: 288,
    },
    Quantity: 0,
  },
  {
    ProductID: 28,
    Title: "چاپاتا بیکن",
    ProductImage: "../../public/images/chapata-bacon.png",
    Description: "چاپاتای پر شده با بیکن، پنیر، قارچ و سس مخصوص",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 388,
      //PrevPrice: 288,
    },
    Quantity: 0,
  },
  {
    ProductID: 29,
    Title: "چاپاتا بوقلمون",
    ProductImage: "../../public/images/chapata-turkey.png",
    Description: "چاپاتای پر شده با بوقلمون، پنیر فتا، اسفناج و سس کرانبری",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 398,
      //PrevPrice: 298,
    },
    Quantity: 0,
  },
  {
    ProductID: 30,
    Title: "چاپاتا مرغ تندوری",
    ProductImage: "../../public/images/tandoori-chicken-chapata.png",
    Description: "چاپاتای پر شده با مرغ تندری، کاهو، گوجه و سس مایو",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 398,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 31,
    Title: "کوکی مارشملو",
    ProductImage: "../../public/images/marshmallow-cookie.png",
    Description:
      "کوکی مارشملو؛ ترد، شیرین و پر از تکه‌های نرم و خوشمزه مارشملو",
    Category: {
      CategoryFA: "کوکی و کیک",
      CategoryEN: "Cookies and cakes",
    },
    Price: {
      CurrentPrice: 75,
      //PrevPrice: 95,
    },
    Quantity: 0,
  },
  {
    ProductID: 32,
    Title: "چیز کیک سن سباستین",
    ProductImage: "../../public/images/san-sebastian-cheesecake.png",
    Description:
      "چیزکیک سن سباستین؛ خامه‌ای، لطیف و با رویه کاراملی برشته‌شده و خوش‌عطر",
    Category: {
      CategoryFA: "کوکی و کیک",
      CategoryEN: "Cookies and cakes",
    },
    Price: {
      CurrentPrice: 128,
      //PrevPrice: 95,
    },
    Quantity: 0,
  },
  {
    ProductID: 33,
    Title: "کیک براونی",
    ProductImage: "../../public/images/brownie-cake.png",
    Description: "کیک براونی؛ نرم، غلیظ و سرشار از طعم شکلات واقعی",
    Category: {
      CategoryFA: "کوکی و کیک",
      CategoryEN: "Cookies and cakes",
    },
    Price: {
      CurrentPrice: 90,
      //PrevPrice: 95,
    },
    Quantity: 0,
  },
  {
    ProductID: 34,
    Title: "مافین بیکن",
    ProductImage: "../../public/images/bacon-muffins.png",
    Description: "مافین پر شده با بیکن",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 115,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 35,
    Title: "مافین بوقلمون",
    ProductImage: "../../public/images/turkey-muffins.png",
    Description: "مافین پر شده با بوقلمون",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 110,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 36,
    Title: "شات سیروپ",
    ProductImage: "../../public/images/syrup-shot.png",
    Description: "",
    Category: {
      CategoryFA: "تاپینگ",
      CategoryEN: "Topping",
    },
    Price: {
      CurrentPrice: 35,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 37,
    Title: "کرم آیسینگ",
    ProductImage: "../../public/images/icing-cream.png",
    Description: "",
    Category: {
      CategoryFA: "تاپینگ",
      CategoryEN: "Topping",
    },
    Price: {
      CurrentPrice: 35,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 38,
    Title: "بستنی",
    ProductImage: "../../public/images/ice-cream.png",
    Description: "",
    Category: {
      CategoryFA: "تاپینگ",
      CategoryEN: "Topping",
    },
    Price: {
      CurrentPrice: 45,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 39,
    Title: "شیر نارگیل",
    ProductImage: "../../public/images/milk.png",
    Description: "",
    Category: {
      CategoryFA: "تاپینگ",
      CategoryEN: "Topping",
    },
    Price: {
      CurrentPrice: 50,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 40,
    Title: "شیر بادام",
    ProductImage: "../../public/images/milk.png",
    Description: "",
    Category: {
      CategoryFA: "تاپینگ",
      CategoryEN: "Topping",
    },
    Price: {
      CurrentPrice: 50,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 41,
    Title: "کروسان",
    ProductImage: "../../public/images/Croissant.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 119,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 42,
    Title: "کروسان شکلات",
    ProductImage: "../../public/images/Chocolate-croissant.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 285,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 43,
    Title: "کروسان پسته",
    ProductImage: "../../public/images/Pistachio-croissant.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 188,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
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
      CurrentPrice: 175,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 45,
    Title: "چاکلت توییست",
    ProductImage: "../../public/images/Chocolate-twist.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 138,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 46,
    Title: "چاکلت پن",
    ProductImage: "../../public/images/Chocolate-pan.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 288,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 47,
    Title: "رول نیویورکی شکلاتی",
    ProductImage: "../../public/images/Chocolate-new-york-oll.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 287,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 48,
    Title: "رول نیویورکی پسته",
    ProductImage: "../../public/images/New-York-pistachio-roll.png",
    Description: "",
    Category: {
      CategoryFA: "لایه ای",
      CategoryEN: "Pastry",
    },
    Price: {
      CurrentPrice: 198,
      //PrevPrice: 115,
    },
    Quantity: 0,
  },
  {
    ProductID: 49,
    Title: "کروسان دیپ پیازچه و گردو",
    ProductImage: "../../public/images/croissant-dip-spring-onion.png",
    Description: "",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 188,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 50,
    Title: "کروسان بوقلمون",
    ProductImage: "../../public/images/Turkey-croissant.png",
    Description: "",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 318,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
  {
    ProductID: 51,
    Title: "کروسان بیکن",
    ProductImage: "../../public/images/Bacon-croissant.png",
    Description: "",
    Category: {
      CategoryFA: "صبحانه و میان وعده",
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 313,
      //PrevPrice: 315,
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
      CategoryEN: "Breakfast and snacks",
    },
    Price: {
      CurrentPrice: 188,
      //PrevPrice: 315,
    },
    Quantity: 0,
  },
];
