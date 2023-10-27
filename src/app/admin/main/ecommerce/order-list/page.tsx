'use client';
import tableDataOrders from 'variables/ecommerce/order-list/tableDataOrders';
import SearchTableOrders from 'components/admin/main/ecommerce/order-list/SearchTableOrders';
import Card from 'components/card';

const OrderList = () => {
  return (
    <Card extra={'w-full h-full bg-white mt-3'}>
      <SearchTableOrders tableData={tableDataOrders} />
    </Card>
  );
};

export default OrderList;
