class Charles {
  readonly input: string
  // Your code here

  hey(input = "Whatever") {
    input = input.trim();

    if (input == "") {
      return `Fine. Be that way!`
    }

    else if (input.includes("Charles")) {
      console.log("Fine. Be that way!")
      return `Fine. Be that way!`
    }

    else if (input.endsWith("?")) {
      console.log("Sure.")
      return `Sure.`
    }

    else if ((input == input.toUpperCase() && input.endsWith("!")) || input == input.toUpperCase() && !this.isOnlyNumeric(input)) {
      console.log("Whoa, chill out!")
      return `Whoa, chill out!`
    }

    else {
      console.log("Whatever.")
      return `Whatever.`
    }
  }

  isOnlyNumeric(input) {
    if (/^[0-9, ]+$/.test(input)) {
      return true;
    }
    else {
      return false;
    }
  }

}


const charles2 = new Charles()
charles2.hey("hallo Charles")
charles2.hey("How are you?")
charles2.hey("hurry!")


charles2.hey("was gibt es sonst?")


export default Charles