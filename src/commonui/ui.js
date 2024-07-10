import styled from 'styled-components';

export const Title = styled.h2`
    background-color : black;
    color : white;
    font-size : 50px;
    display : inline-block;
    padding : 10px;
`;
export const Abtn = styled.a`
    border:1px solid black;
    color: black;
    display:inline-block;
    padding:10px;
    border-radius: 15px;
    &:hover{
      background-color:black;
      color:white;
    }
`;

export const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background: ${props => props.primary ? 'white' : 'palevioletred'};
    color: ${props => props.primary ? 'palevioletred' : 'white'};
  }
`;

export const Buttoncolor = styled.button`
  background: ${props => props.bgcolor};
  color: ${props => props.textcolor};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Buttonany = styled.button`
  background: ${props => props.bgcolor};
  color: ${props => props.textcolor};
  font-size: ${props => props.fonstsize};
  font-family : ${props => props.fontfamily};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;