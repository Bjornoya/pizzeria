import React from 'react';
import '../src/assets/style/style.scss';

interface IAppProps {
  children: React.ReactNode;
}

const App = ({ children }: IAppProps) => {
  return <div>{children}</div>;
};

export default App;
