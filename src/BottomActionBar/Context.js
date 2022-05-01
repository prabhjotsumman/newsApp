import React from 'react';

const Context = React.createContext();

if (process.env.NODE_ENV !== 'production')
  Context.displayName = 'BottomActionBarContext';

export default Context;
