import React from 'react';
import { MainLayout } from '../layouts';
import WeatherPage from '../components/core/WeatherPage';

function HomePage() {
  return (
    <MainLayout>
      {/* wheather page */}
      <WeatherPage />
    </MainLayout>
  );
}

export default HomePage;
