import React from 'react';
import classnames from 'classnames';

import LefMenu from '../../components/LeftMenu';
import Style from '../../styles/home.module.scss';
import MainView from './components/MainView';
import ErrorBoundary from '../../components/ErrorBoundary';

export default function Home() {
  return (
    <div className={classnames(Style.content, 'container')}>
      <LefMenu />
      <div className={Style.tasks}>
        <ErrorBoundary>
          <MainView />
        </ErrorBoundary>
      </div>
    </div>
  );
}

