import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import NoAuthorized from '../ui/NoAuthorized';
import '../../index.css';
import Create from './Create';
import jsPDF from 'jspdf';
import { getDelitos } from '../../services/delitoService'
import { CrimeRow } from './CrimeRow';

export default function Crimes() {

    const [delitos, setDelitos] = useState([])

    const { isAdmin } = useContext(AuthContext);
    const table = useRef();

    const print = () => {
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.fromHTML(table.current);
        pdf.save("pdf");
    }

    const listardelitos = async () => {
        try {
            const { data } = await getDelitos()
            setDelitos(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listardelitos()
    }, [])

    return (
        <>
            {isAdmin &&
                (<div className="container" ref={table}>
                    <div className="table-responsive mb-5" >
                        <table className="table" >
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    delitos.map(delito => {
                                        return <CrimeRow key={delito._id} delito={delito} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <button
                        data-bs-toggle="modal"
                        href="#exampleModalToggle"
                        className="btn btn-outline-success mx-2"
                        title="Agregar nuevo"
                    >
                        <i className="fas fa-plus-circle"></i>
                    </button>

                    <button
                        className="btn btn-outline-primary"
                        title="Imprimir PDF"
                        onClick={print}
                    >
                        <i className="fas fa-print"></i>
                    </button>
                </div>)
            }
            {
                !isAdmin && (
                    <NoAuthorized />
                )
            }
            <Create />
        </>
    )
}
