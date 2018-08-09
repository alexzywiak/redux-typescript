import { connect } from "react-redux";
import { incrementCount } from './actions/counter';
import App from './App';
import { RootState } from './reducers/';

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  incrementCount,
};

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);
