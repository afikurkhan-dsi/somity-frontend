import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './SidebarNavigation.css';

import FaUser from 'react-icons/lib/fa/user';
import FaUserPlus from 'react-icons/lib/fa/user-plus';
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
            exact
            className={styles.NavLink}
            activeClassName={styles.active} 
            to="/dashboard/users/create">
            <FaUserPlus /> Create New User
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.active}
            to={`${match.url}/payments`}>
            <FaBarChart /> Payment Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
