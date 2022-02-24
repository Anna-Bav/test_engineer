import React from 'react';
import './Main.css';



export default function Main() {
    return(
        <div className='main'>
            <div className='main_inner'>


                <div className='main_inner_1'>
                    <div className='main_inner_1_text1'>Мы работаем быстро <br></br>и наши отчеты проходят согласование с первого раза</div>
                    <div className='main_inner_1_text2'>Над вашим объектом работает целая команда: 3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных работ</div>
                </div>
                <div className='main_inner_2'>
                <img src='/images/tv.svg'/>
                </div>
                <div className='main_inner_3'>
                    <div className='main_inner_3_header'>Вы и Ваши архитекторы получаете:</div>
                    <div className='main_inner_3_point'>
                    <img src='/images/icon.svg'/> 
                    <div>Отчет на который на 100% можно положиться </div>
                    </div>
                    <div className='main_inner_3_point'>
                    <img src='/images/icon.svg'/> 
                    <div>Экономию времени и прогнозируемость сроков </div>
                    </div>
                    <div className='main_inner_3_point'>
                    <img src='/images/icon.svg'/> 
                    <div>Предварительные результаты сразу на месте</div> 
                    </div>
                </div>
            </div>
          
        </div>
    )
}