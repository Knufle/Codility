interface Props {
  children?: React.ReactNode;
}

export default function FunctionHero(props: Props) {
  return <div className="App">{props.children}</div>;
}
