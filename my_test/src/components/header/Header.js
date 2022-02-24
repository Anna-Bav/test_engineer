import React from 'react';
import './Header.css';



export default function Header() {
    return(
        <div className='header'>
          <div className='header_inner'>
              <div className='header_inner_nav'>
                  <div className='header_inner_nav1'>
                    <div><img src='/images/burger.svg'/></div>
                    <div><img src='/images/diagnostics.svg'/></div>
                  </div>
                  <div className='header_inner_nav2'>
                      <div>
                          <div className='header_inner_nav2_text'>Пишите нам на email</div>
                          <div className='header_inner_nav2_mailText'>
                              <img src='/images/mail.svg'/>
                              <div>info@diagnistics.by</div>
                          </div>
                      </div>
                      <div>
                          <div className='header_inner_nav2_phoneText'>
                            <img src='/images/phone.svg'/>
                            <div className='header_inner_nav2_text'>Есть вопросы? Звоните!</div>
                          </div>
                          <div className='header_inner_nav2_phone'>+375 (29) 456-45-45</div>
                      </div>
                  </div>
              </div>


              <div className='header_inner_main'>
                <div className='main_inner'>
                    <div className='main_inner1'>
                        <div className='main_inner_text1'>Независимое обследование зданий и сооружений</div>
                        <div className='main_inner_text2'>антенн, труб, теплосетей, канализаций и других объектов строительства</div>
                    </div>
                    <div className='main_inner2'>
                    <button className='main_btn'><img src='/images/download.svg'/>получить коммерческое</button>
                    <div className='main_main_inner2_text'>Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер</div>
                    </div>
                </div>
              </div>


              <div className='header_inner_footer'>

                <div className='inner_footer'>
                <div className='header_inner_footer01'>
                    <img src='/images/01.svg'/>
                    <div className='header_inner_footer_text'>Начинаем работать без аванса</div>
                </div>

                <div className='header_inner_footer01'>
                    <img src='/images/02.svg'/>
                    <div className='header_inner_footer_text'>Предоставляем отсрочку платежа</div>
                </div>

                <div className='header_inner_footer03'>
                    <img src='/images/02.svg'/>
                    <div className='header_inner_footer_text2'>Всегда называем справедливую цену</div>
                </div>
                </div>

                <div className='header_inner_footer_video'>
                <img src='/images/video.svg'/>
                </div>
              </div>
          </div>
        </div>
    )
}