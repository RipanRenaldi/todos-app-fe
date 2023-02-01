import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { getTodoById } from '../utils/api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const DetailTodos = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        getTodoById(id).then(todo=>setTodo(todo));
    }, []);

    async function deleteTodo(){
        const isSuccess = await axios.delete(`http://localhost:5000/todos/${id}`, {data : {logType : "delete"}});
        if(!isSuccess){
            return alert("Data Gagal dihapus");
        }
        alert("Data Berhasil Dihapus");
        navigate("/");

    }

    return (
        <div className="flex flex-col items-center">
            <div className="m-4 grow h-fit bg-[#f8f9fa] p-4 border rounded-lg w-[1024px]">
                <div className='flex justify-between items-center mb-10'>
                    <h2 className="text-center text-2xl font-bold">Todos List</h2>
                    <div>
                        <Link to={`/edittodos/${id}`}>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#9475EA] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#725ab4] focus:outline-none focus:ring-2 focus:ring-[#725ab4] focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Edit
                            </button>
                        </Link>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#9475EA] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#725ab4] focus:outline-none focus:ring-2 focus:ring-[#725ab4] focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={e=>deleteTodo()}
                        >
                            Hapus
                        </button>
                    </div>
                </div>
                <div className='h-80 w-full overflow-hidden rounded-lg drop-shadow-md bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                    <div className='m-4 text-xl flex justify-between'>
                        <h1>{todo.name}</h1>
                        <h1>{todo.date}</h1>
                    </div>
                    <p className='m-4 text-justify'>{todo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailTodos
