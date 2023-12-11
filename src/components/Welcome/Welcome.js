import { Block, Text, Title } from './Welcome.styled';

export const Welcome = () => {
  return (
    <div>
      <Title>Welcome to Car Rent</Title>
      <Block>
        <img
          src="https://driveforce.ua/assets/uploads/images/content/83626-rent-car.jpg"
          alt="car"
          style={{ width: '60%', height: '50%', borderRadius: '20px' }}
        />
        <Text>
          We have been operating in the Ukrainian passenger transportation
          market since 2012 in the business and premium class segments. We will
          provide you or your foreign guests with transfer from/to the airport
          not only in Kyiv, but also in any city in Ukraine, transfer from and
          to the railway station, as well as a car with a driver for trips
          around the city and country. We will help you make the right
          impression of the country on your foreign guests and colleagues coming
          to Ukraine on business or leisure. We train our drivers so they are
          polite and helpful, opening the door if necessary and helping with
          luggage. Our managers will accept your order not only on the same day,
          but also in advance, and will provide you with a choice of any
          transport option - from a passenger car to a large bus with 74 seats.
          To order both in Kyiv and throughout Ukraine, you will have a single
          point of contact to coordinate all the details. This level of service
          is difficult to achieve when ordering a taxi to the airport.
        </Text>
      </Block>
    </div>
  );
};
