    // Example 1
    function outer () {
      const outerVar = "Hey, I am the outer Var!";
      return function inner() {
        const innerVar = "Hey, I am the inner Var!";
        console.log(innerVar);
        console.log(outerVar);
      }
      // Or return inner(); here and function inner() up without the return
    }

    const innerFn = outer();
    innerFn();

    // Example 2
    function createGreeting(greeting = "") {
      const myGreet = greeting.toUpperCase();
      return function (name) {
        return `${myGreet} ${name}`;
      }
    }
   
    const sayHello = createGreeting("hello");
    const sayHey = createGreeting("hey");
    console.log(sayHello("Perdi"));
    console.log(sayHello("Sara"))
    console.log(sayHey("Lume"))

    // Example 3
    function createGame(gameName) {
      let score = 0;
      return function win() {
        score++;
        return `Your name ${gameName} score is ${score}`
      }
    }

    const tennisGame = createGame('Tennis');
    const footballGame = createGame('Football');

    //console.log(tennisGame())
    //console.log(footballGame())