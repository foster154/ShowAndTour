import React, { PropTypes } from 'react'
import { Link } from 'react-router'
require('../../styles/dashboard/_dashboard_button.scss')

const renderIcon = type => {
  switch (type) {
    case 'create':
      return <span className='button-icon fa fa-plus-square-o' />
    case 'list':
      return <span className='button-icon fa fa-home' />
    case 'settings':
      return <span className='button-icon fa fa-cog' />
    case 'support':
      return <span className='button-icon fa fa-life-ring' />
  }
  // if (type === 'create') {
  //   return <span className='button-icon fa fa-plus-square-o' />
  // } else if
}

const DashboardButton = props => {
  return (
    <Link className='dashboard-button' to={props.to}>
      { renderIcon(props.type) }
      <div className='button-text'>{props.text}</div>
    </Link>
  )
}

DashboardButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string
}

export default DashboardButton
