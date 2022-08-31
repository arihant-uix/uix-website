import Image from 'next/image';
import styled from 'styled-components';

const ImageWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
//use box instead of span div
const BrandLogo = () => {
  return (
    <ImageWrap>
      <Image
        src="/images/uixlogo.png"
        alt="."
        width="50"
        height="50"
        priority
      ></Image>
    </ImageWrap>
  );
};

export default BrandLogo;
