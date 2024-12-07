import './../css/login_form.css';
import Header from '../../common/header/tsx/header';
import Footer from '../../common/footer/tsx/footer';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiNaver } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const Login_form: React.FC = () => {
    const navigate = useNavigate();
    
    const path: string = "login";

    let [emailValue, setEmailValue] = useState<string>('');
    let [passwordValue, setPasswordValue] = useState<string>('');
    let [loginBtn, setLoginBtn] = useState<boolean>(false);

    useEffect(() => {
        console.log("이메일 : ", emailValue);
        console.log("비밀번호 : ", passwordValue);
        if ((emailValue.length > 0) && (passwordValue.length > 0)) {
            setLoginBtn(true);
        }else{
            setLoginBtn(false);
        }
    }, [emailValue, passwordValue, loginBtn])

    return(
        <div className='login_form_container'>
            <Header path={path}></Header>
            <div className='login_form_content'>
                <div className='login_form_logo_content'>
                    <img onClick={() => {navigate('/')}} className='login_form_logo' src={`${process.env.PUBLIC_URL}/img/kream-login-logo.png`}></img>
                </div>
                <div className='login_form_email_input_container'>
                    <div className='login_form_email_input_title'>이메일 주소</div>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)} className='login_form_email_input' type='text' placeholder='예) kream@kream.co.kr'></input>
                </div>
                <div className='login_form_password_input_container'>
                    <div className='login_form_password_input_title'>비밀번호</div>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)} className='login_form_password_input' type='password'></input>
                </div>
                {loginBtn ?
                    <div className='login_form_login_btn_container'>
                        로그인
                    </div>
                :
                    <div className='login_form_login_none_btn_container'>
                        로그인
                    </div>
                }
                <div className='login_form_category_container'>
                    <div onClick={() => {navigate('/join')}} className='login_form_category1'>
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