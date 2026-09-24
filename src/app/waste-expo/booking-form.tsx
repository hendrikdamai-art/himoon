"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "andrew@ihubsolutions.com.au";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  day: "28 October 2026" | "29 October 2026" | "";
  time: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  day: "",
  time: "",
  notes: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.day) {
      setError("Please add your name, email, and preferred day.");
      return;
    }

    const body = [
      `Hi Andrew,`,
      ``,
      `I'd like to book 30 minutes at Waste Expo Australia.`,
      ``,
      `Name: ${form.name.trim()}`,
      `Company: ${form.company.trim() || "—"}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "—"}`,
      `Preferred day: ${form.day}`,
      `Preferred time: ${form.time.trim() || "Flexible"}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : "",
      ``,
      `See you at Stand D161.`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Waste Expo 2026 — 30 minutes with Andrew",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none ring-[#0088F0] focus:border-[#0088F0] focus:ring-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Company
          <input
            type="text"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none ring-[#0088F0] focus:border-[#0088F0] focus:ring-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none ring-[#0088F0] focus:border-[#0088F0] focus:ring-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none ring-[#0088F0] focus:border-[#0088F0] focus:ring-2"
          />
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-slate-700">
          Preferred day
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {(["28 October 2026", "29 October 2026"] as const).map((day) => (
            <label
              key={day}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium ${
                form.day === day
                  ? "border-[#0088F0] bg-[#F4F8FC] text-[#0088F0]"
                  : "border-slate-300 text-slate-700"
              }`}
            >
              <input
                type="radio"
                name="day"
                value={day}
                checked={form.day === day}
                onChange={() => update("day", day)}
                className="accent-[#0088F0]"
              />
              {day}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block text-sm font-medium text-slate-700">
        Rough time
        <input
          type="text"
          name="time"
          placeholder="e.g. 10:30am, after lunch"
          value={form.time}
          onChange={(event) => update("time", event.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none ring-[#0088F0] focus:border-[#0088F0] focus:ring-2"
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-slate-700">
        What is not working in the business?
        <textarea
          name="notes"
          rows={4}
          placeholder="Bins going missing, paper run sheets, dispatch on the phone…"
          value={form.notes}
          onChange={(event) => update("notes", event.target.value)}
          className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none ring-[#0088F0] focus:border-[#0088F0] focus:ring-2"
        />
      </label>

      {error ? (
        <p className="mt-4 text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#0088F0] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#0076d1]"
      >
        Book 30 minutes with Andrew
      </button>
      <p className="mt-3 text-center text-sm text-slate-500">
        Opens an email to {CONTACT_EMAIL}. No hard sell.
      </p>
    </form>
  );
}
