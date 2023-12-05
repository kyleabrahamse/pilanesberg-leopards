import "./button.scss"

function Button({ text, buttonType }) {
    return (
        <button className={ buttonType === "white" ? "white" : "black" }>{text}</button>
    )
}

export default Button