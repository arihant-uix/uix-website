import { H3, H4 } from './styles';
import Link from 'next/link';

const LinkConfig = [
  { link: '/OurServices', label: 'Our services' },
  { link: '/OurTeam', label: 'Our team' },
  { link: '/AboutUs', label: 'About us' },
  { link: '/JoinUs', label: 'Join us' },
  { link: '/GetInTouch', label: 'Get in touch' },
];
const RightHeader = () => {
  return (
    <H3>
      {LinkConfig.map((link, index) => {
        return (
          <H4 key={index}>
            <Link href={link.link}>{link.label}</Link>
          </H4>
        );
      })}
    </H3>
  );
};

export default RightHeader;
