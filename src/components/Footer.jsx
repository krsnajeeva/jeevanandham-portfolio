import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { contact } from "../data/contact";

export default function Footer() {
  return (
    <footer className="w-full max-w-lg mx-auto p-4 text-center text-slate-500 text-sm">
      <div>
        © {new Date().getFullYear()} {contact.name} — {contact.sortRole}
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <FiMail className="w-5 h-5 hover:text-indigo-500 transition" />
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          <FiGithub className="w-5 h-5 hover:text-indigo-500 transition" />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          <FiLinkedin className="w-5 h-5 hover:text-indigo-500 transition" />
        </a>
      </div>
    </footer>
  );
}
