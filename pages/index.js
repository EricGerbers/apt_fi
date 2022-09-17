import { PageTitle } from '../components/PageTitle';
import { HomeBanner } from '../src/home/banner';
import React from 'react'

const Index = (props) => {
  return (
    <>
      <PageTitle title='Aldrin | Do it different.' />
      <HomeBanner />
    </>
  );
};

export default Index;
