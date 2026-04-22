'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, BriefcaseBusiness, MessageSquareText, Send, Sparkles, X } from "lucide-react";
import { cloneAssistant, getCloneReply, type CloneReply } from "../data/cloneChat";

type ChatMessage = {
  actions?: CloneReply["actions"];
  id: string;
  mode?: CloneReply["mode"];
  role: "assistant" | "user";
  suggestions?: string[];
  text: string;
};

function createAssistantMessage(text: string, extras?: Partial<ChatMessage>): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    text,
    ...extras,
  };
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    createAssistantMessage(cloneAssistant.intro, {
      actions: [
        { label: "GitHub", href: "https://github.com/Ranjula001" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ranjula-ilukpitiya-95b407226/" },
      ],
      suggestions: cloneAssistant.prompts,
    }),
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const lastAssistantMode = useMemo(() => {
    const lastAssistant = [...messages].reverse().find((message) => message.role === "assistant");
    return lastAssistant?.mode ?? "default";
  }, [messages]);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
    };

    const reply = getCloneReply(trimmed);
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        createAssistantMessage(reply.answer, {
          actions: reply.actions,
          mode: reply.mode,
          suggestions: reply.suggestions,
        }),
      ]);
      setIsTyping(false);
    }, 420);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="hover-trigger fixed bottom-5 right-5 z-[85] flex items-center gap-3 rounded-full border border-white/15 bg-black/55 px-4 py-3 text-sm text-white shadow-[0_16px_44px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-colors hover:border-white/30 hover:text-white"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B4513] text-white">
          <span className="text-lg">🐕</span>
        </span>
        <span className="hidden text-left md:block">
          <span className="block text-xs uppercase tracking-[0.2em] text-white/45">Ranjula's Companion</span>
          <span className="block">{cloneAssistant.name}</span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-4 bottom-20 z-[90] flex justify-end sm:inset-x-auto sm:right-5 sm:w-[420px]"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex max-h-[78vh] w-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#090d16]/96 text-white shadow-[0_26px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B4513] text-white">
                        <span className="text-lg">🐕</span>
                      </span>
                      <div>
                        <p className="font-migraExtrabold text-base">{cloneAssistant.name}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/45">{cloneAssistant.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] ${
                          lastAssistantMode === "recruiter"
                            ? "bg-[#f3dbc7] text-black"
                            : "border border-white/10 bg-white/6 text-white/65"
                        }`}
                      >
                        {lastAssistantMode === "recruiter" ? "Recruiter Mode" : "Portfolio Mode"}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/65">
                        Woof woof! 🐾
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:text-white"
                    aria-label="Close chatbot"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
                {messages.map((message) => (
                  <div key={message.id} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className={`max-w-[88%] rounded-[24px] px-4 py-3 ${
                        message.role === "user"
                          ? "bg-[#f3dbc7] text-black"
                          : "border border-white/10 bg-white/6 text-white"
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] opacity-65">
                        {message.role === "assistant" ? (
                          <>
                            {message.mode === "recruiter" ? (
                              <BriefcaseBusiness className="h-3.5 w-3.5" />
                            ) : (
                              <MessageSquareText className="h-3.5 w-3.5" />
                            )}
                            <span>{message.mode === "recruiter" ? "Recruiter reply" : "Assistant reply"}</span>
                          </>
                        ) : (
                          <span>You</span>
                        )}
                      </div>

                      <p className="whitespace-pre-wrap text-sm leading-7">{message.text}</p>

                      {message.actions && message.actions.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {message.actions.map((action) => (
                            <a
                              key={action.label}
                              href={action.href}
                              target={action.href.startsWith("/") ? undefined : "_blank"}
                              rel={action.href.startsWith("/") ? undefined : "noopener noreferrer"}
                              className="hover-trigger rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/75 transition-colors hover:border-white/30 hover:text-white"
                            >
                              {action.label}
                            </a>
                          ))}
                        </div>
                      )}

                      {message.suggestions && message.suggestions.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {message.suggestions.slice(0, 4).map((suggestion) => (
                            <button
                              key={suggestion}
                              type="button"
                              onClick={() => sendMessage(suggestion)}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left text-[11px] uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-[24px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70">
                      Thinking through the most relevant answer...
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
                className="border-t border-white/10 px-4 py-4"
              >
                <div className="flex items-end gap-3">
                  <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    rows={1}
                    placeholder="Ask about skills, projects, hiring fit, AI workflow..."
                    className="min-h-[48px] flex-1 resize-none rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                  />
                  <button
                    type="submit"
                    className="hover-trigger flex h-12 w-12 items-center justify-center rounded-full bg-[#f3dbc7] text-black transition-transform hover:-translate-y-0.5"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
