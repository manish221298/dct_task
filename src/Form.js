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
    this.props.dispatch(addName(e.target.value));
  };

  render(props) {
    let str = this.props.posts;
    let rev = str.split("").reverse().join("");
    console.log("props", rev);

    return (
      <div>
        <h1>Component</h1>
        <form>
          <label htmlFor="mame">Enter Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
        <h1>name:- {rev}</h1>
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
