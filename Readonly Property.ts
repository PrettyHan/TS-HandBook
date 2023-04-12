let a: number[] = [1, 2, 3, 4];
let b: number[] = [3, 4, 5];
let ro: ReadonlyArray<number> = a;

// ro[0] = 12; // err
// ro.push(5); // err
// ro.length = 100; // err
// a = ro; // err

console.log(ro);
