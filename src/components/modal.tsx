import "./components.css";

interface IModal {
    isModalShown: boolean,
    toggleModalShown: () => void,
    modalInput: string,
    setModalInput: React.Dispatch<React.SetStateAction<string>>,
    handleAddTask: () => void,
    columnName: string | undefined
}


export function ModalBox({ isModalShown, toggleModalShown, modalInput, setModalInput, handleAddTask, columnName }: IModal) {
    const modalClassName = isModalShown ? "modal" : "modal hide";
    return (
        <div className={modalClassName}>
            <div className="modal-content">
                <span id="close-modal" className="close-modal" onClick={() => toggleModalShown()}>x</span>
                <h4>Add a new task to <u>{columnName}</u></h4>
                <textarea name="modal-input" id="modal-input" cols={50} rows={4} className="modal-input" value={modalInput} onChange={(e) => setModalInput(e.target.value)} placeholder={"Type here..."} autoFocus></textarea>
                <div className="modal-add-button-container">
                    <button className="modal-button no-shadow" onClick={() => handleAddTask()}>Add Task</button>
                </div>
            </div>
        </div>
    )
}
