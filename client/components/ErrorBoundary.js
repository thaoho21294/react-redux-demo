import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch = (error, errorInfo) => {
    console.log('error: ', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
}
