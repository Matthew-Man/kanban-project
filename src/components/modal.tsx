import "./components.css";

interface IModal {
    isModalShown: boolean,
    toggleModalShown: () => void,
    // column_id: number;
}


export function ModalBox({ isModalShown, toggleModalShown }: IModal) {
    const modalClassName = isModalShown ? "modal" : "modal hide";
    return (
        <div className={modalClassName}>
            <div className="modal-content">
                <span id="close-modal" className="close-modal" onClick={() => toggleModalShown()}>x</span>
                <h4>Add a new task to [column id/name]</h4>
                <textarea name="modal-input" id="modal-input" cols={50} rows={4} className="modal-input"></textarea>
                <div className="modal-add-button-container">
                    <button className="modal-button">Add Task</button>
                </div>
            </div>
        </div>
    )
}
