'use client';
import MiniStatistics from 'components/admin/main/account/application/MiniStatistics';
import FakeBarChart from '/public/img/account/FakeBarChart.png';

import { MdOutlineBarChart, MdPerson, MdFileCopy } from 'react-icons/md';
import ManagementTable from 'components/admin/main/account/application/ManagementTable';
import tableDataManagement from 'variables/account/application/tableDataManagement';
import Image from 'next/image';

const Application = () => {
  return (
    <div className="mt-3 h-full w-full rounded-[20px]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 3xl:grid-cols-4">
        <div>
          <MiniStatistics
            icon={<MdOutlineBarChart className="text-4xl" />}
            title="Total Income"
            value="$4.347"
            growth={'+20%'}
            growthColor="text-white"
            cardBg="bg-gradient-to-r from-brand-400 to-brand-600"
            titleColor="text-white"
            valueColor="text-white"
            bgColor="bg-gradient-to-r from-brand-600 to-brand-400"
            detailColor="text-white"
            iconColor="text-white"
          />
        </div>
        <div>
          <MiniStatistics
            // icon={
            //   <div className="w-full">
            //     <Image fill alt="imag" src={FakeBarChart} />
            //   </div>
            // }

            icon={
              <div className="relative z-10 h-full w-full text-4xl">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  alt="imag"
                  src={FakeBarChart.src}
                />
              </div>
            }
            title="Spendings"
            value="$1.249"
            bgColor={'bg-white dark:!bg-navy-800'}
            growth={'-12%'}
            growthColor="text-red-500"
            cardBg="bg-white"
            titleColor="text-gray-600"
            valueColor="text-navy-700 dark:text-white"
            detailColor="text-gray-600"
            iconColor="text-brand-500"
          />
        </div>
        <div>
          <MiniStatistics
            icon={<MdPerson className="text-4xl" />}
            title="Activity"
            value="1.920"
            bgColor={'bg-lightPrimary dark:!bg-navy-700'}
            growth={'+16%'}
            growthColor="text-green-500"
            cardBg="bg-white"
            titleColor="text-gray-600"
            valueColor="text-navy-700 dark:text-white"
            detailColor="text-gray-600"
            iconColor="text-brand-500 dark:text-white"
          />
        </div>
        <div>
          <MiniStatistics
            icon={<MdFileCopy className="text-4xl" />}
            title="Total Projects"
            value="670"
            bgColor={'bg-lightPrimary dark:bg-navy-700'}
            growth={'+27%'}
            growthColor="text-green-500"
            cardBg="bg-white"
            titleColor="text-gray-600"
            valueColor="text-navy-700 dark:text-white"
            detailColor="text-gray-600"
            iconColor="text-brand-500 dark:text-white"
          />
        </div>
      </div>
      <div className="mt-3">
        <ManagementTable tableData={tableDataManagement} />
      </div>
    </div>
  );
};

export default Application;
