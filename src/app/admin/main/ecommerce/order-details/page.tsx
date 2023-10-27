'use client';
import Details from 'components/admin/main/ecommerce/order-details/Details';
import OrderStatus from 'components/admin/main/ecommerce/order-details/OrderStatus';
import Receipt from 'components/admin/main/ecommerce/order-details/Receipt';

const OrderDetails = () => {
  return (
    <div className="mt-3 grid h-full w-full grid-cols-7 gap-[20px] rounded-[20px]">
      <div className="z-0 col-span-7 lg:col-span-5">
        <Receipt />
      </div>

      <div className="z-0 col-span-7 lg:col-span-2">
        <OrderStatus />
      </div>
      <div className="z-0 col-span-7 lg:col-span-7">
        <Details />
      </div>
    </div>
  );
};

export default OrderDetails;
