import React, { Component } from 'react';
import { getTimeSlotAction, getTimeSlotsByDate } from '../actions/timeslotActions';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'antd';
import * as _ from 'underscore';
var Moment = require('moment');


class TimeSlotPage extends Component {
  componentDidMount() {
    document.title = 'Time Slot';
    this.props.dispatch(getTimeSlotAction());

  }
  getTimeSlotsByDate = (date) => {

    this.props.dispatch(getTimeSlotsByDate(date));
  }
  render() {

    
    let dates=this.props.response.timeSlot.dates
    let timeSlotsBySection=this.props.response.timeSlot.timeSlotsBySection
    console.log('timeSlotDate::', timeSlotsBySection)
    return (
      <div>
        <Row style={{ padding: '2%' }}>
          <Col span={14} offset={10}><h2>Available Dates</h2></Col>
          {
            !_.isEmpty(dates) && dates.map( (date, key) => {
              return <Col span={3} key={key} onClick={this.getTimeSlotsByDate.bind(this,date)}><a >{Moment(date).format('ddd MMMM Do')}</a></Col>
            
            })
          }
          
        </Row>
         <Row style={{ padding: '2%' }}>
          <Col span={14} offset={10}><h2>Time Slots</h2></Col>
          <Col span={24} ><h3>Morning</h3></Col>
          {
            !_.isEmpty(timeSlotsBySection.morning) && timeSlotsBySection.morning.map( (slot, key) => {
              return <Col span={2} key={key} >{slot.isVacant?<a >{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</a>:Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Col>
            
            })
          }
         
          <Col span={24} ><h3>Noon</h3></Col>
          {
            !_.isEmpty(timeSlotsBySection.noon) && timeSlotsBySection.noon.map( (slot, key) => {
              return <Col span={2} key={key} >{slot.isVacant?<a >{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</a>:Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Col>
            
            })
          }
          <Col span={24} ><h3>Evening</h3></Col>
          {
            !_.isEmpty(timeSlotsBySection.evening) && timeSlotsBySection.evening.map( (slot, key) => {
              return <Col span={2} key={key} >{slot.isVacant?<a >{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</a>:Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Col>
            
            })
          }
          {/* {
            !_.isEmpty(timeSlotsByDate) && timeSlotsByDate.map( (slot, key) => {
              return <Col span={2} key={key} >{slot.isVacant?<a >{slot.time}</a>:slot.time}</Col>
            
            })
          } */}

        </Row> 
      </div>
    );
  }
}
const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(TimeSlotPage);

