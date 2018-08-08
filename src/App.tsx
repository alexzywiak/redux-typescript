import * as React from 'react';
import './App.css';

interface IAppProps {
  count?: number;
  incrementCount?: () => any;
}

class App extends React.Component<IAppProps> {
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
