import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
    const host = process.env.HOST;

    const [notes, setNotes] = useState([]);
    const [userName, setUsername] = useState();


    const [display, setDisplay] = useState('false');//for toggling the edit note model
    //this varible is usefull for display the name of user when user login


    //fetch all notes fucntion

    const fetchNote = async () => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        // console.log(json);
        setNotes(json);
    }

    //creating a notes state varible with the initial value of notesInitial varible


    //addnote function
    const addNote = async (title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }) //this  data is enter by user  
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    }


    //edit note function
    const editNote = async (id, title, description, tag) => {
        //API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        console.log(response)

        let newNotes = JSON.parse(JSON.stringify(notes));
        //Edit note logic
        for (let index = 0; index < newNotes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }

        setNotes(newNotes);

    }


    //delete note function
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });

        console.log(response)
    }

    //get the user data 
    const getUserdata = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('token')
            },
        });

        const json = await response.json();
        // console.log(json)

        setUsername(json.name);
    }


    //this function is change the value of display
    const toggleDisplay = (arg) => {
        setDisplay(`${arg}`);
    }



    return (
        //this will provide all state of notestate

        <NoteContext.Provider value={{ display, userName, notes, addNote, deleteNote, editNote, fetchNote, getUserdata, toggleDisplay }}>{/**here we sending stata and update function */}
            {props.children}

        </NoteContext.Provider>
    );

}

export default NoteState;