/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    4/3/19 1:22 AM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'

import helpers from 'lib/helpers'

class Table extends React.Component {
  render () {
    const { headers, striped, stickyHeader, children, extraClass, useBody } = this.props
    const tableClass =
      'uk-table' +
      (striped ? ' uk-table-striped stripe' : '') +
      (stickyHeader ? ' sticky-header fixed-width' : '') +
      (extraClass ? ' ' + extraClass : '')
    return (
      <table className={tableClass} style={this.props.style} ref={this.props.tableRef} role="table" aria-label={this.props.ariaLabel} >
        {headers && (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col">{header}</th>
              ))}
            </tr>
          </thead>
        )}
        {useBody && <tbody className={'scrollable full-height c91-fix'}>{children}</tbody>}
        {!useBody && children}
      </table>
    )
  }
}


Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.node),
  striped: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  children: PropTypes.node,
  extraClass: PropTypes.string,
  useBody: PropTypes.bool,
  style: PropTypes.object,
  tableRef: PropTypes.object,
  ariaLabel: PropTypes.string
}

Table.defaultProps = {
  striped: true,
  stickyHeader: true,
  useBody: true
}

export default Table
