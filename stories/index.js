import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Pagination, PaginationButton } from '../src';

import 'bootstrap/dist/css/bootstrap.css';

class PaginationBasic extends React.Component {
  state = {
    activePage: 1
  };

  handleSelect = (eventKey) => {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <div>
        <Pagination
          bsSize="large"
          items={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
        <br />

        <Pagination
          bsSize="medium"
          items={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
        <br />

        <Pagination
          bsSize="small"
          items={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
      </div>
    );
  }
}

class PaginationAdvanced extends React.Component {
  state ={
    activePage: 1
  };

  handleSelect = (eventKey) => {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
};


storiesOf('Pagination', module)
  .add('basic', () => (
    <PaginationBasic />
  ))
  .add('Advanced', () => (
    <PaginationAdvanced />
  ));
