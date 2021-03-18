import React from "react";
import { connect } from "react-redux";
import { addName } from "./actions/postAction";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
    };

    this.props.dispatch(addName(formData));

    // console.log(formData);
    this.setState({ name: "" });
  };

  render(props) {
    console.log("props", this.props.name);
    return (
      <div>
        <h1>Form Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="mame">Enter Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        <h1>name{this.props.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Form);
