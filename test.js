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

  onRouteChange = () => {
    this.setState;
  };
}

const app = new App();

const Header = () => {

};

// How to update only 1 of 1000s of children?

const List = () => {
  const selectedId = signal(0);

  const handleTitleSet = (newSelectedId) => {
    title.set(newSelectedId);
  };

  return (props) => (
    <div>
      <Item id={1} selected={selectedId === 1} />
      <Item id={2} selected={selectedId === 2} />
      <Item id={3} selected={selectedId === 3} />
    </div>
  );
};

const Item = () => {
  return ({ id, onSelect }) => (
    <div onClick={() => onSelect(id)}>
      {id}
    </div>
  );
};
