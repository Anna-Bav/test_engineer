import React from 'react';
import './Services.css';
import CustomScroll from 'react-custom-scroll';


export default function Services() {
    return(
        <div className='services'>
           <div className='services_header'>Услуги</div>
           <div className='services_opis'>Выполняем как комплексное обследование, так и отдельные виды работ</div>
           
           {/* <CustomScroll> */}
           <div className='list'>
                <div class="list_content">
                    <img className='list_img' src='/images/scroll1.svg'/>
                    <div className='list_content_header'>Общее обследование</div>
                    <div className='list_content_text'>Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.</div>
                    <div className='list_content_more'><div className='more'>Подробнее</div><img src='/images/arrow.svg'/></div>
                </div>

                <div class="list_content">
                <img className='list_img' src='/images/scroll2.svg'/>
                    <div className='list_content_header'>Тепловизионная съемка</div>
                    <div className='list_content_text'>Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания</div>
                    <div className='list_content_more'><div className='more'>Подробнее</div><img src='/images/arrow.svg'/></div>
                </div>

                <div class="list_content">
                <img className='list_img' src='/images/scroll3.svg'/>
                    <div className='list_content_header'>Телеинспекция инженерных сетей</div>
                    <div className='list_content_text'>Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров</div>
                    <div className='list_content_more'><div className='more'>Подробнее</div><img src='/images/arrow.svg'/></div>
                </div>

                <div class="list_content">
                <img className='list_img' src='/images/scroll3.svg'/>
                    <div className='list_content_header'>Тахеометрическая съемка</div>
                    <div className='list_content_text'>Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве</div>
                    <div className='list_content_more'><div className='more'>Подробнее</div><img src='/images/arrow.svg'/></div>
                </div>

           </div>
            {/* </CustomScroll> */}
           
          
        </div>
    )
}