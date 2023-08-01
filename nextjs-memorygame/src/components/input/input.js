export default function Input({style,...props}){
    return (
        <div>
            <input className={style} {...props}></input>
        </div>
    )
}