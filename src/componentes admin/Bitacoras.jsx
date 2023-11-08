import { useState, useEffect } from 'react';
import { Link, } from "react-router-dom"
import Nav from "./Nav"
import "../css/details.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const endpoint = 'http://127.0.0.1:8000/api/bitacoras/';


export default function Bitacoras() {

    const [dataBitacoras, setDataBitacoras] = useState([]);

    useEffect(() => {
        getAllBitacoras();
    }, []);

    const getAllBitacoras = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/bitacoras`);
            setDataBitacoras(response.data); 
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const deleteBitacoras = async (idbitacora) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/bitacoras/${idbitacora}`);
           
            getAllBitacoras();
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);


        }
    };


    return (
        <div className="px-10 flex flex-col gap-5">
            <Nav />

            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-20">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Bitacora
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora
                            </th>
                            <th scope="col" className="px-6 py-3">
                                IP
                            </th>
                            <th scope="col" className="px-6 py-3">
                                SO
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Navegador
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rol
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataBitacoras.map((el) => (
                            <tr key={el.idbitacora} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    {el.bitacora}
                                </td>
                                <td className="px-6 py-4">
                                    {el.idusuario}
                                </td>
                                <td className="px-6 py-4">
                                    {el.fecha}
                                </td>
                                <td className="px-6 py-4">
                                    {el.hora}
                                </td>
                                <td className="px-6 py-4">
                                    {el.ip}
                                </td>
                                <td className="px-6 py-4">
                                    {el.so}
                                </td>
                                <td className="px-6 py-4">
                                    {el.navegador}
                                </td>
                                <td className="px-6 py-4">
                                    {el.usuario}
                                </td>

                                <td className="px-6 py-4">
                                    <p className="p-[2px] w-[100px] rounded-lg text-white bg-green-800">Administrador</p>
                                </td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <Link to={`/edit bitacoras/${el.idbitacora}`} >
                                    <button className="Btn">Edit
                                        <svg className="svg" viewBox="0 0 512 512">
                                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                                    </button>
                                    </Link>
                                    <p className='flex bg-red-600 p-1 gap-4 rounded-md'>
                                    <button onClick={() => deleteBitacoras(el.idbitacora)} className="noselect delete"><span className="text">Delete</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to={`/create bitacora`}>
                <a className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500" href="">
                    <span className="text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">Agregar</span>
                    <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                        <svg className="svg w-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                    </span>
                </a>
            </Link>
        </div>
    )
}


export const EditBitacora = () => {
    const [usuario, setUsuario] = useState('');
    const [bitacora, setBitacora] = useState('');
    const [idusuario, setIdusuario] = useState(0);
    const [hora, setHora] = useState('');
    const [ip, setIp] = useState('');
    const [so, setSo] = useState('');
    const [navegador, setNavegador] = useState('');
    const [fecha, setFecha] = useState('');
    const [editSuccess, setEditSuccess] = useState(false);
    const [editError, setEditError] = useState(false);
    const navigate = useNavigate();
    const { idbitacora } = useParams();

    const update = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://127.0.0.1:8000/api/bitacoras/${idbitacora}`, {

                bitacora: bitacora,
                idusuario: idusuario,
                fecha: fecha,
                hora: hora,
                ip: ip,
                so: so,
                navegador: navegador,
                usuario: usuario

            });

            setEditSuccess(true);
            setEditError(false);

            navigate("/bitacoras");
        } catch (error) {
            console.error(error);
            setEditSuccess(false);
            setEditError(error.response?.data?.error || 'Error al editar los datos.');
        }
    }


    useEffect(() => {
        const getUsuarioById = async () => {
            const response = await axios.get(`${endpoint}${idbitacora}`);
            setUsuario(response.data.usuario);
            setBitacora(response.data.bitacora);
            setIdusuario(response.data.idusuario);
            setHora(response.data.hora);
            setIp(response.data.ip);
            setSo(response.data.so);
            setNavegador(response.data.navegador);
            setFecha(response.data.fecha);

        }
        getUsuarioById();
    }, [idbitacora]);


    return (
        <div className="w-full flex justify-center items-center flex-col gap-10">
            <Nav />

            <main className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between items-center px-8">
                    <h2 className=" text-2xl font-normal">Edit Bitacoras</h2>
                    <Link to={"/bitacoras"}>
                        <button className="flex items-center duration-200 hover:scale-125 active:scale-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                            Back
                        </button>
                    </Link>
                </div>
                <hr className="border border-gray-200 w-full" />
                <form onSubmit={update} className="py-5 px-8">
                    <div className="w-full flex justify-between">

                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID usuario</label>
                            <input value={idusuario} onChange={(e) => setIdusuario(e.target.value)} readOnly type="number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Bitacora</label>
                        <input value={bitacora} onChange={(e) => setBitacora(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                            <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Hora</label>
                            <input value={hora} onChange={(e) => setHora(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">IP</label>
                            <input value={ip} onChange={(e) => setIp(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">SO</label>
                            <input value={so} onChange={(e) => setSo(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Navegador</label>
                        <input value={navegador} onChange={(e) => setNavegador(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario</label>
                        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
                {editSuccess && (
                    <div className="alert alert-success">Datos editados con éxito.</div>
                )}
                {editError && (
                    <div className="alert alert-error">Error al editar los datos.</div>
                )}
            </main>
        </div>
    )

}


export const CreateUBitacora = () => {

    const [usuario, setUsuario] = useState('');
    const [bitacora, setBitacora] = useState('');
    const [idusuario, setIdusuario] = useState(0);
    const [hora, setHora] = useState('');
    const [ip, setIp] = useState('');
    const [so, setSo] = useState('');
    const [navegador, setNavegador] = useState('');
    const [fecha, setFecha] = useState('');
    const navigate = useNavigate();
    const createBitacora = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/api/bitacoras`, {
            bitacora: bitacora,
            idusuario: idusuario,
            fecha: fecha,
            hora: hora,
            ip: ip,
            so: so,
            navegador: navegador,
            usuario: usuario

        });
        navigate("/bitacoras");
    }

    return (
        <div className="px-10 flex flex-col items-center gap-10 pb-10">
            <Nav />

            <main className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between items-center px-8">
                    <h2 className=" text-2xl font-normal">Create bitacora</h2>
                    <Link to={"/bitacoras"}>
                        <button className="flex items-center duration-200 hover:scale-125 active:scale-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                            Back
                        </button>
                    </Link>
                </div>
                <hr className="border border-gray-200 w-full" />
                <form onSubmit={createBitacora} className="py-5 px-8">
                   
                        
                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID usuario</label>
                            <input onChange={(e) => setIdusuario(e.target.value)} type="number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Bitacora</label>
                        <input onChange={(e) => setBitacora(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                            <input onChange={(e) => setFecha(e.target.value)} type="date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Hora</label>
                            <input onChange={(e) => setHora(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">IP</label>
                            <input onChange={(e) => setIp(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">SO</label>
                            <input onChange={(e) => setSo(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Navegador</label>
                        <input onChange={(e) => setNavegador(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario</label>
                        <input onChange={(e) => setUsuario(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
            </main>
        </div>
    )
}
