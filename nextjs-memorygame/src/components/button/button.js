export default function Button({children, style, ...props}){
    return (
        <button className={style} {...props}>{children}</button>
    )
}