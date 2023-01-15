import styled from 'styled-components';

export const NameText = styled.p`
  color: darkgray;
  font-weight: 700;
  background-color: bisque;

  &:hover {
    background-color: chocolate;
    color: aliceblue;
  }
`;
export const EmailText = styled.p`
  background-color: aliceblue;

  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

export const SpanText = styled.span`
  background: ${({ isRed }) => (isRed ? 'red' : 'yellow')};
  border: 1px solid blueviolet;

  ${NameText}:hover & {
    color: black;
  }
`;
