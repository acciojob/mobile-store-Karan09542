import React from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: "iPhone 13",
      price: 1000,
      image:
        "https://www.smartcellular.ae/media/catalog/product/cache/3ec2776cf177faf28eeb9afa1db4f35e/6/1/61l9ppriiql._sl1500__1__1.jpg",
      description:
        "Apple’s flagship smartphone with A15 Bionic chip and excellent camera performance.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S22",
      price: 950,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-ultra-s908-413037-sm-s908ezkgmea-530970280",
      description:
        "Premium Android phone with AMOLED display and powerful performance.",
    },
    {
      id: 3,
      name: "Google Pixel 7",
      price: 850,
      image:
        "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=90",
      description:
        "Premium Android phone with AMOLED display and powerful performance.",
    },
    {
      id: 4,
      name: "OnePlus 11",
      price: 800,
      image:
        "https://oasis.opstatics.com/content/dam/oasis/page/2023/in/product/11/marble.png",
      description:
        "Premium Android phone with AMOLED display and powerful performance.",
    },
    {
      id: 5,
      name: "Xiaomi 12 Pro",
      price: 780,
      image:
        "https://www.themobileindian.com/wp-content/uploads/2021/12/X12p.png",
      description:
        "Premium Android phone with AMOLED display and powerful performance.",
    },
    {
      id: 6,
      name: "Nothing Phone 2",
      price: 720,
      image:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24773343/nothing_phone_2_tease.jpg?quality=90&strip=all&crop=0,0,100,100",
      description:
        "Premium Android phone with AMOLED display and powerful performance.",
    },
    {
      id: 7,
      name: "Motorola Edge 30",
      price: 680,
      image:
        "https://rukminim2.flixcart.com/image/480/640/l2xmqvk0/mobile/o/r/n/-original-image674ydfks6se.jpeg?q=90",
      description:
        "Premium Android phone with AMOLED display and powerful performance.",
    },
    {
      id: 8,
      name: "Asus ROG Phone 6",
      price: 1200,
      image:
        "https://dlcdnwebimgs.asus.com/gain/FB338DAC-B312-4D25-A7A3-DBDBDBC123CA",
      description:
        "Premium Android phone with AMOLED display and powerful performance.",
    },
  ]);
  const updateProduct = (product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
  }
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  }
  return (
    <ProductContext.Provider value={{ products, updateProduct, deleteProduct, addProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};
