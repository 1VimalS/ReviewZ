import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomeButton() {

    const navigate = useNavigate();
    return(
        <button onClick={ () => navigate('/')}>
            Home
        </button>
    )
}

function Filters() {
    
}

function TopBar(props) {
    return(
        <div>
            <HomeButton />
            <h1>ReviewZ</h1>
        </div>
    );
}



export default function Analyzer() {
    return(
        <TopBar />
    );
}