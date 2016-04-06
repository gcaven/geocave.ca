import React from 'react/addons'
import MiniRouter from 'react-mini-router'
import Home from './Home'

export default React.createClass({
  mixins: [MiniRouter.RouterMixin],
  routes: {
    '/': 'home',
  },
  getInitialState: function() {
    return {store: {}};
  },
  home: function() {
    return (
      <Home/>
    )
  },
  notFound: function() {
    return (
      <div className="notFound container" style={{textAlign: 'center'}}>
        <h1>
          404 - Page Not Found
        </h1>
      </div>
    )
  },
  render: function() {
    return this.renderCurrentRoute()
  }
})
