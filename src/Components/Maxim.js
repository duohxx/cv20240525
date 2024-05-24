import React, { Component } from 'react';

class Maxim extends Component {
  render() {

    if(this.props.data){
      var maxims = this.props.data.maxims.map(function(maxims){
        return  <li key={maxims.user}>
            <blockquote>
               <p>{maxims.text}</p>
               <cite>{maxims.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="maxims">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Maxims</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {maxims}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Maxim;
