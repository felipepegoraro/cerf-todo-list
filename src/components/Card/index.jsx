import '../../styles/css/Card.css'

const Card = (props) => {
	console.log(props, "PROPS")
	const { text, changed, id } = props;


	if (text.length > 0 && text.trim()){
		return (
			<div className="card">
				<div className="card-inner">
					<div className='card-remove' onClick={()=>changed(id)}>x</div>
					<div className="card-text">
						<p className="card-text-p">{text}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Card
