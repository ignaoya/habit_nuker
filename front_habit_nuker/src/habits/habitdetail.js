import React, { Component } from 'react';
import HabitUpdate from './habitupdate';

class HabitDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.updateHabitDetails = this.updateHabitDetails.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
  }

  updateHabitDetails() {
    this.setState({ showComponent: true });
  }

  hideComponent() {
    this.setState({ showComponent: false });
  }

    render(){
        const habit = this.props.habitDetail;
        return(
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>Habit N. {habit.id}</h4>
                <h4>{habit.name}</h4>
                <h4>Habit Goal is {habit.measure_of_completion}</h4>
                <button
                  style={{ backgroundColor: "white" }}
                  onClick={() => this.updateHabitDetails()}
                >
                  Update
                </button>
                {this.state.showComponent ? <HabitUpdate habitUpdate={habit} afterSubmit={this.hideComponent} /> : null}
            </div>
        );
     }
}

export default HabitDetail;
