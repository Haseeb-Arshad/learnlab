// components/Sidebar.js
'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 p-6 h-full glass border-r border-white/30 transition-all duration-300">
      <h1 className="text-3xl font-bold mb-8 text-white drop-shadow-lg">Lumina</h1>
      <nav>
        <ul className="space-y-4">
          {/** Each link has a subtle hover animation for an interactive feel */}
          <li>
            <Link href="/resources">
              <a className="text-white hover-animate transition-colors">Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/ask-ai">
              <a className="text-white hover-animate transition-colors">Ask AI</a>
            </Link>
          </li>
          <li>
            <Link href="/lectures">
              <a className="text-white hover-animate transition-colors">Lectures</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="text-white hover-animate transition-colors">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/notes">
              <a className="text-white hover-animate transition-colors">Sticky Notes</a>
            </Link>
          </li>
          <li>
            <Link href="/calendar">
              <a className="text-white hover-animate transition-colors">Calendar</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
