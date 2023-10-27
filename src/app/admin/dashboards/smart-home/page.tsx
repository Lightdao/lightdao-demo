'use client';
import AddDevice from 'components/admin/dashboards/smart-home/AddDevice';
import Consumption from 'components/admin/dashboards/smart-home/Consumption';
import General from 'components/admin/dashboards/smart-home/General';
import Home from 'components/admin/dashboards/smart-home/Home';
import Light from 'components/admin/dashboards/smart-home/Light';
import MapCard from 'components/admin/dashboards/smart-home/MapCard';
import Plan from 'components/admin/dashboards/smart-home/Plan';
import Temperature from 'components/admin/dashboards/smart-home/Temperature';
import Weather from 'components/admin/dashboards/smart-home/Weather';

const SmartHome = () => {
  return (
    <div className="mt-3 grid h-full w-full grid-cols-1 gap-5 lg:grid-cols-11">
      {/* left side */}
      <div className="col-span-11 h-fit w-full lg:col-span-8">
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 3xl:grid-cols-3">
          <div>
            <Home />
          </div>
          <div>
            <Temperature />
          </div>
          <div>
            <Weather />
          </div>
          <div>
            <Plan />
          </div>
          <div>
            <Light />
          </div>
          <div>
            <General />
          </div>
        </div>
        {/* Charts and upload device sectionn */}
        <div className="mt-5 grid h-full w-full grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6 xl:col-span-8">
            <Consumption />
          </div>
          <div className=" col-span-12 lg:col-span-6 xl:col-span-4">
            <AddDevice />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="col-span-11 w-full lg:col-span-3">
        <MapCard />
      </div>
    </div>
  );
};

export default SmartHome;
