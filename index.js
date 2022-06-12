function fn(...c) {
    if (!c.every((e) => Number.isNumber(e)))
      throw "All arguments must be numbers.";
    return c.reduce((e, b) => e + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.