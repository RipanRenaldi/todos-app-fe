import axios from "axios";
export const addTodo = async (data)=>{
    if(!data.name || !data.description){
        return alert("Name and Description is Required");
    }
    await axios.post("http://localhost:5000/todos/create",data);
    return 1;
}
export const editTodo = async(data)=>{
    const {name, description, date, id, logType} = data;
     if(logType !== "update"){
        return alert("Routing key isn't correct");
     }
     await axios.put(`http://localhost:5000/todos/update/${id}`, {name, description, date, logType});
     return 1;
}

export const getAllTodo = async()=>{
    const respon = await axios.get("http://localhost:4000/todos");
    const {todos} = respon.data
    return todos;
}

export const getTodoById = async(id)=>{
    const respon = await axios.get(`http://localhost:4000/todos/search/${id}`);
    const {todo} = respon.data;
    return todo;
}

export const parseDate = (date)=>{
    return date.substring(0,10);
}


