import { Outlet } from "react-router-dom";
import './MainPg.css'

function MainPg(props) {
    return (
        <div className="mainPage">
            <header>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="AboutPg">About Us</a></li>
                    <li><a href="ContactPg">Contact Us</a></li>
                </ul>
            </header>

            {Outlet}

        </div>
    )
}

export default MainPg;