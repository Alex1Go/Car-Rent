import { Formik } from 'formik';
import { carOptions } from '../marka.js';
import { Label, Input, Forma, Block, Btn } from './AutoForm.styled.jsx';

const CustomSelectComponent = props => {
  const { options, ...inputProps } = props;
  return (
    <select {...inputProps}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const AutoForm = () => {
  return (
    <Block>
      <Formik
        initialValues={{
          carBrand: '',
          price: '',
          mileage: '',
        }}
        onSubmit={values => {}}
      >
        <Forma>
          <Label>
            Car brand
            <Input
              name="carBrand"
              as={CustomSelectComponent}
              options={carOptions}
              placeholder="Select Car Brand"
            />
          </Label>
          <Label>
            Price/1 hour
            <Input as="select" id="price" name="price" placeholder="To $">
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
            </Input>
          </Label>
          <Label>
            Car mileage / km
            <Input name="mileage" placeholder="From" width="160" />
          </Label>
          <Input name="mileage" placeholder="To" width="160px" />
          <Btn type="submit">Search</Btn>
        </Forma>
      </Formik>
    </Block>
  );
};
