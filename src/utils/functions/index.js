export const formatDate = (time) => {
  const setDate = new Date(time);
  return setDate.toLocaleDateString();
};

export const sumTotal = (list) => {
  return list
    ?.map((listItem) => listItem.price * listItem.quantity)
    .reduce((a, b) => a + b, 0);
};

export const countItems = (items) => {
  return items?.map((item) => item.quantity).reduce((a, b) => a + b, 0);
};
