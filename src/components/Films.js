import './Films.css'
import {ListFilms} from '../data'
import Service from './Film'

const Films = () => {
  return (
    <div className='containerFilms' id='films'>
      <h1>Films</h1>
      <div className='films'>
        {ListFilms.map(item => 
          <Service item={item} key={item.id} />
        )}
      </div>
    </div>
  )
}

export default Films
