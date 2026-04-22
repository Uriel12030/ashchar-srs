"use client";

import { FormEvent, useState } from "react";
import type { Dict } from "@/lib/i18n";
import { mailtoLink, contact } from "@/data/site";
import { Icon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ t, common }: { t: Dict["contact"]["form"]; common: Dict["common"] }) {
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
    } catch {
      setStatus("error");
      setError(`${common.fallbackError} ${contact.email}`);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-8">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-navy">
          <Icon name="check" size={20} />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-navy">
          {common.messageReceived}
        </h3>
        <p className="mt-3 text-ink-muted">{common.messageReceivedBody}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-navy underline hover:text-accent-dark"
        >
          {common.sendAnother}
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
            {t.name}
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            className={`mt-2 ${inputBase}`}
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelBase}>
            {t.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={onChange}
            className={`mt-2 ${inputBase}`}
            placeholder={t.companyPlaceholder}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelBase}>
            {t.email}
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            dir="ltr"
            className={`mt-2 ${inputBase}`}
            placeholder={t.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>
            {t.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={onChange}
            dir="ltr"
            className={`mt-2 ${inputBase}`}
            placeholder={t.phonePlaceholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="requirement" className={labelBase}>
          {t.requirement}
        </label>
        <select
          id="requirement"
          name="requirement"
          value={form.requirement}
          onChange={onChange}
          className={`mt-2 ${inputBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%230F2A2D%22 stroke-width=%221.6%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m4 6 4 4 4-4%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pe-10`}
        >
          <option value="">{t.requirementPlaceholder}</option>
          {t.requirementOptions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          {t.message}
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange}
          className={`mt-2 ${inputBase}`}
          placeholder={t.messagePlaceholder}
        />
      </div>

      {status === "error" && error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error}{" "}
          <a
            className="font-semibold underline"
            href={mailtoLink()}
          >
            {common.openEmail}
          </a>
        </div>
      )}

      <div className="flex items-start pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-navy bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-700 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          {status === "sending" ? common.sending : common.sendMessage}
          {status !== "sending" && <Icon name="arrow-right" size={16} />}
        </button>
      </div>
    </form>
  );
}
