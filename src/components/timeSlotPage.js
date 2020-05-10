import React, { Component } from 'react';
import { getTimeSlotAction, getTimeSlotsByDate } from '../actions/timeslotActions';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import * as _ from 'underscore';
var Moment = require('moment');


class TimeSlotPage extends Component {
  constructor(props){
    super(props);
    this.props.dispatch(getTimeSlotAction());
  }
  componentDidMount() {
    document.title = 'Time Slot';
    

  }
  getTimeSlotsByDate = (date) => {

    this.props.dispatch(getTimeSlotsByDate(date));
  }
  render() {

    
    let dates=this.props.response.timeSlot.dates
    let timeSlotsBySection=this.props.response.timeSlot.timeSlotsBySection;
    let activeDate=this.props.response.timeSlot.activeDate;
    console.log('timeSlotDate::', timeSlotsBySection)
    return (
      <div>
        {!_.isEmpty(dates) && <Row style={{ paddingLeft: '4%',paddingRight:'2%' }} gutter={[8, 16]}>
          <Col span={14} offset={10}><h2>Available Dates</h2></Col>
          {
             dates.map( (date, key) => {
              return <Col className="gutter-row" span={3} key={key} onClick={this.getTimeSlotsByDate.bind(this,date)}><a style={{textDecoration:(date==activeDate?'underline':'none'),fontWeight: date==activeDate?'900':'normal'}}>{Moment(date).format('ddd MMMM Do')}</a></Col>
            
            })
          }
          
        </Row>}
         {!_.isEmpty(timeSlotsBySection.morning) && <Row style={{ paddingLeft: '4%',paddingRight:'2%' }} gutter={[16, 24]}>
          <Col span={14} offset={10}><h2>Time Slots</h2></Col>
          <Col span={24} ><h3>Morning</h3></Col>
          {
             timeSlotsBySection.morning.map( (slot, key) => {
              return <Col span={2} key={key} className="gutter-row">{slot.isVacant?<Button type="primary" ghost>{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Button>:<Button disabled >{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Button>}</Col>
            
            })
          }
         
          <Col span={24} ><h3>Noon</h3></Col>
          {
            !_.isEmpty(timeSlotsBySection.noon) && timeSlotsBySection.noon.map( (slot, key) => {
              return <Col span={2} key={key} className="gutter-row">{slot.isVacant?<Button type="primary" ghost>{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Button>:<Button disabled >{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Button>}</Col>
            
            })
          }
          <Col span={24} ><h3>Evening</h3></Col>
          {
            !_.isEmpty(timeSlotsBySection.evening) && timeSlotsBySection.evening.map( (slot, key) => {
              return <Col span={2} key={key} className="gutter-row">{slot.isVacant?<Button type="primary" ghost>{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Button>:<Button disabled >{Moment(slot.date +' ' 
              +slot.time).format('h:mm A')}</Button>}</Col>
            
            })
          }
          

        </Row> }
      </div>
    );
  }
}
const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(TimeSlotPage);

