export const addItem = (text) => ({
  type: 'ADDITEM',
  payload: text,
});

export const removeItem = (text) => ({
  type: 'REMOVEITEM',
  payload: text,
});
