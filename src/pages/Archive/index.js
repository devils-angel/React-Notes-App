import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { NoteCard } from "../../components/NoteCard";
import { useNotes } from "../../context/notes-context";
const Archive = () => {

  const {title, text, notes, notesDispatch} = useNotes();
  const archivedNotes = notes.filter(note => note.isArchived && !note.isDeleted);
  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="p-4 w-screen">
          <h1 className="text-2xl font-bold">Archived Notes</h1>
          <div className="flex flex-wrap gap-4">
            {
              archivedNotes.length > 0 && archivedNotes.map((note) => (
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

export default Archive;
  