import React from 'react'
import MiniRouter from 'react-mini-router'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

let Geocave = React.createClass({
  render: function() {
    return (
      <div className="universe">
        {/*<Header/>*/}
        <div className='belowHeader'>
          <Content/>
          {/*<Footer/>*/}
        </div>

      </div>
    )
  }
});

React.render(<Geocave/>, document.body);
