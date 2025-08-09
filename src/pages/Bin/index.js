import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { NoteCard } from "../../components/NoteCard";
import { useNotes } from "../../context/notes-context";
const Bin = () => {

  const {title, text, notes, notesDispatch} = useNotes();
  const deletedNotes = notes.filter(note => note.isDeleted);
  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="p-4 w-screen">
          <h1 className="text-2xl font-bold">Deleted Notes</h1>
          <div className="flex flex-wrap gap-4">
            {
              deletedNotes.length > 0 && deletedNotes.map((note) => (
                <NoteCard key={note.id} id={note.id} title={note.title} text={note.text} isPinned={note.isPinned} isArchived={note.isArchived} isDeleted={note.isDeleted} />
              ))
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  )

}

export default Bin;
  