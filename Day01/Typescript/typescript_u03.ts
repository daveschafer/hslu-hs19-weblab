class TwoFer {
  readonly name: string

  // Your code here
  static twoFer(name = "you") {
    console.log("One for " + name + ", one for me.")
    //return ("One for " + name + ", one for me.");
    return `One for ${name}, one for me.`;
  }

}

export default TwoFer

TwoFer.twoFer("David");
TwoFer.twoFer();
