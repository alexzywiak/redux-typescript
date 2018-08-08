import { connect } from "react-redux";
import { incrementCount } from './actions/counter';
import App from './App';

const mapStateToProps = (state: any) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  incrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
