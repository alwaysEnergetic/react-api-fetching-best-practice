/**
*
* Admin
*
*/

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { injectIntl } from 'react-intl';
// import ClientSearchForm from 'containers/ClientSearch';
// import SystemStatus from 'containers/SystemStatus';
import OgcHold from '../../containers/OgcHold';
// import User from 'services/User';

import styles from './styles.css';
import messages from './messages';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event, value) {
    this.setState({ selectedTab: value });
  }

  render() {
    const { selectedTab } = this.state;
    // const { formatMessage } = this.props.intl;

    return (
      <div className={styles.container}>
        <Paper>
          <Tabs
            value={selectedTab}
            onChange={this.handleTabChange}
          >
            <Tab 
            // label={formatMessage(messages.clientTab)} 
            />
            <Tab
              // label={formatMessage(messages.systemStatusTab)}
              // disabled={!User.isAdmin()}
            />
            <Tab
              // label={formatMessage(messages.ogcHoldTab)}
              // disabled={!User.isAdmin()}
            />
            <Tab
              // label={formatMessage(messages.bannerTab)}
              // disabled={!User.isAdmin()}
            />
          </Tabs>
        </Paper>
        {selectedTab === 0
          && (
            <section className={styles.tab}>
              {/* <ClientSearchForm /> */}
            </section>
          )}
        {selectedTab === 1
          && (
            <section className={styles.tab}>
              {/* <SystemStatus /> */}
            </section>
          )}
        {selectedTab === 2
          && (
            <section className={styles.tab}>
              <OgcHold />
            </section>
          )}
        {selectedTab === 3
          && (
            <section className={styles.tab}>
             
            </section>
          )}
      </div>
    );
  }
}

// Admin.propTypes = {
//   intl: intlShape.isRequired,
// };

export default Admin;
