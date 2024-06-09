import React from 'react';
import { MainLayout } from '../layouts';
import WeatherPage from '../components/core/WeatherPage';

function HomePage() {
  return (
    <MainLayout>
      <section>
        <WeatherPage />
      </section>
    </MainLayout>
  );
}

export default HomePage;
