import '../assets/css/App.css'
import headerImg from '../assets/img/header-img.png';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='top-home'>
        <h1>LES MAISONS <br/> DE KEREMMA</h1>
        <div className='top-home-img'>
          <img src={headerImg} alt="Nom de l'image" />
        </div>
      </div>
      <div className='bottom-home'>
        <NavLink to="/map">
          <div className='button-primary'>VOIR LA CARTE</div>
        </NavLink>
        <div className='left'>
          <div className='ancetre'>LOUIS <br/> <span>ET</span> EMMA <br/> ROUSSEAU</div>
          <div className='ancetre'>HENRI <br/> <span>ET</span> JEANNE <br/> MICHAU</div>
          <div><p className='rotate-90'>Depuis 1925</p></div>
        </div>
      </div>
      <div className='img-home'>
        <div className='img-container'>
        </div>
      </div>
    </>
   

  )
}

export default App
