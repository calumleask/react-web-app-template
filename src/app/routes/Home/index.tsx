import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type Props = StateProps & DispatchProps;

const HomeRoute: React.FC<Props> = ({ count, incrementCount }) => {
  const navigate = useNavigate();

  const onIncrementClick = (): void => {
    incrementCount();
  };

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={(): void => {
          navigate('/about');
        }}
      >
        {'About'}
      </button>
      <div>{`Count: ${count}`}</div>
      <button onClick={onIncrementClick}>{'Increment'}</button>
    </>
  );
};

import { selectCount } from '~/app/redux/selectors';
import { incrementCountAction } from '~/app/redux/actions';

type StateProps = {
  count: number;
};

const mapStateToProps: MapStateToProps<
  StateProps,
  unknown,
  AppState
> = state => ({
  count: selectCount(state),
});

type DispatchProps = {
  incrementCount: () => void;
};

const mapDispatchToProps: MapDispatchToProps<
  DispatchProps,
  unknown
> = dispatch => ({
  incrementCount: (): void => incrementCountAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute);
