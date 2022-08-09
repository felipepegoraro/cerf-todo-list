import CardGenerator from './components/CardGenerator'
import './styles/css/App.css'

function App() {
  return (
    <div className="App">
			<div className="intro">
				<h1 className="title">Lista de afazeres</h1>
				<h3 className="subtitle">Coloque aqui suas tarefas do dia</h3>
				<CardGenerator />
			</div>
    </div>
  );
}

export default App;
