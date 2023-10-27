import 'mapbox-gl/dist/mapbox-gl.css';
// Assets
import { MdLocationOn } from 'react-icons/md';
import { IoPaperPlane } from 'react-icons/io5';
import SearchIcon from 'components/icons/SearchIcon';
import Card from 'components/card';
import Map from 'react-map-gl';
import React from 'react';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g';

const MapCard = () => {
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains('dark')
      ? 'mapbox://styles/simmmple/cl0qqjr3z000814pq7428ptk5'
      : 'mapbox://styles/simmmple/ckwxecg1wapzp14s9qlus38p0',
  );
  React.useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          if (document.body.classList.contains('dark')) {
            setDarkmode('mapbox://styles/simmmple/cl0qqjr3z000814pq7428ptk5');
          } else {
            setDarkmode('mapbox://styles/simmmple/ckwxecg1wapzp14s9qlus38p0');
          }
        }
      }
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);
  return (
    <Card extra={'relative w-full h-full px-[20px] py-[20px]'}>
      <Map
        initialViewState={{
          latitude: 37.692,
          longitude: -122.435,
          zoom: 13,
        }}
        style={{
          borderRadius: '20px',
          width: '100%',
          minHeight: '600px',
          height: '100%',
        }}
        mapStyle={darkmode}
        mapboxAccessToken={MAPBOX_TOKEN}
      />
      {/* Widgets inside maps */}
      {/* Search inside map */}
      <div className="dark:!bg-navy-900 absolute left-5 top-12 ml-5 flex h-9 w-[230px] items-center rounded-full bg-white md:w-[300px]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search your next distination"
          className="text-navy-700 dark:bg-navy-900 block w-full rounded-full text-sm font-medium outline-none"
        />
      </div>
      {/* bottom widgets */}

      <div className="dark:!bg-navy-900 bottom-12 left-5 ml-0 mt-4 flex h-[150px] w-[280px] justify-between rounded-[20px] bg-white p-4 sm:absolute sm:ml-5 sm:mt-0">
        <div className="relative flex flex-col justify-between">
          <p className="dark:bg-navy-900 flex items-center gap-2 text-base font-medium text-gray-700 dark:text-white">
            <p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="13"
                  height="13"
                  rx="6.5"
                  fill="white"
                />
                <rect
                  x="1.5"
                  y="1.5"
                  width="13"
                  height="13"
                  rx="6.5"
                  stroke="var(--color-500)"
                  stroke-width="3"
                />
              </svg>
            </p>
            Your location
          </p>

          <h4 className="flex items-center gap-2 font-medium text-gray-700 dark:text-white">
            <p className="text-brand-500 text-xl">
              <MdLocationOn />
            </p>
            W. Street 253
          </h4>
          {/* svg dash line */}
          <div className="absolute left-2 top-7">
            <svg
              width="2"
              height="44"
              viewBox="0 0 2 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="43"
                x2="0.999998"
                y2="1"
                stroke="url(#paint0_linear_103_13736)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="6 6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_13736"
                  x1="2"
                  y1="44"
                  x2="1.36013"
                  y2="-2.40496"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4318FF" />
                  <stop offset="1" stop-color="#4318FF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* right side of card */}
        <div className="flex flex-col justify-between">
          <div className="text-sm font-medium text-gray-700 dark:text-white">
            <p>Distance</p>
            <p className="text-lg">34km</p>
          </div>

          <div className="text-sm font-bold text-gray-700 dark:text-white">
            <p>Time</p>
            <p className="text-lg">20min</p>
          </div>
        </div>
      </div>
      {/* button inside map */}
      <button className="dark:!bg-navy-900 absolute bottom-10 right-10 flex cursor-pointer items-center justify-center rounded-full bg-white p-3 text-2xl text-gray-600">
        <IoPaperPlane />
      </button>
    </Card>
  );
};

export default MapCard;
