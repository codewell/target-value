const targetValue = (func, ...args) => (event) =>
  func(event.target.value, ...args);

export default targetValue;
