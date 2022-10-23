import './Film.css'

const Film = (props) => {
  return (
    <div className='filmContainer'>
        <img src={props.item.img} alt={props.item.title}/>
        <span>{props.item.title}</span>
        <p>{props.item.desc}</p>
      <button>More details</button>
    </div>
  )
}

export default Film
