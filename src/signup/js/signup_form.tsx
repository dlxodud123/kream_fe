import './../css/signup_form.css';
import Header from '../../common/header/tsx/header';
import Footer from '../../common/footer/tsx/footer';
import React from 'react';

const Signup_form: React.FC = () => {

    const path: string = "signup";

    return(
        <div className='signup_form_container'>
            <Header path={path}></Header>
            <div className='signup_form_margin_content'>
                <div className='signup_form_content'>
                    <div className='signup_form_title_content'>
                        회원가입
                    </div>

                    <div className='signup_form_email_input_content'>
                        <label className='signup_form_email_input_title'>이메일 주소</label>
                        <br />
                        <input className='signup_form_email_input' placeholder='예) kream@kream.co.kr' type='text'></input>
                    </div>

                    <div className='signup_form_password_input_content'>
                        <label className='signup_form_password_input_title'>비밀번호</label>
                        <br />
                        <input className='signup_form_password_input' placeholder='영문, 숫자, 특수문자 조합 8-16자' type='password'></input>
                    </div>

                    <div className='signup_form_referrer_input_content'>
                        <label className='signup_form_referrer_input_title'>추천인코드</label>
                        <br />
                        <input className='signup_form_referrer_input' placeholder='추천인 코드를 입력하세요' type='text'></input>
                    </div>

                    <div className='signup_form_shoes_input_content'>
                        <label className='signup_form_shoes_input_title'>신발 사이즈</label>
                        <br />
                        <input className='signup_form_shoes_input'></input>
                    </div>

                    <div className='signup_form_agreement_input_content'>
                        <div className='signup_form_agreement_input_title_container'>
                            <div className='signup_form_agreement_input_title_checkbox_content'>
                                <input className='signup_form_agreement_input_title_checkbox' type='checkbox'></input>
                            </div>
                            <div className='signup_form_agreement_input_title_content'>
                                <p className='signup_form_agreement_input_title1'>
                                    모두 동의합니다
                                    <p className='signup_form_agreement_input_title2'>선택 동의 항목 포함</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Signup_form;