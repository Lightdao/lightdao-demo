'use client';
import Statistics from 'components/admin/main/users/users-reports/Statistics';
// Assets
import Usa from '/public/img/users/usa.png';
import FakeLineGraph from '/public/img/users/FakeLineGraph.png';
import { MdPerson, MdThumbUp } from 'react-icons/md';
import Conversion from 'components/admin/main/users/users-reports/Conversion';
import UserActivity from 'components/admin/main/users/users-reports/UserActivity';
import tableDataUserReports from 'variables/users/users-reports/tableDataUserReports';
import UserReportsTable from 'components/admin/main/users/users-reports/UserReportsTable';
import Image from 'next/image';

const UserReport = () => {
  return (
    <div className="mt-3 h-full w-full">
      <div className="mb-5 grid w-full grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2 xl:grid-cols-4">
        {/* statistics */}
        <Statistics
          icon={
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lightPrimary text-4xl text-brand-500 dark:!bg-navy-700 dark:text-white">
              <MdPerson />
            </div>
          }
          title="User Active"
          value="9420"
        />
        <Statistics
          endContent={
            <div className="pr-3 text-xs text-gray-600"> 6 May - 7 May</div>
          }
          title="Click Events"
          value="1753"
        />
        <Statistics
          endContent={
            <div className="flex items-center">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full">
                <Image fill style={{ objectFit: 'contain' }} src={Usa} alt="" />
              </div>
              <select className="text-xs text-gray-600 dark:bg-navy-800" />
            </div>
          }
          title="Location"
          value="USA"
        />
        <Statistics
          icon={
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#4481EB] to-[#04BEFE] text-3xl text-white">
              <MdThumbUp />
            </div>
          }
          endContent={
            <div className="relative flex items-center justify-center">
              <Image
                fill
                style={{ objectFit: 'contain' }}
                src={FakeLineGraph}
                alt=""
              />
            </div>
          }
          title="Likes"
          value="154"
        />
      </div>
      {/* Conversion and talbes*/}
      <div className="grid w-full grid-cols-11 gap-5 rounded-[20px]">
        <div className="col-span-11 h-full w-full rounded-[20px] md:col-span-5 lg:col-span-4 xl:col-span-5 2xl:col-span-3">
          <div>
            <Conversion />
          </div>
          <div className="mt-3">
            <UserActivity />
          </div>
        </div>
        <div className="col-span-11 h-full w-full rounded-[20px] md:col-span-6 lg:col-span-7 xl:col-span-6 2xl:col-span-8">
          <UserReportsTable tableData={tableDataUserReports} />
        </div>
      </div>
    </div>
  );
};

export default UserReport;
