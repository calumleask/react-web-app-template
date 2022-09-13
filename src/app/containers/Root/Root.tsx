import React from 'react';
import ReduxThunk from 'redux-thunk';

import { createStore, withProvider } from '~/common/redux';

import App from '~/app/containers/App';

const RootComponent: React.FC = () => <App />;

export const Root = withProvider(RootComponent, createStore([ReduxThunk]));
