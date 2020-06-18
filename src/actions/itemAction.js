export const addItem = (text) => ({
  type: 'ADDITEM',
  data: text,
});

export const removeItem = (key) => ({
  type: 'REMOVEITEM',
  key: key,
});
