import React from 'react/addons'
import MiniRouter from 'react-mini-router'

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
      <div>
        <h1>Geoffrey Caven</h1>
      </div>
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
