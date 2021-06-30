import React from 'react'

export const SimpleForm = () => {

    const [form, setForm] = React.useState({
        name: '',
        email: '',
    })

    const {name, email} = form

    //Con useEffect puedo escuchar cambios especificos de un elemento o componente 
    //para ejecutar alguna acción, en este caso estoy escuchando los cambios en el
    //input de email 

    React.useEffect(() => {
        console.log('cambio el email');
    }, [email])

    const handleInputChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr />

            <form action="">
                <input 
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="nombre"
                    value={name}
                    onChange={ handleInputChange }
                />
                <input 
                    type="text"
                    name="email"
                    autoComplete="off"
                    placeholder="email"
                    value={email}
                    onChange={ handleInputChange }
                />
            </form>
        </div>
    )
}
