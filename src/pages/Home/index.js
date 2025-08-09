import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { NoteCard } from "../../components/NoteCard";
import { useNotes } from "../../context/notes-context";
const Home = () => {

  const {title, text, notes, notesDispatch} = useNotes();
  const onTitleChange =(e) => {
    notesDispatch({type: "SET_TITLE", payload: e.target.value});
  }
  const onTextChange =(e) => {
    notesDispatch({type: "SET_TEXT", payload: e.target.value});
  }

  const onAddClick = () => {
    notesDispatch({type: "ADD_NOTE"});
    notesDispatch({type: "CLEAR_TEXT"});
  }

  console.log(notes);
  const pinnedNotes = notes.filter(note => note.isPinned && !note.isArchived && !note.isDeleted);
  const unpinnedNotes = notes.filter(note => !note.isPinned && !note.isArchived && !note.isDeleted);

  return (
    <>
      <Navbar />
      <main  className="flex gap-3">
        <Sidebar />
        <div className="p-4 w-screen">
          <div className="flex flex-col gap-4 p-4 border-indigo-500 border-2 rounded-lg">
            <input className="p-2" placeholder="Enter Title..." value={title} onChange={onTitleChange} />
            <textarea className="p-2" placeholder="Enter Note..." value={text} onChange={onTextChange}></textarea>
            <button disabled = {title.length===0} className="bg-blue-500 text-white p-2 rounded" onClick={onAddClick}>Add Note</button>
          </div>

          <div className="flex flex-wrap gap-4">
            {
              pinnedNotes.length > 0 && pinnedNotes.map((note) => (
                <NoteCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} isArchived={note.isArchived} />
              ))
            }
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              {
                unpinnedNotes.length > 0 && unpinnedNotes.map((note) => (
                  <NoteCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} isArchived={note.isArchived} />
                ))
              }
            </div>
          </div>
          
        </div>

      </main>
      <Footer />

    </>
  );
};

export default Home;