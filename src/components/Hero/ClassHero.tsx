import { Component } from 'react';

interface Props {
  children?: React.ReactNode;
}

export default class ClassHero extends Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
