import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;

    .total-sum {
        padding: 10px;
    }
`;

export const CloseButton = styled(CancelIcon)`
  cursor: pointer;
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  transition: all .2s;

  :hover {
      transform: translateY(-1px) scale(1.1);
  }
`;

export const CheckoutButton = styled(Button)`
  align-self: center;
  border: 3px solid grey;
  box-shadow: 1px 5px 5px lightgrey;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 200px;
  transition: all 0.2s;

  :hover {
    transform: translateY(-1px);
  }

  :disabled {
    border: 3px solid lightgrey;
    cursor: not-allowed;
  }
`;