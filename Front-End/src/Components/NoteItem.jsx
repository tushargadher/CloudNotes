import React, { useContext, useState } from "react";
import edit from "../write.png";
import delet from "../delete.png";
import noteContext from "../context/notes/NoteContext";
const NoteItem = (props) => {

    const context = useContext(noteContext)
    const { note } = props;

    const { editNote, deleteNote, display } = context;

    const [disply, setDisplay] = useState('false');//for toggling the edit note model
    const [Note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    //this funtion is called when user edit note and click update note
    const handleUpdateClick = (id) => {

        editNote(Note.id, Note.etitle, Note.edescription, Note.etag);
        // alert(`Updated Succuesfully ${id}`)
        props.showAlert("Note has been Updated...", "true")
    }



    const hanldeOnchange = (event) => {
        //here we are adding user input into the varible 'note'
        //spread operation means new value are added in previous value
        setNote({ ...Note, [event.target.name]: event.target.value });
    }

    //this function is called when user click on edit button
    const updateNote = (currentNote) => {

        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });

    }




    return (
        <>
            {/**Edit note popup */}
            <div className={`${disply === 'false' ? "hidden" : "visible"} modal fade w-4/5 fixed top-[20%] left-[11%] md:top-[22%] md:left-[37%] md:w-3/12 md:h-4/6 outline-none overflow-x-hidden overflow-y-auto z-10 `}>
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-start p-4 border-b border-gray-200 rounded-b-md">
                            <p className="font-bold text-xl">Update Note</p>
                        </div>
                        <div className="modal-body relative p-4">
                            <div className="mb-6">
                                <label htmlFor="etitle" className="block mb-2 text-base font-medium text-gray-900 ">Note Title</label>
                                <input type="text" value={Note.etitle} id="etitle" name="etitle" className="block p-2.5 w-full text-sm text-gray-900 rounded-md   bg-gray-100 dark:border-gray-600 outline-gray-600" placeholder="Add Note title..." onChange={hanldeOnchange} />
                            </div>
                            <div>
                                <label htmlFor="edescription" className="block mb-2 text-base font-medium text-gray-900 ">Note Description</label>
                                <textarea id="description" value={Note.edescription} name="edescription" rows="6" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg  bg-gray-100 dark:border-gray-600 outline-gray-600" placeholder="Add Note description..." onChange={hanldeOnchange}></textarea>
                            </div>
                            <div >
                                <label htmlFor="etag" className="block mb-2 text-base font-medium text-gray-900 ">Note Tag</label>
                                <input type="text" value={Note.etag} id="etag" name="etag" className="block p-2.5 w-full text-sm text-gray-900 rounded-md  bg-gray-100 dark:border-gray-600 outline-gray-600" placeholder="Add Note tag..." onChange={hanldeOnchange} />
                            </div>
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">

                            <button type="button"
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" onClick={() => setDisplay('false')}>Cancel</button>
                            <button type="button"
                                className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1 ${Note.etitle.length < 5 || Note.edescription.length < 5 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => { handleUpdateClick(Note.id); setDisplay('false') }}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/**edit note end */}




            {/* display note model */}

            <div id="small-modal" className={`w-full  md:w-1/5 p-3 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full box-border ${display === 'false' ? " " : "blur-[3px]"} `}>
                <div className="relative w-full h-full max-w-md md:h-auto ">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-slate-100 rounded-md shadow-lg border dark:border-gray-300 ">
                        {/* <!-- Note Title --> */}
                        <div className="flex items-center justify-between p-4 border-b rounded-t ">
                            <h3 className="text-lg font-medium text-gray-900 ">
                                {note.title}
                            </h3>
                            <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-gray-500  text-slate-50 rounded-md">
                                {note.tag}
                            </div>
                        </div>
                        {/* <!-- Note Description --> */}
                        <div className="p-5 space-y-6">
                            <p className="text-base leading-relaxed text-gray-600 text-justify">
                                {note.description}
                            </p>
                        </div>
                        <div className="px-5 text-gray-600">

                            <span>{new Date(note.date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</span>
                        </div>
                        <div className="px-5 py-2 flex items-center hover:cursor-pointer ">

                            {/* editnote button */}
                            <img src={edit} alt="edit btn" id="editBtn" className=" active:animate-bounce text-xs" onClick={() => { updateNote(note); setDisplay(true) }} disabled={Note.etitle.length < 5 || Note.edescription.length < 5 ? true : false}/>
                            {/* delete note button */}
                            <img src={delet} alt="deletebtn" id="deleteBtn" className=" px-2 active:animate-ping"
                                onClick={() => {
                                    deleteNote(note._id);
                                    props.showAlert("Note Deleted...", "true")
                                }} />{/**Array function becaues we are sending argument in function call */}
                        </div>

                    </div>
                </div>
            </div>

        </>
    );

}
export default NoteItem;