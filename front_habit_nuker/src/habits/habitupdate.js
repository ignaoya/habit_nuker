import React, { Component } from "react";
import axios from "axios";

class HabitUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habit_to_update: this.props.habitUpdate,
      goal_description_value: this.props.habitUpdate.goal_description,
      quantitative_goal_value: this.props.habitUpdate.quantitative_goal,
      quantitative_goal_units_value: this.props.habitUpdate.quantitative_goal_units,
      measure_of_completion_value: this.props.habitUpdate.measure_of_completion,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .patch("http://127.0.0.1:8000".concat(this.state.habit_to_update.update), {
        goal_description: this.state.goal_description_value,
        quantitative_goal: this.state.quantitative_goal_value,
        quantitative_goal_units: this.state.quantitative_goal_units_value,
        measure_of_completion: this.state.measure_of_completion_value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.afterSubmit();
  }

  render() {
    const { 
      goal_description_value,
      quantitative_goal_value,
      quantitative_goal_units_value,
      measure_of_completion_value
    } = this.state;
    return (
      <div style={{ color: "red", border: "1px solid red" }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h6>Updating</h6>
            <div>
            Goal Description
            <input 
              type="text" 
              name="goal_description_value" 
              value={goal_description_value} 
              onChange={this.handleChange} />
            </div>
            <div>
            Quantitative Goal
            <input 
              type="number" 
              name="quantitative_goal_value" 
              value={quantitative_goal_value} 
              onChange={this.handleChange} />
            </div>
            <div>
            Quantitative Goal Units
            <input 
              type="text" 
              name="quantitative_goal_units_value" 
              value={quantitative_goal_units_value} 
              onChange={this.handleChange} />
            </div>
            <div>
            Measure of Completion
            <input 
              type="number" 
              name="measure_of_completion_value" 
              value={measure_of_completion_value} 
              onChange={this.handleChange} />
            </div>
          </div>
          <input
            style={{ backgroundColor: "white" }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default HabitUpdate;
