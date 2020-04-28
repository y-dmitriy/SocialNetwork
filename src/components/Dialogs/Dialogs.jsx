import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Petr
                </div>
                <div className={s.dialog}>
                    Lilya
                </div>
                <div className={s.dialog}>
                    Zhenya
                </div>
                <div className={s.dialog}>
                    Aleksey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;