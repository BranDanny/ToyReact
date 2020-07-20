import { ToyReact, Component } from "./ToyReact.js";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Hola </span>
        <span>Mundo! </span>
        <div>{this.children}</div>
      </div>
    );
  }
}

let a = (
  <MyComponent name="a" id="ids">
    <div>123</div>
  </MyComponent>
);

ToyReact.render(a, document.body);
