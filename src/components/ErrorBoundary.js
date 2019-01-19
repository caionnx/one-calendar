import { Component } from 'react';

// Show a fallback UI prop if detect an error
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackUI;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary