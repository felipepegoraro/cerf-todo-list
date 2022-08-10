import '../../styles/css/cardGenerator.css'

const CardGenerator = () => {
	return ( 
		<div className="card-generator">
			<form>
				<label for="task">Coloque sua tarefa aqui.</label>
				<input type="text" name="task" />

				<div className='card-generator_options'>
					<button>Criar</button>
				</div>
			</form>
		</div>
	)
}

export default CardGenerator
