import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './SidebarNavigation.css';

import FaUser from 'react-icons/lib/fa/user';
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaHome from 'react-icons/lib/fa/home';

export const SidebarNavigation = ({match}) => (
  <nav className={styles.sidebar}>
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink
          exact
          to={`${match.url}`}
          className={styles.NavLink}
          activeClassName={styles.active}>
          <FaHome /> Home
        </NavLink>
      </li>

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
          to={`${match.url}/payments`}>
          <FaBarChart /> Transaction History
        </NavLink>
      </li>

      <li>
        <NavLink
          exact
          className={styles.NavLink}
          activeClassName={styles.active}
          to={`${match.url}/payments/payment_dues`}>
          <FaBarChart /> Payment Dues
        </NavLink>
      </li>
    </ul>
  </nav>
);
