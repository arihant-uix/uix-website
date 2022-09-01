import { H3 } from './styles';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

const Header = () => {
  return (
    <H3>
      <LeftHeader />
      <RightHeader />
    </H3>
  );
};

export default Header;
