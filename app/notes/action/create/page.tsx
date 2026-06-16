"use client";
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Create Note",
  description: "Page of create Note to form",
  openGraph: {
    title: "Create Note",
    description: "Page of create Note to form",
    url: "http://localhost:3000/notes/filter/all",
    images:
      "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg?_gl=1*12iazr6*_gcl_au*NTc5NjMyMzM4LjE3Nzg5NDA5OTk.*_ga*MTIyMjk4MTE4NS4xNzc4ODQzNzA0*_ga_PW0T7S5LDQ*czE3ODE2MTEzMjEkbzEzMCRnMSR0MTc4MTYxMjgxMCRqMjkkbDAkaDA.",
  },
};
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
