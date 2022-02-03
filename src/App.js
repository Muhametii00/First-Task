
import logo1 from './logo1.png';
import './App.css';

const settings = [
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  }
]

export default function App() {
    return(
        <div>
            {settings.map((setting) => {
              const { title, write, logo} = setting;
              return <div class="box">
              <div className='one'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='two'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='three'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='four'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='five'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='six'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='seven'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='eight'>{logo}
              <li>{title}{write}</li>
              </div>
              <div className='nine'>{logo}
              <li>{title}{write}</li>
              </div>
            </div>
          })}
        </div>
        
    )
}



