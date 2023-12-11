import styled from 'styled-components';

export const Photo = styled.img`
  width: 274px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 12px;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;
export const Text = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const Span = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const Price = styled.p`
  color: #121417;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const Blockinfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
`;

export const Autoinfo = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin: 0px;
`;

export const Btn = styled.button`
  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  margin-top: auto;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`;
