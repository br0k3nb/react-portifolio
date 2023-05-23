import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 25px 50px -12px #111827;
  border-color:${props => props.theme.colors.border};
  border-bottom-color:${props => props.theme.colors.bottomBorder};
  color: ${props => props.theme.colors.text};
`;