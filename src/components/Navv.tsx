import React, { Component } from "react";
import style from "../../src/Assets/css/NavvStyle.module.css";

class Navv extends Component {
  state = { clicked: false };

  handleClick = () => {
    console.log("KKKKKKKKKKKKKKKKKKKKKKKK");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className={style.navbarItems}>
          <a href="/">
            <div>
              <img src="/group-12.svg" alt="" />
              <img src="group-1.svg" alt="" />
            </div>
          </a>
          <div className={style.navbar}>
            <ul
              className={
                this.state.clicked
                  ? `${style.navbar} ${style.active}`
                  : style.navbar
              }
            >
              <li>
                <a href="/">Popular Destinations</a>
              </li>
              <li>
                <a href="/">Business Account</a>
              </li>
              <li>
                <a href="/">Operator Signup</a>
              </li>
              <li>
                <a href="/">Help?</a>
              </li>
            </ul>
          </div>
          <div
            className={
              this.state.clicked
                ? `${style.navbar} ${style.active}`
                : style.navbar
            }
          >
            <div className={style.login}>
              <div className={style.singin}>
                <a href="">Sign In</a>
              </div>
              <button>sign up</button>
            </div>
          </div>
          <div className={style.mobile} onClick={this.handleClick}>
            <i
              className={`${
                this.state.clicked ? "fas fa-times" : "fas fa-bars"
              } ${style.faBars}`}
            />
          </div>
  
        </nav>
      </>
    );
  }
}

export default Navv;
