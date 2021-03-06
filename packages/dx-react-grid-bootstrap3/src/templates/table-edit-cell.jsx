import React from 'react';
import PropTypes from 'prop-types';

export const EditCell = ({
  column, value, onValueChange, style, children,
  row, tableRow, tableColumn, ...restProps
}) => (
  <td
    style={{
      verticalAlign: 'middle',
      padding: '1px',
      ...style,
    }}
    {...restProps}
  >
    {children || (
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={e => onValueChange(e.target.value)}
        style={{
          width: '100%',
          textAlign: tableColumn && tableColumn.align,
        }}
      />
    )}
  </td>
);
EditCell.propTypes = {
  column: PropTypes.object,
  row: PropTypes.object,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
EditCell.defaultProps = {
  column: undefined,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  value: '',
  style: {},
  children: undefined,
};
