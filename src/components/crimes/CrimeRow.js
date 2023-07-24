import React from 'react'

export const CrimeRow = ( { delito }) => {
    return (
        <>
            <tr className="table-active">
                <th scope="row">{delito.id}</th>
                <td>{delito.nombre}</td>
                <td>{delito.descripcion}</td>
                <td>
                    <button
                        className="btn btn-outline-primary mx-2"
                        title="Editar"
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        title="Eliminar este"
                    >
                        <i className="fa fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}
