import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { XMLParser } from 'fast-xml-parser';

import Input from '../UI/Input';

import { Grid, Box, Text } from '@chakra-ui/react';

const Form = styled.form`
  margin: 15px;
`;

const genderOptions = [
  { title: '先生', value: 'male' },
  { title: '女士', value: 'female' },
];

export default function Address() {
  const [counties, setCounties] = useState([]);
  const getCounties = async () => {
    const parser = new XMLParser();
    const res = await fetch('https://api.nlsc.gov.tw/other/ListCounty');
    const data = await res.text();
    const counties = parser.parse(data).countyItems.countyItem.map((item) => ({
      title: item.countyname,
      value: item.countyname,
    }));
    setCounties(counties);
  };

  useEffect(() => {
    getCounties();
  }, []);

  return (
    <Box>
      <Text m={'1rem'} fontSize={'1.5rem'} fontWeight={'700'}>寄送地址</Text>
      <Form>
        <Grid templateColumns={'1fr 1fr'}>
          <Input
            tagType='select'
            title='稱謂'
            id='gender'
            options={genderOptions}
            pr={'30'}
          />
          <Input
            tagType='input'
            id='name'
            title='姓名'
            placeholder='請輸入姓名'
          />
        </Grid>
        <Input
          tagType='input'
          id='tel'
          title='電話'
          type='tel'
          placeholder='請輸入行動電話'
        />
        <Input
          tagType='input'
          id='email'
          title='Email'
          type='email'
          placeholder='請輸入電子郵件'
        />
        <Input
          tagType='select'
          id='city'
          title='縣市'
          options={counties}
          placeholder='請選擇縣市'
        />
        <Input
          tagType='input'
          id='address'
          title='地址'
          placeholder='請輸入地址'
        />
      </Form>
    </Box>
  );
}
