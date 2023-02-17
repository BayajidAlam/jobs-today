import React from 'react';
import ExperiencedJobs from '../../components/ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../../components/FresherJobs/FresherJobs';
import Header from '../../components/Header/Header';
import TopItCompany from '../../components/TopItCompany/TopItCompany';

const Home = () => {
  return (
    <div className='bg-base-300'>
          <Header/>
          <FresherJobs/>
          <ExperiencedJobs/>
          <TopItCompany/>
    </div>
  );
};

export default Home;