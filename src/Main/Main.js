import React from 'react'
import {Navbar, Button,  Nav} from "react-bootstrap";
import './main.css'
class Main extends React.Component{
    state = {

    };
    Exit = () =>{
        localStorage.clear();
        document.cookie = 'token=0';
        document.cookie = 'set=false';
        console.log(document.cookie)
    };
    render(){
        return(
            <div>
                <div>
                    <Navbar  expand="lg" variant="dark" className={'logo'} style={{display: "flex"}}>
                        <Navbar.Brand href="#home" style={{flex: 0.9}}>
                            <text className={'logo_text'}>PixelNetwork</text>
                        </Navbar.Brand>
                        <Button variant="outline-light mr-lg-2" style={{flex: 0.08}}>Профиль</Button>
                        <Button variant="outline-light" onClick={this.Exit}>Выйти</Button>
                    </Navbar>
                </div>
                <div className={"search_block"}>
                    <Nav.Link href="/home" className={'nav_search'}>Новости</Nav.Link>
                    <Nav.Link href="/home"  className={'nav_search'}>Сообщения</Nav.Link>
                    <Nav.Link href="/home"  className={'nav_search'}>Друзья</Nav.Link>
                    <Nav.Link href="/home"  className={'nav_search'}>Фото</Nav.Link>
                </div>
                <div className={"main_block"}>
                    <div className={"info_person"}>
                        <div className={"photo"}>

                        </div>
                        <div className={"info"}>

                        </div>
                    </div>
                    <div className={"main_info"}>
                        <div className={"info_person_1"}>
                            <div className={"friends"}>

                            </div>
                            <div className={"groups"}>

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