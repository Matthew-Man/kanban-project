import "./components.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IAddStages {
    addColumnInput: string,
    setAddColumnInput: React.Dispatch<React.SetStateAction<string>>,
    handleAddColumn: () => Promise<void>,
    toggleEditColumn: () => void,
    isEditColumn: boolean
}

export function AddStages({addColumnInput, setAddColumnInput, handleAddColumn, toggleEditColumn, isEditColumn}: IAddStages) {
    return (
        <div className="outer-container">
            <div className="stage-container">
                <input type="text" value={addColumnInput} onChange={(e) => setAddColumnInput(e.target.value)} placeholder="Add a new stage..."/>
                <button className="no-focus" onClick={() => handleAddColumn()}><FontAwesomeIcon icon={faPlus}/> Add Column</button>
                <button className="edit-columns no-focus" onClick={() => toggleEditColumn()}>{isEditColumn ? "Save changes" : "Edit columns"}</button>
            </div>
        </div>
    )
}