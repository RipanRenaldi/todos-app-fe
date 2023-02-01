import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import { editTodo, getTodoById } from '../utils/api'
const EditTodos = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    function onNameChange(e){
        setName(e.target.value);
    }
    function onDescriptionChange(e){
        setDescription(e.target.value);
    }
    function onDateChange(e){
        setDate(e.target.value);
    }

    useEffect(()=>{
        getTodoById(id).then(todo=>{
            setName(todo.name);
            setDescription(todo.description);
            const newDate = todo.date.substring(0,16)
            setDate(newDate);
        });
    },[])

    async function onSubmitHandler(e){
        e.preventDefault();
        const data = {name, description, date, id, logType : "update"}
        const isSuccess= await editTodo(data);
        if(!isSuccess){
            return alert("Gagal Mengubah Data");
        }
        alert("Data Berhasil Diubah");
        navigate("/")
    }

    return (
        <div className="flex flex-col items-center">
            <div className="m-4 grow h-fit bg-[#f8f9fa] p-4 border rounded-lg w-[1024px]">
                <h2 className="text-center text-2xl font-bold">Edit yang harus dilakukan</h2>
                <form className="flex flex-col" id="usrform" onSubmit={onSubmitHandler}>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Nama</label>
                        <img src="" alt="" />
                        <input type="text" onChange={onNameChange} className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none" value={name}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Deskripsi yang akan dilakukan</label>
                        <textarea form="usrform" onChange={onDescriptionChange} className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none" value={description}></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Kapan akan dilakukan</label>
                        <input type="datetime-local" onChange={onDateChange} value={date} className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none w-fit" />
                    </div>
                    <input type="submit" value="Submit" className="w-fit border-2 border-[#9475EA] rounded-2xl text-2xl px-6 py-3 cursor-pointer self-end mt-auto hover:bg-[#F5F1FF]" />
                </form>
            </div>
        </div>
    )
}

export default EditTodos
