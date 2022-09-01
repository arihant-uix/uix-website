import Link from 'next/link';
import { Box, Text } from 'uikit';

const LinkConfig = [
  { link: '/OurServices', label: 'Our services' },
  { link: '/OurTeam', label: 'Our team' },
  { link: '/AboutUs', label: 'About us' },
  { link: '/JoinUs', label: 'Join us' },
  { link: '/GetInTouch', label: 'Get in touch' },
];
const RightHeader = () => {
  return (
    <Box display="flex" flex-direction="row">
      {LinkConfig.map((link, index) => {
        return (
          <Text key={index} marginLeft="3vw">
            <Link href={link.link}>{link.label}</Link>
          </Text>
        );
      })}
    </Box>
  );
};

export default RightHeader;
