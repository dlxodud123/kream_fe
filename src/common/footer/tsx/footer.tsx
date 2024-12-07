import './../css/footer.css';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

const Footer :React.FC = () => {

    return(
        <footer className='footer_container'>

            <div className='footer_service_container'>
                <div className='footer_service1_content'>
                    <div className='footer_service1_first'>
                        이용안내
                    </div>
                    <div className='footer_service1_second'>
                        검수기준
                    </div>
                    <div className='footer_service1'>
                        이용정책
                    </div>
                    <div className='footer_service1'>
                        패널티 정책
                    </div>
                    <div className='footer_service1'>
                        커뮤니티 가이드라인
                    </div>
                </div>
                <div className='footer_service2_content'>
                    <div className='footer_service2_first'>
                        고객지원
                    </div>
                    <div className='footer_service2_second'>
                        공지사항
                    </div>
                    <div className='footer_service2'>
                        서비스 소개
                    </div>
                    <div className='footer_service2'>
                        스토어 안내
                    </div>
                    <div className='footer_service2'>
                        판매자 방문접수
                    </div>
                </div>
                <div className='footer_service3_content'>
                    <div className='footer_service3_first'>
                        고객센터 1588-7813
                    </div>
                    <div className='footer_service3_second'>
                        운영시간 평일 10:00 - 18:00 (토∙일, 공휴일 휴무)<br />
                        점심시간 평일 13:00 - 14:00
                    </div>
                    <div className='footer_service3_third'>
                        1:1 문의하기는 앱에서만 가능합니다.
                    </div>
                    <div className='footer_service3_fourth'>
                        자주 묻는 질문
                    </div>
                </div>
            </div>

            <div className='footer_top_container'>
                <div className='footer_top_content'>
                    <div className='footer_top'>
                        회사소개
                    </div>
                    <div className='footer_top'>
                        인재채용
                    </div>
                    <div className='footer_top'>
                        제휴제안
                    </div>
                    <div className='footer_top'>
                        이용약관
                    </div>
                    <div className='footer_top'>   
                        개인정보처리방침    
                    </div>
                </div>
                <div className='footer_top_icon'>
                    <FaInstagram onClick={() => window.open("https://www.instagram.com/kream.co.kr/", "_blank")} className='footer_top_icon_instagram' />
                    <FaFacebook onClick={() => window.open("https://www.facebook.com/KREAM.co.kr", "_blank")} className='footer_top_icon_facebook' />
                    <RiKakaoTalkFill onClick={() => window.open("https://pf.kakao.com/_adpxlxb", "_blank")} className='footer_top_icon_kakao' />
                </div>
            </div>
            <div className='footer_middle_container'>
                크림 주식회사 · 대표 김창욱 &nbsp;&nbsp;&nbsp;&nbsp; 사업자등록번호 : 570-88-01618 사업자정보확인 &nbsp;&nbsp;&nbsp;&nbsp; 통신판매업 : 제 2021-성남분당C-0093호<br />
                사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 7층 &nbsp;&nbsp;&nbsp;&nbsp; 호스팅 서비스 : 네이버 클라우드 ㈜
            </div>
            <div className='footer_bottom_container'>
                <div className='footer_bottom_1'>
                    신한은행 채무지급보증 안내
                </div> 
                <div className='footer_bottom_2'>
                    당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.서비스가입 사실 확인
                </div>  
                <div className='footer_bottom_3'>
                    크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관<br />
                    한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하<br />
                    는 내용에 대한 책임은 크림(주)에 있습니다.
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;