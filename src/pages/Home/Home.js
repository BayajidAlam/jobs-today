import React from 'react';
import ExperiencedJobs from '../../components/ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../../components/FresherJobs/FresherJobs';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div>
          <Header/>
          <FresherJobs/>
          <ExperiencedJobs/>
    </div>
  );
};

export default Home;