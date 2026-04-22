"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { requirementTypes } from "@/data/content";
import { mailtoLink, contact } from "@/data/site";
import { Icon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  useEffect(() => {
    // Accept deep-link context without pre-filling promotional copy.
    void params;
  }, [params]);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to send");
      }

      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
      });
    } catch (err) {
      const fallback = mailtoLink(
        `Inquiry from ${form.name || "website visitor"}`,
      );
      setStatus("error");
      setError(
        `We couldn't submit the form automatically. Please email us directly at ${contact.email} or use this link.`,
      );
      if (typeof window !== "undefined") {
        window.console.info("Mailto fallback:", fallback);
      }
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-8">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-navy">
          <Icon name="check" size={20} />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-navy">
          Message received
        </h3>
        <p className="mt-3 text-ink-muted">
          Thank you — your message has been received. We will respond in due
          course.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-navy underline hover:text-accent-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-md border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-soft shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const labelBase =
    "block text-xs font-semibold uppercase tracking-[0.14em] text-navy";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name *
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            className={`mt-2 ${inputBase}`}
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelBase}>
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={onChange}
            className={`mt-2 ${inputBase}`}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelBase}>
            Email *
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className={`mt-2 ${inputBase}`}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={onChange}
            className={`mt-2 ${inputBase}`}
            placeholder="+1 555 000 0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="requirement" className={labelBase}>
          Requirement Type
        </label>
        <select
          id="requirement"
          name="requirement"
          value={form.requirement}
          onChange={onChange}
          className={`mt-2 ${inputBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%230F2A2D%22 stroke-width=%221.6%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m4 6 4 4 4-4%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10`}
        >
          <option value="">Select a category…</option>
          {requirementTypes.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Message *
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange}
          className={`mt-2 ${inputBase}`}
          placeholder="Briefly describe your requirement — scope, location, timeline."
        />
      </div>

      {status === "error" && error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error}{" "}
          <a
            className="font-semibold underline"
            href={mailtoLink(`Inquiry from ${form.name || "website visitor"}`)}
          >
            Open email
          </a>
        </div>
      )}

      <div className="flex items-start pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-navy bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-700 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" && <Icon name="arrow-right" size={16} />}
        </button>
      </div>
    </form>
  );
}
