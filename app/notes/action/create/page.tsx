"use client";
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";

interface createNoteProps {
  onClose: () => void;
}
export default function CreateNote({ onClose }: createNoteProps) {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm closeModal={onClose} />
      </div>
    </main>
  );
}
