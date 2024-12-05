import './../css/header.css';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    path: string;  // path prop을 받기 위한 타입 정의
}

const Header :React.FC<HeaderProps> = ({path}) => {
    const navigate = useNavigate();
    console.log(path)

    let [mainSelect, setMainSelect] = useState<string>("HOME");
    let [categorySelect, setCategorySelect] = useState<string>("추천");

    return(
        <header className='header_container'>
            <div className='header_top_container'>
                <div onClick={() => { navigate('/고객센터') }} className='header_top_content'>
                    고객센터
                </div>
                <div onClick={() => { navigate('/마이페이지') }} className='header_top_content'>
                    마이페이지
                </div>
                <div onClick={() => { navigate('/관심') }} className='header_top_content'>
                    관심
                </div>
                <div onClick={() => { navigate('/알림') }} className='header_top_content'>
                    알림
                </div>
                <div onClick={() => { navigate('/login', { state: { path : 'login' } }) }} className='header_top_content'>
                    로그인
                </div>
            </div>
            <div className='header_main_container'>
                <img onClick={() => {navigate('/')}} className='header_main_logo_img' src={`${process.env.PUBLIC_URL}/img/kream-logo.png`}></img>
                <div style={{display:"flex"}}>
                    <div onClick={() => { setMainSelect("HOME"); navigate("/HOME") }} style={{fontWeight: mainSelect === "HOME" ? '700' : '400'}} className='header_main_content'>
                        HOME
                    </div>
                    <div onClick={() => { setMainSelect("STYLE"); navigate("/STYLE") }} style={{fontWeight: mainSelect === "STYLE" ? '700' : '400'}} className='header_main_content'>
                        STYLE
                    </div>
                    <div onClick={() => { setMainSelect("SHOP"); navigate(("/SHOP")) }} style={{fontWeight: mainSelect === "SHOP" ? '700' : '400'}} className='header_main_content'>
                        SHOP
                    </div>
                    <div className='header_main_icon_content'>
                        <CiSearch className='header_search_icon' />
                    </div>
                    <div className='header_main_icon_content'>
                        <LiaShoppingBagSolid className='header_shop_icon' />
                    </div>
                </div>
            </div>
            {path !== 'login' && (
                <div className='header_category_container'>
                    <div onClick={() => { setCategorySelect("#아우터"); navigate("/아우터"); }} style={{ fontWeight: categorySelect === "#아우터" ? '700' : '400', borderBottom: categorySelect === "#아우터" ? '2px solid #222' : 'none' }} className='header_category_first_content'>
                        #아우터
                    </div>
                    <div onClick={() => { setCategorySelect("추천"); navigate("/추천") }} style={{ fontWeight: categorySelect === "추천" ? '700' : '400', borderBottom: categorySelect === "추천" ? '2px solid #222' : 'none' }} className='header_category_content'>
                        추천
                    </div>
                    <div onClick={() => { setCategorySelect("랭킹"); navigate("/랭킹") }} style={{ fontWeight: categorySelect === "랭킹" ? '700' : '400', borderBottom: categorySelect === "랭킹" ? '2px solid #222' : 'none' }} className='header_category_content'>
                        랭킹
                    </div>
                    <div onClick={() => { setCategorySelect("럭셔리"); navigate("/럭셔리") }} style={{ fontWeight: categorySelect === "럭셔리" ? '700' : '400', borderBottom: categorySelect === "럭셔리" ? '2px solid #222' : 'none' }} className='header_category_content'>
                        럭셔리
                    </div>
                    <div onClick={() => { setCategorySelect("남성"); navigate("/남성") }} style={{ fontWeight: categorySelect === "남성" ? '700' : '400', borderBottom: categorySelect === "남성" ? '2px solid #222' : 'none' }} className='header_category_content'>
                        남성
                    </div>
                    <div onClick={() => { setCategorySelect("여성"); navigate("/여성") }} style={{ fontWeight: categorySelect === "여성" ? '700' : '400', borderBottom: categorySelect === "여성" ? '2px solid #222' : 'none' }} className='header_category_content'>
                        여성
                    </div>
                    <div onClick={() => { setCategorySelect("발견"); navigate("/발견") }} style={{ fontWeight: categorySelect === "발견" ? '700' : '400', borderBottom: categorySelect === "발견" ? '2px solid #222' : 'none' }} className='header_category_content'>
                        발견
                    </div>
                    <div onClick={() => { setCategorySelect("이벤트"); navigate("/이벤트") }} style={{ fontWeight: categorySelect === "이벤트" ? '700' : '400', borderBottom: categorySelect === "이벤트" ? '2px solid #222' : 'none' }} className='header_category_content'>
                        이벤트
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;