import tableDataReceipt from 'variables/ecommerce/order-details/tableDataReceipt';
import ReceiptTable from './ReceiptTable';

const Content = () => {
  return (
    <div className="w-full bg-white pb-[57px] dark:!bg-navy-800">
      <div>
        <ReceiptTable tableData={tableDataReceipt} />
      </div>
      {/* Note */}
      <div className="mt-3 flex h-fit flex-col items-stretch md:!flex-row md:!px-[34px] lg:!mt-8 lg:gap-5  xl:!mt-4 xl:justify-between xl:gap-0">
        <div>
          <p className="text-lg font-bold text-navy-700 dark:text-white">
            Note
          </p>
          <p className=" w-full text-gray-600 xl:w-[330px]">
            Ship all the ordered items together by Friday and I send you an
            email, please check. Thanks!
          </p>
        </div>

        <div className="mt-10 flex flex-col  md:mt-1">
          <div className="flex items-center justify-between gap-[120px]">
            <p className="text-lg  text-navy-700 dark:text-white">Total</p>
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              $395
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between gap-[120px]">
            <h5 className="text-lg text-navy-700 dark:text-white">
              Paid to date
            </h5>
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              $0
            </p>
          </div>
          <div className="mt-6 h-px w-[240px] bg-gray-200 dark:!bg-navy-700" />

          <div className="mt-3 flex items-center justify-between gap-[80px]">
            <h5 className="text-lg text-navy-700 dark:text-white">
              Amount to pay
            </h5>
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              $395
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
