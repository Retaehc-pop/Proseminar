const example_one = () => {
  console.log("one");
  setTimeout((_) => console.log("two"), 0);
  Promise.resolve().then((_) => console.log("three"));
  console.log("four");
};

example_one();

// const example_two = () => {
