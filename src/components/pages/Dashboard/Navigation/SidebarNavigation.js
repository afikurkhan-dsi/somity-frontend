import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './SidebarNavigation.css';

import FaUser from 'react-icons/lib/fa/user';
import FaBarChart from 'react-icons/lib/fa/bar-chart';

export const SidebarNavigation = ({match}) => (
  <nav className={[styles.sidebar, "col-md-2 d-none d-md-block bg-light"].join(' ')}>
    <div className={styles.sidebarSticky}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            exact
            to={`${match.url}/users`}
            className={styles.NavLink}
            activeClassName={styles.active}>
            <FaUser /> Users
          </NavLink>
        </li>
    
        <li>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.active}
            to={`${match.url}/payments`}>
            <FaBarChart /> Transaction History
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
