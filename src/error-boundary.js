import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({ hasError: true })

    console.log(error, info)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1 className='error'>Oops! Something went wrong. Please let us know you had an issue at nicolechung [at] gmail.com</h1>;
    }
    return this.props.children
  }
}

export default ErrorBoundary
