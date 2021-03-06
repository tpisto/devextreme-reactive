import React from 'react';
import PropTypes from 'prop-types';
import {
  TableLayout,
  VirtualTableLayout as VirtualTableLayoutCore,
} from '@devexpress/dx-react-grid';
import { TableBody, TableHead } from 'material-ui/Table';
import { TableContainer } from './table-container';
import { Table } from './table';

const MINIMAL_COLUMN_WIDTH = 120;

const HeadTable = props => <Table use="head" {...props} />;

export const VirtualTableLayout = ({
  headerRows,
  bodyRows,
  columns,
  cellComponent,
  rowComponent,
  height,
  estimatedRowHeight,
}) => (
  <TableLayout
    layoutComponent={VirtualTableLayoutCore}
    headerRows={headerRows}
    rows={bodyRows}
    columns={columns}
    cellComponent={cellComponent}
    rowComponent={rowComponent}
    bodyComponent={TableBody}
    headComponent={TableHead}
    tableComponent={Table}
    headTableComponent={HeadTable}
    containerComponent={TableContainer}
    estimatedRowHeight={estimatedRowHeight}
    minColumnWidth={MINIMAL_COLUMN_WIDTH}
    height={height}
  />
);

VirtualTableLayout.propTypes = {
  headerRows: PropTypes.array.isRequired,
  bodyRows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  cellComponent: PropTypes.func.isRequired,
  rowComponent: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  estimatedRowHeight: PropTypes.number.isRequired,
};
