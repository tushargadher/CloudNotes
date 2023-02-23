import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/NoteContext";
import { useNavigate } from "react-router-dom";
import EmptyNote from '../empty.jpg';

const ViewNote = (props) => {

    const context = useContext(noteContext);
    const { notes, fetchNote,display } = context;
    const navigate = useNavigate();


    useEffect(() => {

        //if the token is null then we will redirect user to login page
        if (localStorage.getItem('token')) {
            fetchNote();
        } else {
            navigate("/login");
        }
        // for remove warning
        // eslint-disable-next-line 
    }, [notes]);


    return (
        <>

            {/**edit note popup end */}
            <div className=" h-full p-3 box-border">
                <div className="flex flex-col md:flex-row flex-wrap ">


                    {notes.length === 0 &&
                        <div className="container h-[70vh] flex items-center flex-col">
                            <span className="py-5 md:text-xl md:font-semibold">You have no notes here</span>
                            <img src={EmptyNote} className={`md:h-4/5 ${display === 'false' ? " " : "blur-[3px]"}`} alt="no notes" />
                        </div>}

                    {
                        notes.map((note) => {
                            // return notes.title;
                            return <NoteItem key={note._id} note={note} showAlert={props.showAlert} />
                        })
                    }
                </div>

            </div>




        </>
    );
}
export default ViewNote;