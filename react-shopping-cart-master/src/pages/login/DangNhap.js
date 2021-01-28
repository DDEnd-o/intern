import React from "react";
import { Link } from "react-router-dom";

class DangNhap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3 mybg">
            <form
              onSubmit={(e) => this.onSubmit(e)}
              ref={(c) => {
                this.form = c;
              }}
            >
              <div className="row">
                <div className="col-md-12 text-center mytitle">
                  {/* <FontAwesomeIcon icon="user-tie" /> Login */}
                </div>
              </div>

              <div className="form-group row">
                <label
                  for="inputName"
                  className="col-sm-4 col-form-label text-right"
                >
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    required
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleUserInput}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-4 col-form-label text-right"
                >
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleUserInput}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-8">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="chkSave"
                      type="checkbox"
                      id="chkSave"
                    />
                    <label className="form-check-label" for="chkSave">
                      Save account in this PC ?
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-12 text-center">
                  <a href="!#">Password Forget ?</a> &nbsp;&nbsp; | &nbsp;&nbsp;
                  <a href="!#">Sign Up !</a>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-12 text-center">
                  <Link to="/">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!this.state.formValid}
                    >
                      <button className="btn btn-primary btn-sm">Login</button>
                      {/* <FontAwesomeIcon icon="sign-in-alt" /> Login */}
                    </button>
                    &nbsp;&nbsp;
                  </Link>
                  <Link to="/details">
                    <button type="button" className="btn btn-primary">
                      <button className="btn btn-primary btn-sm">Exit</button>
                      {/* <FontAwesomeIcon icon="sign-out-alt" /> Exit */}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-12 text-right">
                  <a href="!#">
                    {/* <FontAwesomeIcon icon="globe-asia" /> Tiếng Việt */}
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DangNhap;
