import React, { Component } from 'react';
import { getTimeSlotAction } from '../actions/authenticationActions';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  componentDidMount() {
    document.title = 'Time Slot';
    this.props.dispatch(getTimeSlotAction());
  }
  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}
const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(DashboardPage);

