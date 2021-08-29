import React from 'react'

const Form = ({input, setInput, todos, setTodos, setStatus, setFilteredTodos}) => {

    const onChangeHandler =(e)=>{
      setInput(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos, {text:input, completed:false, id: Math.random()*1000}]);
        setInput('')
    }

    const statusHandler =(e)=>{
        setStatus(e.target.value)
    }
  return (
    <div className="form" >
      <div className="form_input mx-2">
        <input type="text" onChange={onChangeHandler} value={input} />
        <button className="plus_btn" onClick={onSubmitHandler}><i className="fas fa-plus-square"></i></button>
      </div>
      <select onChange={statusHandler} name="todos" id="options">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notcompleted">Not completed</option>
      </select>
    </div>
  )
}

export default Form
