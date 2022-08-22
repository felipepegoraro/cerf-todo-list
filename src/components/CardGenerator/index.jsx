import { useRef, useState, useEffect } from 'react'
import '../../styles/css/cardGenerator.css'
import Cards from '../Cards/'

const CardGenerator = () => {
  const [cards, setCards] = useState([]);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    setCards([...cards, text]);
    inputRef.current.value = '';
  }

  useEffect(() => {
    console.log(cards);
  }, [cards])

  return (
    <div className="card-generator">
      <form onSubmit={handleSubmit}>
        <label for="task">Coloque sua tarefa aqui.</label>
        <input type="text" name="task" ref={inputRef} />

        <div className='card-generator_options'>
          <button type="submit">Criar</button>
        </div>
      </form>
      <Cards info={cards} setCards={setCards}/>
    </div >
  )
}

export default CardGenerator
