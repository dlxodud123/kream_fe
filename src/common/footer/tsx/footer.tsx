import './../css/footer.css';
import React from 'react';

const Footer :React.FC = () => {

    return(
        <footer className='footer_container'>
            <div className='footer_top_container'>
                <div className='footer_top_content'>
                    <div>
                        회사소개
                    </div>
                    <div>
                        인재채용
                    </div>
                    <div>
                        제휴제안
                    </div>
                    <div>
                        이용약관
                    </div>
                    <div>   
                        개인정보처리방침    
                    </div>
                </div>
                <div className='footer_top_icon'>

                </div>
            </div>
            <div className='footer_bottom_container'>

            </div>
        </footer>
    )
}

export default Footer;