import React from 'react';
import classnames from 'classnames';

import LefMenu from '../components/LeftMenu';
import CustomNavBar from '../components/CustomNavBar';
import Style from '../styles/mainSheet/main.scss';
import MainView from '../components/MainView';

export default function Home() {
  return (
    <div>
      <CustomNavBar />
      <div className={classnames(Style.content, 'container')}>
        <LefMenu />
        <div className={Style.tasks}>
          <MainView />
        </div>
      </div>
    </div>
  );
}
