import "./Main.css"
import firstimg from "./assets/bruchetta.svg"
import secondimg from "./assets/greek salad.jpg"
import thirdimg from "./assets/lemon dessert.jpg"



function Main(){
    return (
    <main className="main">
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