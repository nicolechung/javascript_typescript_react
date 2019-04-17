import React, { Component } from 'react'

type ErrorBoundaryState = {
  hasError: boolean
}

type ErrorBoundaryProps = {
  children: React.ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props)
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1 className="error">
          Oops! Something went wrong. Please let us know you had an issue at
          nicolechung [at] gmail.com
        </h1>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
