import { connect } from "react-redux";
import { Dispatch } from "redux";

import { decrement, increment } from "../actions/counter";
import Counter from "../components/Counter";
import { CounterState } from "../reducer";

interface StateProps {
  count: number;
}

interface DispatchProps {
  decrement: () => void;
  increment: () => void;
}

const mapStateProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(mapStateProps, mapDispatchToProps)(Counter);
