import './styles.css'

function ItemList ({title, description}) {
  return (
    <div className='list-item__content'>
        <h1 className="list-item__name">{title}</h1>
        <p className='list-item__description'>{description}</p>
        <hr/>
    </div>
  )
}

export default ItemList
