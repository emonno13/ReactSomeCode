import React, { ReactNode } from 'react';
import { Counter } from 'features/counter/Counter';
import logo from 'logo.svg';
import './Test.css';

interface TestType {
  name?: string;
  children?: ReactNode;
}

const Test: React.FC<TestType> = ({ name }): JSX.Element => (
  <div className="Test">
    <header className="Test-header">
      <img src={logo} className="Test-logo" alt="lsogo" />
      <Counter />
      <p>
        Edit <code>src/Test.tsx</code> and save to reload. {name}
      </p>
      <span>
        <span>Learn </span>
        <a
          className="Test-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="Test-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="Test-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="Test-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  </div>
);

export default Test;
