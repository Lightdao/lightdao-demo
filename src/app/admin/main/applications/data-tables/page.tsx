'use client';
import tableDataDevelopment from 'variables/applications/data-tables/tableDataDevelopment';
import tableDataCheck from 'variables/applications/data-tables/tableDataCheck';
import CheckTable from 'components/admin/main/applications/data-tables/CheckTable';
import tableDataColumns from 'variables/applications/data-tables/tableDataColumns';
import tableDataComplex from 'variables/applications/data-tables/tableDataComplex';
import DevelopmentTable from 'components/admin/main/applications/data-tables/DevelopmentTable';
import ColumnsTable from 'components/admin/main/applications/data-tables/ColumnsTable';
import ComplexTable from 'components/admin/main/applications/data-tables/ComplexTable';

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};

export default Tables;
