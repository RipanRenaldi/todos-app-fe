import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {getAllTodo, parseDate} from "../utils/api";
const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        getAllTodo().then(todos=>setTodos(todos));
    },[]);

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-bold text-[#9475EA]">Todos List</h2>
                        <Link to={"/tambahtodos"}>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#9475EA] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#725ab4] focus:outline-none focus:ring-2 focus:ring-[#725ab4] focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Tambah
                            </button>
                        </Link>
                    </div>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {todos.map((callout) => (
                            <Link to={`/detail/${callout.id}`}>
                                <div key={callout.id} className="group relative cursor-pointer">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg drop-shadow-md bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <h1 className='m-4 text-center text-xl'>{callout.name}</h1>
                                        <h2 className='m-4 text-justify'>{callout.description}</h2>
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500 mb-6">
                                        <span className="absolute inset-0" />
                                        {parseDate(callout.date)}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

