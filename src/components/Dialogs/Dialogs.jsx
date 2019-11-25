import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className ={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Дмитрий
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Андрей
                </div>
                <div className={s.dialog}>
                    Гоша
                </div>
                <div className={s.dialog}>
                    Маша
                </div>                
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Привет</div>
                <div className={s.dialog}>Как дела?</div>
                <div className={s.dialog}>Как тебе курсы?</div>  
            </div>
        </div>
    );
}

export default Dialogs;