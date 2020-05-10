import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';

import { Form, Input, Button, Row, Col, Alert } from 'antd';
import 'antd/dist/antd.css';
class LoginPage extends Component {
  handleSubmit = (values) => {

    let email = values.email;
    let password = values.password;
    let strategy = 'local';
    const data = {
      strategy, email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  componentDidMount() {
    document.title = 'React Login';
  }

  render() {

    let isSuccess, message;
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 6,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.hasOwnProperty('errors') ? false : true;
      message = this.props.response.login.response.message;

      if (isSuccess) {
        setCookie('token', this.props.response.login.response.accessToken, 1);
        
      }
    }

    return (

      <Row style={{ padding: '2%' }}>
        <Col span={12} offset={10}><h3>Login Page</h3></Col>
        
        <Col span={6} offset={8} style={{ marginBottom: '1%' }}>{message ? <Alert message={message} type="error" /> : ''}</Col>
        
        {isSuccess ? <Redirect to='timeslot' /> : ''}
        <Col span={24} >

          <Form onFinish={this.handleSubmit}
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}

          >
            <Form.Item
              label="Username"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>



            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);