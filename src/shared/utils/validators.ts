export const onlyString = (value: any): boolean => {
  if (value) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    return regex.exec(value) !== null;
  } else {
    return true;
  }
};
