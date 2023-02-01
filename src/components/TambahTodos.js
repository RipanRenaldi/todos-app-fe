import React, {useState} from 'react'
import { addTodo } from '../utils/api';
import {useNavigate} from "react-router-dom";
const TambahTodos = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    function onNameChange(e){
        setName(e.target.value);
    }
    function onDescriptionChange(e){
        setDescription(e.target.value);
    }
    function onDateChange(e){
        setDate(e.target.value);
    }

    async function onSubmitHandler(e){
        e.preventDefault();
        const data = {name, description, date, logType : "create"};
        const isSuccess = await addTodo(data);

        if(!isSuccess){
            return alert("Gagal Menambahkan Data");
        }
        alert("Berhasil Menambahkan Data");
        navigate("/");
    }

    return (
        <div className="flex flex-col items-center">
            <div className="m-4 grow h-fit bg-[#f8f9fa] p-4 border rounded-lg w-[1024px]">
                <h2 className="text-center text-2xl font-bold">Tambah yang harus dilakukan</h2>
                <form className="flex flex-col" id="usrform" onSubmit={onSubmitHandler}>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Nama</label>
                        <img src="" alt="" />
                        <input type="text" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none" value={name} onChange={onNameChange}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Deskripsi yang akan dilakukan</label>
                        <textarea form="usrform" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none" value={description} onChange={onDescriptionChange}></textarea>
                        {/* <input type="textarea" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none" /> */}
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Kapan akan dilakukan</label>
                        <input type="datetime-local" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none w-fit" value={date} onChange={onDateChange}/>
                    </div>
                    <input type="submit" value="Tambah" className="w-fit border-2 border-[#9475EA] rounded-2xl text-2xl px-6 py-3 cursor-pointer self-end mt-auto hover:bg-[#F5F1FF]" />
                </form>
            </div>
        </div>
    )
}

export default TambahTodos
