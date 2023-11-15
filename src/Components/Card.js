import c from './Card.module.css'
import toys1 from '../images/toys1.jpg'

function Image(props){
    return(
        <div className={c.card_image}>
            <img src={props.value} />
        </div>
    )
}

function Description_name(props){
    return(
        <p className={c.card_description_name}>{props.value}</p>
    )
}

function Description_price(props){
    return(
        <p className={c.card_description_price}>{props.value}</p>
    )
}
function Button(props){
    return(
        <div className={c.card_description_button}>
            <a href="#">{props.value}</a>
        </div>
    )
}

function Description(){
    return(
        <div className={c.card_description_container}>
            <Description_name value="Мягкая игрушка"/>
            <Description_price value="325 000 сум"/>
            <Button value="B корзину"/>
        </div>
    )
}


function Card(){
    return(
        <div className={c.card_container}>
            <div className={c.card}>
                <div className={c.card_image_container}>
                    <Image value={toys1}/>
                    <Description/>
                </div>
            </div>
            <div className={c.card}>
                <div className={c.card_image_container}>
                    <Image value={toys1}/>
                    <Description/>
                </div>
            </div>
            <div className={c.card}>
                <div className={c.card_image_container}>
                    <Image value={toys1}/>
                    <Description/>
                </div>
            </div>
            <div className={c.card}>
                <div className={c.card_image_container}>
                    <Image value={toys1}/>
                    <Description/>
                </div>
            </div>

        </div>
    )
}


export default Card;