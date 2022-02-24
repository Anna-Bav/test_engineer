import React from 'react';
import './Step_1.css';



export default function Step_1() {
    return(
        <div className='step_1'>
           <div className='step_1half'>
           <img src='/images/henry.svg'/> 
           </div>
           <div className='step_1half'>
               <div className='step_1half_header'>
                   <div className='step_1_text'>шаг №1. </div>
                   <div className='step_1_text2'>Подготовительные работы</div>
               </div>
               <div className='step_1_opis'>Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. </div>
               <div className='step_1_photo'>
               <img src='/images/circle.svg'/>
               <div>“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“</div>
               </div>
               <div className='step_1_name'>АЛЕКСЕЙ, обследователь и главный инженер проектов</div>
           </div>
        </div>
    )
}