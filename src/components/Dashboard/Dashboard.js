import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchRecentTours } from '../../actions'
import DashboardButton from './_DashboardButton'
require('../../styles/dashboard/dashboard.scss')

class Dashboard extends Component {
  componentDidMount () {

  }

  renderRecentTours () {

  }

  render () {
    return (
      <div className='dashboard-wrapper'>
        <h1>Dashboard</h1>
        <div className='dashboard-buttons'>
          <DashboardButton type='create' text='Create Tour' to='#' />
          <DashboardButton type='list' text='My Tours' to='#' />
          <DashboardButton type='settings' text='Settings' to='#' />
          <DashboardButton type='support' text='Support' to='#' />
        </div>
        <h2>My Recent Tours</h2>
        <ol>
          { this.renderRecentTours() }
        </ol>
      </div>

    )
  }
}

export default connect()(Dashboard)
