
import logo1 from './logo1.png';
import './App.css';

const settings = [
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
    write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
      write : <p>Does the domain extension match the language of the domain name</p>
  },
  {
    logo  : <img src={logo1} alt="logo"/>,
    title : <h3>The TLD</h3>,
      write : <p>Does the domain extension match the language of the domain name</p>
  }
]

export default function App() {
    return(
        <div class='box'>
            {settings.map((setting) => {
              const { title, write, logo} = setting;
              return <div className='one'>
              <span>{logo}</span>
              <li>{title}{write}</li>
            </div>
          })}
        </div>
        
    )
}



