import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCategory, DeleteCategory, FetchCategories, UpdateCategory } from './Redux/categoriesSlice'
import { addBasket, deleteBasket } from './Redux/basketSlice'

const Category = () => {
    const categories=useSelector(state=>state.category.entity)
    const loading=useSelector(state=>state.category.loading)
    const dispatch=useDispatch()
    const [newCategory,setNewCategory]=useState({name:"",description:""})
    // const [basket]=useState({id:null,name:"",description:""})
    const [editCategory,setEditCategory]=useState({id:null,name:"",description:""})



useEffect(()=>{
    dispatch(FetchCategories())
},[dispatch])

const handleAddCategory=(e)=>{
    e.preventDefault()
    dispatch(AddCategory(newCategory))
    setNewCategory({name:"",description:""})
}
//basket
const handleAddBasket=(id,name,desc)=>{
    dispatch(addBasket({id:id,name:name,description:desc,count:1}))
}   

const handleDeleteBasket=(id)=>{
    dispatch(deleteBasket(id))
}

//////
const handleUpdate=(id,name,description)=>{
    setEditCategory({id,name,description})
}

const handleUpdateCategory=(e)=>{
e.preventDefault()
dispatch(UpdateCategory({id:editCategory.id,category:{name:editCategory.name,description:editCategory.description}}))
setEditCategory({id:null,name:"",description:""})
}
const handleDelete=(id)=>{
    dispatch(DeleteCategory(id))
}
  return (
    <div>
       {loading ? <h1>Loading...</h1> : 
       <ul>
        {categories.map(category=>(
         <div key={category.id}>{category.id}=={ category.name}-{category.description} 
         <button onClick={()=>handleUpdate(category.id,category.name,category.description)}>Edit</button>
         <button onClick={()=>handleDelete(category.id)}>Delete</button>
         <button onClick={()=>handleAddBasket(category.id,category.name,category.description)}>AddBasket</button>
         <button onClick={()=>handleDeleteBasket(category.id)}>DeleteBasket</button>
         </div>
        ))}

       </ul>
       }

       

       {editCategory.id ? (
        <div>
            <form action="" onSubmit={handleUpdateCategory}>
                <input type="text" value={editCategory.name} onChange={(e)=>setEditCategory({...editCategory,name:e.target.value})}/>
                <input type="text" value={editCategory.description} onChange={(e)=>setEditCategory({...editCategory,description:e.target.value})}/>
                <button type='submit'>Edit</button>
            </form>
        </div>
       ) : (<form action="" onSubmit={handleAddCategory}>
       <input type="text" value={newCategory.name} onChange={(e)=>setNewCategory({...newCategory,name:e.target.value})}/>
       <input type="text" value={newCategory.description} onChange={(e)=>setNewCategory({...newCategory,description:e.target.value})}/>
       <button type='submit'>Add</button>
       </form>)}

    </div>
  )
}

export default Category