/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import RegistrationForm from './RegistrationForm';
import PaypalReturn from './confirmations/PaypalReturn';
import Error404 from './Error404';

class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Women&apos;s Weekend Away 2018</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <Switch>
                    <Route exact path="/paypal_confirmation" component={PaypalReturn} />
                    <Route exact path="/paypal_confirmation/:nid" component={PaypalReturn} />
                    <Route exact path="/" component={RegistrationForm} />
                    <Route path="/*" component={Error404} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OtherPageWrapper;
