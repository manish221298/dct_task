import React from "react";

class Form extends React.Component {
  constructor() {
    super();
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

    console.log(formData);
  };

  render() {
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
      </div>
    );
  }
}

export default Form;
