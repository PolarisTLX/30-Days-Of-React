import React from 'react'

import ActivityItem from './ActivityItem';

//this became too complex so split tasks into two components
class Content extends React.Component {
  render() {
    const {activity} = this.props;  //ES6 destructuring to reduce typing redudant/repetitive words
    //this line does the same thing
    //const activity = this.props.activity;

    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        //next two lines are to execute a javascript .map function
        //to run over every activity item so that our content can accept multiple activities
        //now any number of activities can be added to the "activities" array
        {activities.map((activity) => (

          <ActivityItem
            activity={activity} />

          //portion above this was cut to put into new component: ActivityItem
        })}
      </div>
    )
  }
}

export default Content //should be serperate?
