import { useDispatch, useSelector } from 'react-redux'
import { deleteBasket, increment} from './Redux/basketSlice'

function Basketim() {
    const bas=useSelector(state=>state.basket.value)
    const dispatch=useDispatch()

    const handleDeleteBasket=(id)=>{
        dispatch(deleteBasket(id))
        
    }
    const artircount=(category)=>{
        dispatch(increment(category))}
    
    
  return (
    <div>basket start
        <p>{bas.map((category)=>(
                <li key={category.id}>{category.name}-{category.description}
                <button  onClick={()=>handleDeleteBasket(category.id)}>sil</button>
                <hr />
                <button onClick={()=>artircount(category)}>artir</button>
                <p>{category.count}
                </p>
                </li>))}
                </p>
                <p>basket end</p>
    </div>
  )
}

export default Basketim