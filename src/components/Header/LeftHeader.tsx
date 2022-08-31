import { H3, H1 } from './styles';
import BrandLogo from './BrandLogo';

const LeftHeader = () => {
  return (
    //use box instead h3
    <H3>
      <BrandLogo />
      <H1>UIX Labs</H1>
    </H3>
  );
};

export default LeftHeader;
