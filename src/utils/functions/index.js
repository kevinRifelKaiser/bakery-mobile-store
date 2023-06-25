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

export const validateEmail = (text, required, max, min) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValid = true;

  if (required && text.trim().length === 0) isValid = false;
  if (text && !emailRegex.test(text.toLowerCase())) isValid = false;
  if (max && text.length > max) isValid = false;
  if (min !== null && text.length < min) isValid = false;

  return isValid;
};
