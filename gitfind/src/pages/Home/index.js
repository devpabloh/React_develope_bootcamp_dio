import {Header} from '../../components/Header'
import background from "../../assets/image-background.svg"
import './styles.css'


function App(){
    return (
        <div className="App">
            <Header/>
            <div className='conteudo'>
                    <img src={background} className='background' alt="background-image" />
                    <div className='info'>
                        <div>
                            <input name='usuario' placeholder='@username' />
                            <button>Buscar</button>
                        </div>
                        <div className='perfil'>
                            <img src="" className="profile" alt="imagem de perfil no github" />
                           <div>
                           <h3>Pablo Henrique</h3>
                           <span>@Dev. Pablo H.</span>
                           <p>Descrição GitHub</p>
                           </div>
                        </div>
                       <hr />
                    </div>
            </div>
            
        </div>
    );
}

export default App;