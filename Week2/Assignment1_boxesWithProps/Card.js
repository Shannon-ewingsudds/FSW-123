import "./Card.css";

function Card(props) {
    return (
        <div style={{width:props.width, backgroundColor:props.backgroundColor}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
			<hr/>
            <h4>{props.description}</h4>
        </div>
    );
}

export default Card;