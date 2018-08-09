import * as React from 'react';
import './App.css';
import { ContainerProps } from './AppContainer';

class App extends React.Component<ContainerProps> {
  public render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        {count}
        <button onClick={incrementCount}>INCREMENT</button>
      </div>
    );
  }
}

export default App;
