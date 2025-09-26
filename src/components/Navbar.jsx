import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiFolder, FiBriefcase, FiBookOpen, FiUser } from "react-icons/fi";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { contact } from "../data/contact";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full bg-transparent p-3 max-w-lg mx-auto relative"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold">
            {contact.sortName}
          </div>
          <div>
            <div className="text-sm font-semibold">{contact.name}</div>
            <div className="text-xs text-slate-400">{contact.sortRole}</div>
          </div>
        </div>

        {/* Menu button */}
        <div className="relative" ref={menuRef}>
          <button
            aria-label="menu"
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 rounded-lg glass"
          >
            <FiMenu size={20} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {open && (
              <Motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
              >
                <ul className="divide-y divide-gray-100 max-h-60 overflow-y-auto text-sm">
                  <li>
                    <a
                      href="#projects"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <FiFolder className="text-indigo-500" /> Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <FiBriefcase className="text-purple-500" /> Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#education"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <FiBookOpen className="text-pink-500" /> Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <FiUser className="text-blue-500" /> About Me
                    </a>
                  </li>
                </ul>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Motion.header>
  );
}
