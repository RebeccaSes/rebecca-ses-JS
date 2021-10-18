const person = {
  getName: () => {
    return 'Numele Tau';
  },
  getAge: () => {
    return 42;
  },
};

const accesor = () => {
  const methodName = 'get' + methodSuffix;

  return person[methodName]();
};

console.log(accessor('Name'));
