import "./Main.css"
import firstimg from "./assets/bruchetta.svg"
import secondimg from "./assets/greek salad.jpg"
import thirdimg from "./assets/lemon dessert.jpg"
import BookingPage from "./BookingPage";
import { Route, Link, Routes } from "react-router-dom";
import { useReducer } from "react";

const reducer = (state, action) => {
    if(action.type==="17:00") return {time: state.time="17:00"}
    if(action.type==="18:00") return {time: state.time="18:00"}
    if(action.type==="19:00") return {time: state.time="19:00"}
    if(action.type==="20:00") return {time: state.time="20:00"}
    if(action.type==="21:00") return {time: state.time="21:00"}
    if(action.type==="22:00") return {time: state.time="22:00"}
    return state;
};

function Main() {
    const inintstate={time:"17:00"};
    const [state,dispatch]=useReducer(reducer,inintstate)

    function updateTimes (){
    }

    function initializeTimes () {

    }

    return (
        <main className="main">
            <Routes>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
            <section>
                <article className="first">
                    <div className="title-this">This weeks specials!</div>
                    <button className="order-online">Order online</button>
                </article>
            </section>
            <section className="services-sec">
                <article class="services">
                    <img src={secondimg}></img>
                    <div className="card-title">
                        <h2 className="title1">greek Salad</h2>
                        <h2 className="title-price">$12.99</h2>
                    </div>
                    <div className="desc-card">
                        <div className="descriotion">The famous greek salad of</div>
                        <div className="descriotion">crispy lettuce, peppers, olives</div>
                        <div className="descriotion">and our Chicago style feta</div>
                        <div className="descriotion">cgeese, garnished with</div>
                        <div className="descriotion">crunchy garlic and rosemary</div>
                        <div className="descriotion">croutons</div>
                        <h2 className="title1">Order a delevery</h2>
                    </div>
                </article>
                <article class="services">
                    <img src={firstimg}></img>
                    <div className="card-title">
                        <h2 className="title1">greek Salad</h2>
                        <h2 className="title-price">$12.99</h2>
                    </div>
                    <div className="desc-card">
                        <div className="descriotion">The famous greek salad of</div>
                        <div className="descriotion">crispy lettuce, peppers, olives</div>
                        <div className="descriotion">and our Chicago style feta</div>
                        <div className="descriotion">cgeese, garnished with</div>
                        <div className="descriotion">crunchy garlic and rosemary</div>
                        <div className="descriotion">croutons</div>
                        <h2 className="title1">Order a delevery</h2>
                    </div>
                </article>
                <article class="services">
                    <img src={thirdimg}></img>
                    <div className="card-title">
                        <h2 className="title1">greek Salad</h2>
                        <h2 className="title-price">$12.99</h2>
                    </div>
                    <div className="desc-card">
                        <div className="descriotion">The famous greek salad of</div>
                        <div className="descriotion">crispy lettuce, peppers, olives</div>
                        <div className="descriotion">and our Chicago style feta</div>
                        <div className="descriotion">cgeese, garnished with</div>
                        <div className="descriotion">crunchy garlic and rosemary</div>
                        <div className="descriotion">croutons</div>
                        <h2 className="title1">Order a delevery</h2>
                    </div>
                </article>
            </section>
        </main>
    );
}
export default Main;