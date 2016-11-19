import React from 'react'
import MiniRouter from 'react-mini-router'
import Content from './components/Content'

let Geocave = React.createClass({
  render: function() {
    return (
      <div className="universe">
        <div className='belowHeader'>
          <Content/>
        </div>

      </div>
    )
  }
});

React.render(<Geocave/>, document.body);
