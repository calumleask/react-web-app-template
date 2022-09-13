import React from 'react';
import { createRoot } from 'react-dom/client';

import Root from '~/app/containers/Root';

import '~/app/style/main.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Root />);
