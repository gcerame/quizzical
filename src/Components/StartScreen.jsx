import "./StartScreen.css"

export default function StartScreen (props) {
    return (
        <div className="start-screen">
            <h2>Quizzical</h2>
            <p>Some description if needed</p>
            <button className="start-button" onClick={props.toggleStartScreen} >
                Start quiz
            </button>
        </div>
    )
}