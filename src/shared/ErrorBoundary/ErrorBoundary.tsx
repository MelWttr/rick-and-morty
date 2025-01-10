import { Component, ErrorInfo, ReactNode } from 'react';
import cls from './Error.module.scss';

interface ErrorBoundaryProps {
    children: ReactNode;
  }

  interface ErrorBoundaryState {
    hasError: boolean;
  }

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Ошибка: ', error, errorInfo);
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <h4 className={cls.error}>Ошибка загрузки</h4>;
        }
        const { children } = this.props;
        return children;
    }
}
