'use client';
import EagleView from 'components/admin/dashboards/car-interface/EagleView';
import MapCard from 'components/admin/dashboards/car-interface/MapCard';
import Phone from 'components/admin/dashboards/car-interface/Phone';

const CarInterface = () => {
  return (
    <div className="3xl:grid-cols-5 mt-3 grid h-full grid-cols-1 gap-5">
      {/* left side */}
      <div className="3xl:col-span-3 col-span-1 h-full w-full rounded-[20px] lg:grid-cols-11">
        <div className="grid h-full grid-cols-1 gap-5 lg:grid-cols-11">
          <div className="col-span-1 lg:col-span-5">
            <EagleView />
          </div>
          <div className="col-span-1 lg:col-span-6">
            <Phone />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="3xl:col-span-2 col-span-1">
        <MapCard />
      </div>
    </div>
  );
};

export default CarInterface;
