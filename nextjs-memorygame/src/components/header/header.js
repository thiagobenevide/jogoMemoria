import style from '../header/header.module.css'

export default function Header({style, title, styleTitle, children}){
    return (
        <div className={style}>
            <div>
                <h1 className={styleTitle}>{title}</h1>
                {children}
            </div>

        </div>
    )
}