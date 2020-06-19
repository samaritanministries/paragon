import cn from "classnames";
import React from 'react'
import PropTypes from 'prop-types'

export default class LoadingTable extends React.Component {

  render() {
    const LoadingTable = this.LoadingTable.bind(this);

    return (
      <LoadingTable />
    );
  }

  LoadingTable() {
    const TableTitle = this.TableTitle.bind(this);
    const TableRows = this.TableRows.bind(this);
    const { children, isExpandable, isSelectable } = this.props;

    return (
      <div className={cn({
          "row-expandable": isExpandable,
          "row-selectable": isSelectable,
          "flex-table is-loading": true
        })}>
        <TableTitle />
        <ol className="table-row--header">
          {children}
        </ol>
        <TableRows />
      </div>
    );
  }

  TableTitle() {
    const { tableTitle } = this.props;

    if (tableTitle != null) {
      return (
        <h3 className="flex-table--title">{tableTitle}</h3>
      );
    } else {
      return (null);
    }
  }

  TableRows() {
    const { numberOfColumns } = this.props;
    const { numberOfRows } = this.props;

    return (
      <>
      {
        Array.from({ length: numberOfRows }, (_, r) => (
          <ol className="table-row" key={r}>
            {
              Array.from({ length: numberOfColumns }, (_, c) => (
                <li key={c}>&nbsp;</li>
              ))
            }
          </ol>
        ))
      }
      </>
    );
  }
}

LoadingTable.defaultProps = {
  hasTitle: false,
  hasFooter: false,
  isExpandable: false,
  isSelectable: false,
  numberOfColumns: 4,
  numberOfRows: 3,
  tableTitle: null
};

LoadingTable.propTypes = {
  hasTitle: PropTypes.bool,
  hasFooter: PropTypes.bool,
  isExpandable: PropTypes.bool,
  isSelectable: PropTypes.bool,
  numberOfColumns: PropTypes.number,
  numberOfRows: PropTypes.number,
  tableTitle: PropTypes.string
};
