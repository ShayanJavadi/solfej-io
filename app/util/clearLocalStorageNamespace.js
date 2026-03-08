export default async namespace => {
  if (!localStorage) {
    return;
  }

  return Promise.all(Object.keys(localStorage)
    .filter(key => key.includes(namespace))
    .map(key => localStorage.removeItem(key)));
};