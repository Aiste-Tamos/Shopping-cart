import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;

    .total-sum {
        border: 3px solid skyBlue;
        border-radius: 20px;
        padding: 10px;
        width: max-content;
    }
`;

export const StyledButton = styled(CancelIcon)`
  cursor: pointer;
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  transition: all .1s;

  :hover {
      transform: translateY(-1px) scale(1.1);
  }
`;