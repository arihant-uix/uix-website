import { Box, Heading } from 'uikit';
import BrandLogo from './BrandLogo';

const LeftHeader = () => {
  return (
    <Box display="flex" flexDirection="row" marginLeft="10px">
      <BrandLogo />
      <Heading level={2} marginLeft="0.75vw">
        UIX Labs
      </Heading>
    </Box>
  );
};

export default LeftHeader;
