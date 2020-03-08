import React from 'react'
import {Form, Button, Navbar, Toast} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth.css'
import axios from 'axios';
import history from "../Components/history"

class Auth extends React.Component {
  componentDidMount() {
    const access_token = document.cookie.match(new RegExp(
      "(?:^|; )" + 'token'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    if (access_token === null) {
      //history.push('login')
    } else if (localStorage.getItem('token') === access_token[1]) {
      //history.push('main')
    }
  }

  state = {
    email: '',
    password: '',
    remember_me: false,
    name: '',
    surname: '',
    password_confirmation: '',
    error: false,
    successful: false

  };
  handleChangeEmail = event => {
    this.setState({email: event.target.value})
  };
  handleChangePassword = event => {
    this.setState({password: event.target.value})
  };
  handelChangeName = event => {
    this.setState({name: event.target.value})
  };
  handelChangeSurname = event => {
    this.setState({surname: event.target.value})
  };
  handelChangePassword_confirmation = event => {
    this.setState({password_confirmation: event.target.value})
  };
  Sign = (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append('password', this.state.password);
    fd.append('email', this.state.email);
    axios.post("https://api-pixelnetwork.truemachine.ru/api/auth/login", fd)
      .then(response => {
        const res = response.data;
        console.log(res["access_token"]);
        document.cookie = `token=${res["access_token"]}`;
        localStorage.setItem('token', res["access_token"]);
        document.cookie = `set=true`;
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
          error: true
        })
      });
  };
  Auth = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.password_confirmation) {
      const fd = new FormData();
      fd.append('name', this.state.name);
      fd.append('surname', this.state.surname);
      fd.append("email", this.state.email);
      fd.append("password", this.state.password);
      fd.append("password_confirmation", this.state.password_confirmation);
      axios.post("https://api-pixelnetwork.truemachine.ru/api/auth/signup", fd)
        .then(response => {
          const res = response.data;
          const keys = Object.keys(res);
          console.log("---", res);
          if (res["message"] !== "Successfully register!") {
            for (let i = 0, l = keys.length; i < l; i++) {
              const doc = document.getElementById(`${keys[i]}`);
              doc.style.border = 'solid 2px #fa6666'
            }
            if (res["password"][0] === "The password field is required.") {
              const doc = document.getElementById("password_rep");
              doc.style.border = 'solid 2px #fa6666'
            }
          } else {
            this.setState({
              successful: true
            });
          }
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  };
  Error_sign = () => {
    this.setState({
      error: !this.state.error
    })
  };
  Successful_auth = () => {
    this.setState({
      successful: !this.state.successful
    })
  };

  render() {
    return (
      <div>
        <div>
          <Navbar expand="lg" variant="dark" className={'logo'}>
            <Navbar.Brand href="#home">
              <text className={'logo_text'}>PixelNetwork</text>
            </Navbar.Brand>
          </Navbar>
        </div>
        <div className={'box'}>
          <div className={'logo_box'}>
            <img src={require("../image/logo.png")} className={'packman'} alt={"Лого"}/>
          </div>
          <div className={'authorization_box'}>
            <div className={'auth'}>
              <form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Логин" className={"inp_1"} onChange={this.handleChangeEmail}
                                style={{backgroundColor: '#eddefc'}}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Пароль" className={"inp_1"}
                                onChange={this.handleChangePassword} style={{backgroundColor: '#eddefc'}}/>
                </Form.Group>
                <div className={'checkbox'}>
                  <Button variant="primary" type="submit" className={"btn_1"} onClick={this.Sign}>
                    Войти
                  </Button>
                  <Form.Group controlId="formBasicChecbox" className={"checkbox_button"}>
                    <Form.Check type="checkbox" label="Запомни меня"/>
                  </Form.Group>
                </div>
              </form>
            </div>
            <div className={'sign'}>
              <form>
                <h3>Впервые в PixelNetwork</h3>
                <hr/>
                <Form.Group controlId="formBasicEmail">
                  <div className={'sign_box'}>
                    <Form.Control placeholder="Имя" id={"name"} className={"inp_auth"}
                                  style={{backgroundColor: '#eddefc'}} onChange={this.handelChangeName}/>
                    <Form.Control id={"surname"} className={'name inp_auth'} placeholder="Фамилия"
                                  style={{backgroundColor: '#eddefc'}} onChange={this.handelChangeSurname}/>
                  </div>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" id={"email"} placeholder="Номер телефона или почта" className={"inp_auth"}
                                style={{backgroundColor: '#eddefc'}} onChange={this.handleChangeEmail}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" id={"password"} placeholder="Пароль" className={"inp_auth"}
                                style={{backgroundColor: '#eddefc'}} onChange={this.handleChangePassword}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" id={"password_rep"} placeholder="Повторите пароль"
                                className={"inp_auth"} style={{backgroundColor: '#eddefc'}}
                                onChange={this.handelChangePassword_confirmation}/>
                </Form.Group>
                <Button variant="success " className={"d-block mx-auto btn_1"} type="submit" onClick={this.Auth}>
                  Зарегистрироваться
                </Button>
              </form>
            </div>
          </div>
        </div>
        <Toast className={"successful_auth btn_1"} show={this.state.successful} onClose={this.Successful_auth}>
          <Toast.Header>
            <img
              src={require("../image/logo.png")}
              className="image"
              alt=""
            />
            <strong className="mr-auto">PixelNetwork</strong>
          </Toast.Header>
          <Toast.Body>Отлично! Вы успешно зарегистрировались</Toast.Body>
        </Toast>
        <Toast className={"error_sign"} show={this.state.error} onClose={this.Error_sign}>
          <Toast.Header>
            <img
              src={require("../image/logo.png")}
              className="image"
              alt=""
            />
            <strong className="mr-auto">PixelNetwork</strong>
          </Toast.Header>
          <Toast.Body>Не удалось выполнить вход</Toast.Body>
        </Toast>
      </div>
    )
  }
}

export default Auth;