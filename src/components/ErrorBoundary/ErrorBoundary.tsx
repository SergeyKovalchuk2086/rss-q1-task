import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error("Error caught in getDerivedStateFromError", error);
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Component Did Catch:", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Sorry... something went wrong</h2>
          <button onClick={() => this.setState({ error: null })}>
            Clear Error
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
