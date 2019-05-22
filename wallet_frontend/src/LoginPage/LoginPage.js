import React from "react";

//import { userService } from "../_services";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    //userService.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    // e.preventDefault();
    // this.setState({ submitted: true });
    // const { username, password, returnUrl } = this.state;
    // // stop here if form is invalid
    // if (!(username && password)) {
    //   return;
    // }
    // this.setState({ loading: true });
    // userService.login(username, password).then(
    //   user => {
    //     const { from } = this.props.location.state || {
    //       from: { pathname: "/" }
    //     };
    //     this.props.history.push(from);
    //   },
    //   error => this.setState({ error, loading: false })
    // );
  };

  render() {
    const { username, password, submitted, loading, error } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export { LoginPage };
