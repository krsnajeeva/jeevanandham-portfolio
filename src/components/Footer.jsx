import React from "react";
import { contact } from "../data/contact";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full max-w-lg mx-auto p-4 text-center text-slate-400 text-sm"
    >
      <div>
        © {new Date().getFullYear()} {contact.name} — {contact.sortRole}
      </div>
    </footer>
  );
}
