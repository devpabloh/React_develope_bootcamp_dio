import { useState } from 'react';
import {Header} from '../../components/Header'
import ItemList from '../../components/ItemList'
import background from "../../assets/image-background.svg"
import './styles.css'


function App(){
    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [ repos, setRepos] = useState(null);

    const handleGetData = async()=>{
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json();

        if(newUser.name){
            const{avatar_url, name, bio} = newUser;
            setCurrentUser({avatar_url,name,bio});

            const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
            const newRepos = await reposData.json();

            if(newRepos.length){
                setRepos(newRepos);

            }
        }
    }


    return (
        <div className="App">
            <Header/>
            <div className='conteudo'>
                    <img src={background} className='background' alt="background-image" />
                    <div className='info'>
                        <div>
                            <input name='usuario' value={user} onChange={event => setUser(event.target.value)} placeholder='@username' />
                            <button onClick={handleGetData}>Buscar</button>
                        </div>
                        {currentUser?.name ? (
                       <>
                              <div className='perfil'>
                              <img src="https://avatars.githubusercontent.com/u/146978584?v=4" className="profile" alt="imagem de perfil no github" />
                             <div>
                             <h3>Pablo Henrique</h3>
                             <span>@Dev. Pablo H.</span>
                             <p>Descrição GitHub</p>
                             </div>
                          </div>
                         <hr /> 
                       </>
                        ) : null}
                      {repos?.length ? (
                        <>
                        <div>
                        <h4 className='repositorio'>Repositórios</h4>
                        <ItemList title="teste" description="teste de criação"/>
                        <ItemList title="teste" description="teste de criação"/>
                        <ItemList title="teste" description="teste de criação"/>
                       </div>
                        </>
                      ): null}
                       
                    </div>
            </div>
            
        </div>
    );
}

export default App;