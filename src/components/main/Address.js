import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { XMLParser } from 'fast-xml-parser';

import Input from '../UI/Input';

import { Grid, Box, Text, useMediaQuery } from '@chakra-ui/react';

const Form = styled.form`
  margin: 15px;
  @media (min-width: 780px) {
    margin: 0;
  }
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

  const [isLargerThan780] = useMediaQuery('(min-width:780px)');

  return (
    <Box>
      <Text m={'1rem'} fontSize={'1.5rem'} fontWeight={'700'}>
        寄送地址
      </Text>
      <Form>
        <Grid
          gridTemplateColumns={isLargerThan780 ? 'repeat(6, 65px)' : '1fr 1fr'}
          gridGap={isLargerThan780 ? 'calc((100% - 390px)/5)' : ''}
        >
          <Input
            gridArea={isLargerThan780 ? 'auto/1/auto/3' : ''}
            tagType='select'
            title='稱謂'
            id='gender'
            options={genderOptions}
            pr={isLargerThan780 ? '' : '30'}
          />
          <Input
            gridArea={isLargerThan780 ? 'auto/3/auto/7' : ''}
            tagType='input'
            id='name'
            title='姓名'
            placeholder='請輸入姓名'
          />
          <Input
            gridArea={isLargerThan780 ? 'auto/1/auto/4' : 'auto/1/auto/3'}
            tagType='input'
            id='tel'
            title='電話'
            type='tel'
            placeholder='請輸入行動電話'
          />
          <Input
            gridArea={isLargerThan780 ? 'auto/4/auto/7' : 'auto/1/auto/3'}
            tagType='input'
            id='email'
            title='Email'
            type='email'
            placeholder='請輸入電子郵件'
          />
          <Input
            gridArea={isLargerThan780 ? 'auto/1/auto/3' : 'auto/1/auto/3'}
            tagType='select'
            id='city'
            title='縣市'
            options={counties}
            placeholder='請選擇縣市'
          />
          <Input
            gridArea={isLargerThan780 ? 'auto/3/auto/7' : 'auto/1/auto/3'}
            tagType='input'
            id='address'
            title='地址'
            placeholder='請輸入地址'
          />
        </Grid>
      </Form>
    </Box>
  );
}
