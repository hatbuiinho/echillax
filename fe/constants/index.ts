export const RegexConstants = {
  phone: {
    vn: new RegExp(/^0*(9|3|8|7|5)([0-9]{8})$/),
    global: new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/),
  },
};
