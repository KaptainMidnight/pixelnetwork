import React from 'react'
import {Navbar, Button, Nav} from "react-bootstrap";
import './main.css'
import axios from 'axios'

class Main extends React.Component {
  componentWillMount() {
    const config = {
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    };
    axios.post('https://api-pixelnetwork.truemachine.ru/api/auth/me', undefined, config)
      .then(response => {
        const res = response.data;
        this.setState({
          name: res["name"],
          surname: res["surname"]
        });
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  state = {
    name: '',
    surname: '',
    defaultImageUrl: 'https://vk.com/images/camera_200.png?ava=1',
    friends: [
      {
        id: 1,
        name: "Егор",
        surname: "Майоров",
        img: ''
      },
      {
        id: 2,
        name: "Сергей",
        surname: "Герасимов",
        img: ''
      },
      {
        id: 3,
        name: "Данил",
        surname: "Абанин",
        img: ''
      },
      {
        id: 3,
        name: "Данил",
        surname: "Абанин",
        img: ''
      },
      {
        id: 3,
        name: "Данил",
        surname: "Абанин",
        img: ''
      }
    ],
    isLoaded: true,
  };
  Exit = () => {
    /*localStorage.clear();
    document.cookie = 'token=0';
    document.cookie = 'set=false';
    console.log(document.cookie)*/
    console.log("---", this.state.name)
  };

  render() {
    return (
      <div>
        <div>
          <Navbar expand="lg" variant="dark" className={'logo'} style={{display: "flex"}}>
            <Navbar.Brand href="#home" style={{flex: 0.9}}>
              <text className={'logo_text'}>PixelNetwork</text>
            </Navbar.Brand>
            <Button variant="outline-light mr-lg-2" style={{flex: 0.08}}>Профиль</Button>
            <Button variant="outline-light" onClick={this.Exit}>Выйти</Button>
          </Navbar>
        </div>
        <div className={"search_block"}>
          <Nav.Link href="/home" className={'nav_search'}>Новости</Nav.Link>
          <Nav.Link href="/home" className={'nav_search'}>Сообщения</Nav.Link>
          <Nav.Link href="/home" className={'nav_search'}>Друзья</Nav.Link>
          <Nav.Link href="/home" className={'nav_search'}>Фото</Nav.Link>
        </div>
        <div className={"main_block"}>
          <div className={"info_person"}>
            <div className={"photo"}>
              <img src={this.state.defaultImageUrl} alt=""/>
            </div>
            <div className={"info"}>
              <h4 className={"name"}>{this.state.name} {this.state.surname}</h4>
            </div>
          </div>
          <div className={"main_info"}>
            <div className={"info_person_1"}>
              <div className={"friends"}>
                {this.state.isLoaded ? this.state.friends.map((friend) =>
                  <div className={"friend"}>
                    <img
                      src={friend.img === '' ? this.state.defaultImageUrl : friend.img}
                      alt=""
                    />
                    <h6>{friend.name}</h6>
                  </div>
                ) : ''}
              </div>
            </div>
            <div className={"news"}>
              <div className={"create_news"}>

              </div>
              <div className={"my_news"}>

              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Main;