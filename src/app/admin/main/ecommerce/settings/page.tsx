'use client';
import ChairDef from '/public/img/ecommerce/ChairDef.png';
import Delete from 'components/admin/main/ecommerce/settings-product/Delete';
import Details from 'components/admin/main/ecommerce/settings-product/Details';
import DropeZone from 'components/admin/main/ecommerce/settings-product/Dropzone';
import Information from 'components/admin/main/ecommerce/settings-product/Info';
import Socials from 'components/admin/main/ecommerce/settings-product/Socials';
import Image from 'next/image';
const SettingsProduct = () => {
  return (
    <div className="mt-4 grid h-full w-full grid-cols-2 gap-5 xl:mt-3">
      {/* left side */}
      <div className="col-span-2  flex h-full w-full flex-col gap-5 xl:col-span-1">
        {/* Chair */}
        <div className="relative flex w-full items-center justify-center rounded-[20px] bg-white bg-cover bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none xl:h-[400px] 2xl:h-[420px] 3xl:h-[460px]">
          <Image fill src={ChairDef} className="rounded-2xl" alt="" />
        </div>
        <div>
          <Information />
        </div>
      </div>
      {/* right side */}
      <div className="col-span-2 flex h-full w-full flex-col gap-5 xl:col-span-1">
        <DropeZone />
        <Socials />
      </div>
      {/* full width */}
      <div className="col-span-2 flex h-full w-full flex-col gap-5">
        <Details />
        <Delete />
      </div>
    </div>
  );
};

export default SettingsProduct;
