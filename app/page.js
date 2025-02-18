// app/page.js
'use client';

import { useEffect, useState } from 'react';
import AskAi from '../components/AskAi';
import Calendars from '../components/Calendars';
import Lectures from '../components/Lectures';
import Notes from '../components/Notes';
import Projects from '../components/Projects';
import Resources from '../components/Resources';

export default function HomePage() {
  // Dynamically set a greeting based on the time of day.
  const [greeting, setGreeting] = useState('Welcome to Lumina!');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning, Welcome to Lumina!');
    } else if (hours < 18) {
      setGreeting('Good Afternoon, Welcome to Lumina!');
    } else {
      setGreeting('Good Evening, Welcome to Lumina!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold drop-shadow-lg animate-fadeIn">{greeting}</h1>
        <p className="mt-4 text-xl animate-fadeIn delay-100">
          Your personalized dashboard for academic excellence.
        </p>
      </header>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-8 mb-12">
        <a href="#ask-ai" className="hover:underline">Ask AI</a>
        <a href="#calendars" className="hover:underline">Calendars</a>
        <a href="#lectures" className="hover:underline">Lectures</a>
        <a href="#notes" className="hover:underline">Notes</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#resources" className="hover:underline">Resources</a>
      </nav>

      <main className="space-y-16">
        <section id="ask-ai" className="animate-fadeIn">
          <AskAi />
        </section>
        <section id="calendars" className="animate-fadeIn delay-100">
          <Calendars />
        </section>
        <section id="lectures" className="animate-fadeIn delay-200">
          <Lectures />
        </section>
        <section id="notes" className="animate-fadeIn delay-300">
          <Notes />
        </section>
        <section id="projects" className="animate-fadeIn delay-400">
          <Projects />
        </section>
        <section id="resources" className="animate-fadeIn delay-500">
          <Resources />
        </section>
      </main>
    </div>
  );
}
