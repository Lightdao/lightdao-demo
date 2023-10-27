'use client';
import Card from 'components/card';
import Banner from 'components/admin/main/account/invoice/Banner';
import Content from 'components/admin/main/account/invoice/Content';

const Invoice = () => {
  return (
    <div className="mt-3 w-full rounded-[20px] font-dm md:h-[1150px] 3xl:px-52">
      <Card extra={'w-full xl:w-[95%] 3xl:w-[100%] mx-auto p-4 h-full'}>
        {/* banner */}
        <div>
          <Banner />

          <div className="mx-auto -mt-[80px] overflow-visible px-2 md:-mt-10 md:px-14 lg:w-[90%] 3xl:w-[100%] 3xl:px-6">
            <Content />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Invoice;
