import { Metadata } from "next";
import css from "./Home.module.css";
export const metadata: Metadata = {
  title: "404 - Page not found",
  description: `Page fount wrong code 404`,
  openGraph: {
    title: "404 - Page not found",
    description: `Page fount wrong code 404`,
    url: "http://localhost:3000/error",
    images:
      "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg?_gl=1*1mlqxp9*_gcl_au*NTc5NjMyMzM4LjE3Nzg5NDA5OTk.*_ga*MTIyMjk4MTE4NS4xNzc4ODQzNzA0*_ga_PW0T7S5LDQ*czE3ODE1MzAwMjQkbzEyNiRnMCR0MTc4MTUzMDAzMSRqNTMkbDAkaDA.",
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
