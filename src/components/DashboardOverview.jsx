import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';


const DashboardOverview = () => (
  <div className='flex flex-col gap-2 p-5 '>
<div className="relative sm:w-full ml-7 w-[80%] flex items-center">
<span>🔍</span>


  <input
    type="text"
    placeholder="Search"
    className="px-3 py-1 pr-10 rounded-md w-full border border-transparent focus:outline-none focus:ring-0 focus:border-none"
    />
  <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
    🔔
  </span>
</div>


<div className='flex justify-between'>
<h2 className="text-2xl font-semibold ">Dashboard</h2>
<h4 className='text-slate-500'>This week v</h4>
</div>

  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
    <AnatomySection />
    <HealthStatusCards />
   
  </div>
  <ActivityFeed />
  </div>
);

export default DashboardOverview;