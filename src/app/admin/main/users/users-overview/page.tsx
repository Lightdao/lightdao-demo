'use client';
import SearchTableUsers from 'components/admin/main/users/users-overview/SearchTableUsersOverivew';
import tableDataUsersOverview from 'variables/users/users-overview/tableDataUsersOverview';
import Card from 'components/card';

const UserOverview = () => {
  return (
    <Card extra={'w-full h-full mt-3'}>
      <SearchTableUsers tableData={tableDataUsersOverview} />
    </Card>
  );
};

export default UserOverview;
