import './../css/login_form.css';
import Header from '../../common/header/tsx/header';
import Footer from '../../common/footer/tsx/footer';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SiNaver } from "react-icons/si";
import { FaApple } from "react-icons/fa";

interface locationState {
    path: string;
}
const Login_form: React.FC = () => {
    
    const location = useLocation();
    const path = (location.state as locationState)?.path ?? "defaultPath";

    return(
        <div className='login_form_container'>
            <Header path={path}></Header>
            <div className='login_form_content'>
                <div className='login_form_logo_content'>
                    <img className='login_form_logo' src={`${process.env.PUBLIC_URL}/img/kream-login-logo.png`}></img>
                </div>
                <div className='login_form_email_input_container'>
                    <div className='login_form_email_input_title'>이메일 주소</div>
                    <input className='login_form_email_input' type='text' placeholder='예) kream@kream.co.kr'></input>
                    <button className='login_form_eamil_x'>x</button>
                </div>
                <div className='login_form_password_input_container'>
                    <div className='login_form_password_input_title'>이메일 주소</div>
                    <input className='login_form_password_input' type='password'></input>
                </div>
                {

                }
                <div className='login_form_login_none_btn_container'>
                    로그인
                </div>
                {/* <div className='login_form_login_btn_container'>
                    로그인
                </div> */}
                <div className='login_form_category_container'>
                    <div className='login_form_category1'>
                        이메일 가입
                    </div>
                    <div className='login_form_category2'>
                        이메일 찾기
                    </div>
                    <div className='login_form_category3'>
                        비밀번호 찾기
                    </div>
                </div>
                <div className='login_form_sns_conatiner'>
                    <div className='login_form_sns_content'>
                        <div className='login_form_sns_icon_content'>
                            <SiNaver className='login_form_sns_naver'/>
                        </div>
                        <div className='login_form_sns_text'>
                            네이버로 로그인
                        </div>  
                    </div>
                    <div className='login_form_sns_content'>
                        <div className='login_form_sns_icon_content'>
                            <FaApple className='login_form_sns_apple'/>
                        </div>
                        <div className='login_form_sns_text'>
                            Apple로 로그인
                        </div>
                    </div>
                </div>
            </div>  
            <Footer></Footer>
        </div>
    )
}

export default Login_form;