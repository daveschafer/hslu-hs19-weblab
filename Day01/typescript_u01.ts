class App {

  // missing interface. Read exercise below:
  createUser(name: string): User {
    return {
      id: 123,
      name: name,
      settings: {
        settingA: 123,
        settingB: 456,
      }
    }
  }
}

interface User {
  id: number;
  name: string;
  settings: Settings;
}

interface Settings {
  settingA: any;
  settingB: any;
}


let user = new App().createUser('Andreas');
console.log(user);



