class Component {
  constructor() {
    console.log(Object.keys(Object.getPrototypeOf(this)));

    this.proxy = new Proxy(this, {
      get(target, prop, receiver) {
        console.log("get", target, prop, receiver);

        return "hello";
      },

      set(target, prop, receiver) {
        console.log("set", target, prop, receiver);
      }
    });
  }
}

class App extends Component {
  title = "Hello";

  constructor() {
    super();

    console.log(Object.keys(this));

    // console.log(this.proxy.title);
  }
}

const app = new App();
