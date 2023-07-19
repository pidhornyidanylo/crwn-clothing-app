import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 700px) {
    min-width: 350px;
  }

  @media screen and (max-width: 500px) {
    min-width: 300px;
  }

  @media screen and (max-width: 400px) {
    min-width: 200px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 400px) {
    margin-left: 0;
  }
`;
