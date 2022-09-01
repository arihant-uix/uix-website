import styled from 'styled-components';
import { Color } from 'uikit';

export const H3 = styled.h3`
  font-weight: 400;
  color: ${Color.white};
  background: ${Color.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
  height: 13vh;
  position: absoulte;
  margin: 0px;
`;

export const H1 = styled.h1`
  color: ${Color.white};
  font-family: 'Familjen Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
`;

export const H4 = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  gap: 33px;
  margin-left: 45px;
`;
