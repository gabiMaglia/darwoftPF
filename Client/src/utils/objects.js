export const isAnEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

export const parseItemForCart = (item) => {
  return {
    _id: item._id,
    name:item.name,
    price: item.price,
    stock: item.stock,
    quantity: 0,
  };
};
