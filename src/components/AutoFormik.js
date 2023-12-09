import { Formik, Field, Form } from 'formik';
import { carOptions } from './marka.js';

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
    <Formik
      initialValues={{
        carBrand: '',
        price: '',
        mileage: '',
      }}
      onSubmit={values => {}}
    >
      <Form>
        <label>
          Car brand
          <Field
            name="carBrand"
            as={CustomSelectComponent}
            options={carOptions}
            placeholder="Select Car Brand"
          />
        </label>

        <label>
          Price/1 hour
          <Field as="select" id="price" name="price" placeholder="To $">
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </Field>
        </label>

        <label>
          Car mileage / km
          <Field id="mileage" name="mileage" placeholder="From" />
          <Field id="mileage" name="mileage" placeholder="To" />
        </label>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
