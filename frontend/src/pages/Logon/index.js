import React, { useState } from 'react';
import './style.css';
import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Logon() {
    const history = useHistory();
    const [ id, setId ] = useState('');

    async function handleLogon(e) {
        e.preventDefault();
        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch(err) {
            alert('Erro no Login. Por favor, tente novamente.');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={ e => setId(e.target.value) }
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

                <img src={heroes} alt="Heroes"/>
            </section>
        </div>
    );
}