import React from 'react';
import './../css/main_form.css';
import Header from '../../common/header/tsx/header';
import Footer from '../../common/footer/tsx/footer';

const Main_form: React.FC = () => {

    const path: string = "main";

    return(
        <div className='main_form_container'>
            <Header path={path}></Header>
            <div style={{height:"900px"}}></div>
            <Footer></Footer>
        </div>
    )
}

export default Main_form;