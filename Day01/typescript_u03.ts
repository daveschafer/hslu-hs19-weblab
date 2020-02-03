class TwoFer {
  readonly name: string

  // Your code here
  constructor(name = "you") {
    this.name = name
    console.log("One for " + name + ", one for me")
  }

}

export default TwoFer

let myobj = new TwoFer("David");
let myobj2 = new TwoFer();