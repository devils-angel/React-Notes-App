import React from 'react';
import { useNotes } from '../../context/notes-context';

export const NoteCard = ({ id, title, text, isPinned, isArchived, isDeleted}) => {

  const { notesDispatch } = useNotes();
  const onStarClick = (id) => {
    notesDispatch({ type: "TOGGLE_PINNED", payload: id });
  }

  const onArchiveClick = (id) => {
    notesDispatch({ type: "ARCHIVE", payload: id });
  }

  const onDeleteClick = (id) => {
    if (isDeleted) {
      if (window.confirm("Are you sure you want to permanently delete this note?")) {
      notesDispatch({ type: "PERMANENT_DELETE", payload: { id } });
    }
    } else {
      notesDispatch({ type: "DELETE_NOTE", payload: id });
    }
  }


  return (
    <div
      key={id}
      className="w-[200px] p-4 border-2 border-gray-300 rounded-lg mt-4"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{text}</p>
      <div className="flex justify-end mt-2">
        <button className="p-1 " onClick={() => onStarClick(id)} disabled={isArchived || isDeleted}>
          <span className={`material-symbols-outlined ${isPinned ? 'text-yellow-500' : ''}`}>star</span>
        </button>
        <button className="p-1 " onClick={() => !isArchived ? onArchiveClick(id) : alert("Cannot archive an archived note")} disabled={isDeleted}>
          <span className={`material-symbols-outlined ${isArchived ? 'text-green-500' : ''}`}>archive</span>
        </button>
        <button className="p-1 " onClick={() => onDeleteClick(id)}>
          <span className={`material-symbols-outlined ${isDeleted ? 'text-red-500' : ''}`}>delete</span>
        </button>
      </div>
    </div>
  );
};