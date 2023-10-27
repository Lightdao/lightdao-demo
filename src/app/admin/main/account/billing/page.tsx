'use client';
import Balance from 'components/admin/main/account/billing/Balance';
import Invoice from 'components/admin/main/account/billing/Invoices';
import Market from 'components/admin/main/account/billing/Market';
import PaymentMethod from 'components/admin/main/account/billing/PaymentMethod';
import YourCard from 'components/admin/main/account/billing/YourCard';
import YourTransaction from 'components/admin/main/account/billing/YourTransactions';
import YourTransfers from 'components/admin/main/account/billing/YourTransfers';

const Billing = () => {
  return (
    <div className="mt-3 w-full">
      <div className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <YourCard />
        <div className="h-full w-full rounded-[20px]">
          <Balance />
          <PaymentMethod />
        </div>
        <Invoice />
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div>
          <YourTransaction />
        </div>
        <div>
          <Market />
        </div>
        <div>
          <YourTransfers />
        </div>
      </div>
    </div>
  );
};

export default Billing;
