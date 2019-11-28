import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Header extends React.Component {
    static propTypes = {
      to: PropTypes.string,
    }

    render () {
      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Link className={styles.logo} to='/'>
                <Icon name={settings.header.icon}/>
              </Link>
              <nav>
                <NavLink exact to={settings.link.home} activeClassName='active'>{settings.nav.homePage}</NavLink>
                <NavLink exact to={settings.link.info} activeClassName='active'>{settings.nav.infoPage}</NavLink>
                <NavLink exact to={settings.link.faq} activeClassName='active'>{settings.nav.faqPage}</NavLink>
              </nav>
            </div>
          </Container>
        </header>
      );
    }
}
export default Header;