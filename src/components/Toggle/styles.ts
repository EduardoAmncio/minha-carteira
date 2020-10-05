import styled from 'styled-components';
import SwitchToggle, {ReactSwitchProps} from 'react-switch';

export const Container = styled.div `
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span `
  color: ${props => props.theme.colors.white};
`;

export const ToggleSelector = styled(SwitchToggle).attrs<ReactSwitchProps>(
  ({theme}) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  }))<ReactSwitchProps>`
    margin: 0px 7px
  `;