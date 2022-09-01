import { Div } from './styles';
const Base = () => {
  return <Screen />;
};

const Screen = () => {
  return (
    <section>
      <Div>Navbar</Div>
      <Div>Content</Div>
      <Div>Footer</Div>
    </section>
  );
};
export default Base;
