import food from "./assets/restauranfood.jpg"
import "./Hero.css"

function Hero () {
    return(
<div>
<section >
    <div className="title">
    <article className="title-text">
        <div className="little-lemon">Little Lemon</div>
        <div className="loc">Chicago</div>
        <div className="desc">We are family owned</div>
        <div className="desc">mediterranean restaurant,</div>
        <div className="desc">focuced on traditional</div>
        <div className="desc"> recipes served with a modern</div>
        <div className="desc">twist.</div>
        <a className="reserve" href="/booking">Reserve a Table</a>
    </article>
    <div>
    <article className="title-img">
        <img className="food-img" src={food}></img>
    </article>
    </div>
    </div>
</section>
</div>
    );
}

export default Hero;