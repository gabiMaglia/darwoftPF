import mainPic from "../assets/pngObjectSample/Iphone.png";
import pic1 from "../assets/pngObjectSample/Iphone2.png";
import pic2 from "../assets/pngObjectSample/Iphone3.png";

export const productObject = [
  {
    name: "iPhone 13",
    price: 799,
    images: [mainPic, pic1, pic2],
    productDescription: {
      smallDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      memory: "128GB",
      features: {
        chip: {
          name: "A15 Bionic",
          cores: "6-core",
          architecture: "64-bit",
        },
        camera: {
          main: "12MP wide and ultra-wide cameras",
          features: [
            "Dual optical image stabilization",
            "Night mode",
            "4K Dolby Vision HDR recording",
          ],
          front: {
            resolution: "12MP",
            features: ["Night mode", "4K video recording", "Slow-motion video"],
          },
        },
        screen: {
          type: "Super Retina XDR display",
          size: "6.1 inch",
          resolution: "2532 x 1170 pixels at 460 ppi",
          features: ["HDR10", "True Tone", "Wide color (P3)", "Haptic Touch"],
        },
        battery: {
          capacity: "Typically 3095 mAh",
          features: [
            "Up to 17 hours video playback",
            "MagSafe and Qi wireless charging",
          ],
        },
        storage: {
          options: ["128GB", "256GB", "512GB"],
        },
        waterResistance: {
          rating: "IP68",
          depth: "Up to 6 meters for 30 minutes",
        },
        operatingSystem: {
          name: "iOS",
          version: "Latest iOS version",
        },
        body: {
          material: "Aerospace-grade aluminum",
          colors: ["Pink", "Blue", "Midnight", "Starlight", "(PRODUCT)RED"],
        },
      },
    },
    warranty: "1 Year",
    isActive: true,
    isFeatured: true,
    soldCount: 0,

    productStock: [
      {
        color: "Pink",
        amount: 10,
      },
      {
        color: "Blue",
        amount: 15,
      },
      {
        color: "Midnight",
        amount: 20,
      },
      {
        color: "(PRODUCT)RED",
        amount: 8,
      },
    ],
    categoryGroup: "Cellphones",
    productCategory: {
      catName: "Smartphones",
      image: "https://example.com/smartphone_category.jpg",
    },
    productBrand: {
      brandName: "Apple",
      brandHomePage: "https://www.apple.com",
    },
  },
  {
    name: "iPhone 15",
    price: 1799,
    images: [mainPic, pic1, pic2],
    productDescription: {
      smallDescription:
        "Lorem Ipsum is simply dumm and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      memory: "128GB",
      features: {
        chip: {
          name: "A15 Bionic",
          cores: "6-core",
          architecture: "64-bit",
        },
        camera: {
          main: "12MP wide and ultra-wide cameras",
          features: [
            "Dual optical image stabilization",
            "Night mode",
            "4K Dolby Vision HDR recording",
          ],
          front: {
            resolution: "12MP",
            features: ["Night mode", "4K video recording", "Slow-motion video"],
          },
        },
        screen: {
          type: "Super Retina XDR display",
          size: "6.1 inch",
          resolution: "2532 x 1170 pixels at 460 ppi",
          features: ["HDR10", "True Tone", "Wide color (P3)", "Haptic Touch"],
        },
        battery: {
          capacity: "Typically 3095 mAh",
          features: [
            "Up to 17 hours video playback",
            "MagSafe and Qi wireless charging",
          ],
        },
        storage: {
          options: ["128GB", "256GB", "512GB"],
        },
        waterResistance: {
          rating: "IP68",
          depth: "Up to 6 meters for 30 minutes",
        },
        operatingSystem: {
          name: "iOS",
          version: "Latest iOS version",
        },
        body: {
          material: "Aerospace-grade aluminum",
          colors: ["Pink", "Blue", "Midnight", "Starlight", "(PRODUCT)RED"],
        },
      },
    },
    warranty: "1 Year",
    isActive: true,
    isFeatured: true,
    soldCount: 0,

    productStock: [
      {
        color: "Pink",
        amount: 10,
      },
      {
        color: "Blue",
        amount: 15,
      },
      {
        color: "Midnight",
        amount: 20,
      },
      {
        color: "(PRODUCT)RED",
        amount: 8,
      },
    ],
    categoryGroup: "Cellphones",
    productCategory: {
      catName: "Smartphones",
      image: "https://example.com/smartphone_category.jpg",
    },
    productBrand: {
      brandName: "Apple",
      brandHomePage: "https://www.apple.com",
    },
  },
  {
    name: "iPhone 14",
    price: 599,
    images: [mainPic, pic1, pic2],
    productDescription: {
      smallDescription:
        "ry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      memory: "128GB",
      features: {
        chip: {
          name: "A15 Bionic",
          cores: "6-core",
          architecture: "64-bit",
        },
        camera: {
          main: "12MP wide and ultra-wide cameras",
          features: [
            "Dual optical image stabilization",
            "Night mode",
            "4K Dolby Vision HDR recording",
          ],
          front: {
            resolution: "12MP",
            features: ["Night mode", "4K video recording", "Slow-motion video"],
          },
        },
        screen: {
          type: "Super Retina XDR display",
          size: "6.1 inch",
          resolution: "2532 x 1170 pixels at 460 ppi",
          features: ["HDR10", "True Tone", "Wide color (P3)", "Haptic Touch"],
        },
        battery: {
          capacity: "Typically 3095 mAh",
          features: [
            "Up to 17 hours video playback",
            "MagSafe and Qi wireless charging",
          ],
        },
        storage: {
          options: ["128GB", "256GB", "512GB"],
        },
        waterResistance: {
          rating: "IP68",
          depth: "Up to 6 meters for 30 minutes",
        },
        operatingSystem: {
          name: "iOS",
          version: "Latest iOS version",
        },
        body: {
          material: "Aerospace-grade aluminum",
          colors: ["Pink", "Blue", "Midnight", "Starlight", "(PRODUCT)RED"],
        },
      },
    },
    warranty: "1 Year",
    isActive: true,
    isFeatured: true,
    soldCount: 0,

    productStock: [
      {
        color: "Pink",
        amount: 10,
      },
      {
        color: "Blue",
        amount: 15,
      },
      {
        color: "Midnight",
        amount: 20,
      },
      {
        color: "(PRODUCT)RED",
        amount: 8,
      },
    ],
    categoryGroup: "Cellphones",
    productCategory: {
      catName: "Smartphones",
      image: "https://example.com/smartphone_category.jpg",
    },
    productBrand: {
      brandName: "Apple",
      brandHomePage: "https://www.apple.com",
    },
  },
];
