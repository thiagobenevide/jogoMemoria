
export default function Container({style, children}){
    return (
        <div className={style}>
            {children}
        </div>
    )
}