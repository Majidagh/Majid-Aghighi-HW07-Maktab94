const user = {};

function setterGenerator(arr) {
  return function (initValue) {
    this[arr] = initValue;
  };
}

const nameSetter = setterGenerator("name");
nameSetter.call(user, "Majid");
console.log(user);
