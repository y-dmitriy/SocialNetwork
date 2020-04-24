import React from 'react';
import s from './Navbar.module.css';
console.log(s);

//Что бы брать стиль из объекта s
// Стиль в виде объекта вида: 
// let s = {
//     'nav': 'Navbar_nav__2IedX'
//     'item': 'Navbar_item__2hx_C'
//      'active': Blalbla_active
// }
// let c1= "item";
// let c2= "active";
// //className="item active"
// let classes= c1+" "+c2;
// let classesNew= `${s.item} ${s.active}`; //Вставляем джаваскрипт внутрь строки. пробел идет как строка.


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Message</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>;
}

export default Navbar;