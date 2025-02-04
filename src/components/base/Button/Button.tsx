import { Component } from "react";

interface ButtonProps {
  onClick: () => void;
  title: string;
}

export class Button extends Component<ButtonProps> {
  render() {
    const { onClick, title } = this.props;

    return <button onClick={onClick}>{title}</button>;
  }
}
