const example_one = () => {
  //
  console.log("one");
  //
  setTimeout((_) => console.log("two"), 0);
  //
  Promise.resolve().then((_) => console.log("three"));
  //
  console.log("four");
};



// const example_two = () => {
example_one();