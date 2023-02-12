import React from "react";
import "./SignIn.css"

const SignIn = () => {
  return (
    <div>
      <div class="login__main">
        <div class="login__col1">
          <div class="login__col1Body">
            <div class="login__header">
              <router-link to="/" class="login__headingImage">
                <img src="" alt="nids" />
              </router-link>

              <div class="login__subHeader">
                <span> Network Instrusion Detecting System</span>
              </div>
            </div>

            <div class="login__body">
              <form>
                <input
                  placeholder=" Enter Your Phone / Email"
                  autocomplete="off"
                  v-model="username"
                  class="login__input"
                />
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  autocomplete="off"
                  v-model="password"
                  class="login__input"
                />
                <button class="login__buttonSimple">Login</button>
              </form>
              <span class="login__OR"> OR</span>
              <div class="login__options">
                <form class="login__button">
                  <img src="" />
                  <button>Login with Gmail</button>
                </form>

                <form class="login__buttonfacebook">
                  <img src="" />
                  <button>Login with Facebook</button>
                </form>

                <form class="login__button">
                  <img src="" />
                  <button>Login with Apple</button>
                </form>
                <div class="login__signup">
                  <span> Don't have an account?</span>
                  <span>
                    <router-link to="/register" class="login__link">
                      Sign up
                    </router-link>
                  </span>
                </div>
              </div>
            </div>

            <div class="login__loc">
              <span> Lalitpur </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
