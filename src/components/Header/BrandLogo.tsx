import Image from 'next/image';

const BrandLogo = () => {
  return (
    <Image
      src="/images/uixlogo.png"
      alt="."
      width="50"
      height="50"
      objectFit="contain"
      priority
    ></Image>
  );
};

export default BrandLogo;
