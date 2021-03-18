import "./components.css";

interface IModal {
    // isShown: boolean;
    column_id: number;
}

export function ModalBox() {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-modal">x</span>
                <p>Hello, I am a modal</p>
                <br/>
            </div>
        </div>
    )
}