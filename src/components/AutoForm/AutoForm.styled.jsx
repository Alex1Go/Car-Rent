import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Block = styled.div`
  width: 859px;
  height: 74px;
`;

export const Forma = styled(Form)`
  gap: 18px;
  display: flex;
  height: 74px;
`;

export const Label = styled.label`
  display: block;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;
export const Input = styled(Field)`
  width: auto;
  //display: block;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  color: #121417;
  border-radius: 14px;
  background: #f7f7fb;
  cursor: pointer;
  margin-top: 8px;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: none;
  &:focus {
    outline: rgb(202, 208, 223);
  }
`;
export const Btn = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border: none;
  cursor: pointer;
  margin-top: auto;

  &:hover,
  :focus {
    background: rgb(11, 68, 205);
  }
`;
