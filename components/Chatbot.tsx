"use client";
import { useEffect, useRef, useState } from "react";
import { budgets, projectTypes, timelines } from "@/lib/inquiry";
import ContactForm from "./ContactForm";
const questions = [
  "What would you like to build?",
  "What investment range are you considering? (USD)",
  "When would you like to get started?",
];
const choices = [projectTypes, budgets, timelines];
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const step = answers.length;
  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);
  useEffect(() => {
    if (!step) return;
    const target =
      step === 3
        ? scrollRef.current?.querySelector<HTMLInputElement>(
            'input[name="name"]',
          )
        : scrollRef.current?.querySelector<HTMLButtonElement>(
            ".chat-choices button",
          );
    target?.focus({ preventScroll: true });
    target?.scrollIntoView?.({ block: "nearest" });
  }, [step]);
  return (
    <div className="chat-widget">
      <section
        hidden={!open}
        className="chat-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="chat-title"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.stopPropagation();
            close();
          }
        }}
      >
        <header className="chat-header">
          <span className="chat-avatar" aria-hidden="true">
            ✳
          </span>
          <div>
            <h2 id="chat-title">Northline assistant</h2>
            <p>Guided conversation · no live AI</p>
          </div>
          <button
            ref={closeRef}
            className="icon-button"
            aria-label="Close assistant"
            onClick={close}
          >
            ×
          </button>
        </header>
        <div className="chat-body" ref={scrollRef}>
          <p className="chat-bubble">
            Hi there. Let’s turn your idea into a project brief. Three quick
            questions to find a starting point.
          </p>
          <div
            role="log"
            aria-label="Project qualification conversation"
            aria-live="polite"
          >
            {answers.map((answer, i) => (
              <div key={i}>
                <p className="chat-question">{questions[i]}</p>
                <p className="chat-answer">{answer}</p>
              </div>
            ))}
            {step < 3 && <p className="chat-bubble">{questions[step]}</p>}
            {step === 3 && (
              <p className="chat-bubble">
                A good starting point. Review your choices below and add your
                contact details. Nothing is sent until you submit.
              </p>
            )}
          </div>
          {step < 3 ? (
            <div className="chat-choices" aria-label={questions[step]}>
              {choices[step].map((choice) => (
                <button
                  key={choice}
                  onClick={() => setAnswers([...answers, choice])}
                >
                  {choice}
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          ) : (
            <ContactForm
              source="chatbot"
              details={{
                projectType: answers[0],
                budget: answers[1],
                timeline: answers[2],
              }}
            />
          )}
          {step > 0 && (
            <button
              className="chat-back"
              onClick={() => setAnswers(answers.slice(0, -1))}
            >
              ← {step === 3 ? "Change timeline" : "Previous question"}
            </button>
          )}
          {step > 0 && (
            <button className="chat-back ml-5" onClick={() => setAnswers([])}>
              Start over
            </button>
          )}
        </div>
        <footer className="chat-footer">
          {Math.min(step + 1, 3)} / 3 · A scripted assistant. Your brief is
          saved only on submission.
        </footer>
      </section>
      <button
        ref={triggerRef}
        className="chat-trigger"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-label={open ? "Close project assistant" : "Open project assistant"}
      >
        <span aria-hidden="true">{open ? "×" : "✳"}</span>
        <span>{open ? "Close" : "Let’s build"}</span>
      </button>
    </div>
  );
}
