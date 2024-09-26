import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar ({}) {

return (
    <>
        <ul>
            <button className='estructura' ><Link to={'/'} home ></Link> </button>
            <button className='estructura' ><Link to={'/category/remeras'} remeras ></Link>  </button>
            <button className='estructura' ><Link to={'/category/pantalones'} pantalones ></Link>  </button>
            <button className='estructura' ><Link to={'/category/camperas'} camperas ></Link>  </button>
        </ul>
</>
);
}
