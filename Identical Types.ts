class Car {
  drive() {
    // hit the gas
    console.log("hit the gas");
  }
}
class Golfer {
  drive() {
    // hit the ball far
    console.log("hit the ball far");
  }
}

// No error?
let w: Car = new Golfer();
w.drive(); // hit the ball far
