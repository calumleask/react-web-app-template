import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/app/redux/hooks';
import { selectCount } from '~/app/redux/selectors';
import { incrementCountAction } from '~/app/redux/actions';

export const HomeRoute: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const navigate = useNavigate();

  const onIncrementClick = (): void => {
    dispatch(incrementCountAction());
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
