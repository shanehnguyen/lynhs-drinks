"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import PushButton from "./ui/PushButton";
import { submitToWeb3Forms } from "@/lib/web3forms";

const EVENT_TYPES = [
  "Wedding",
  "Church Festival",
  "School Event",
  "Corporate Event",
  "Private Party",
  "Other",
];

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const searchParams = useSearchParams();
  const picks = searchParams.get("picks");
  const defaultDetails = picks ? `My drink picks:\n${picks}\n\n` : "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");

    try {
      await submitToWeb3Forms({
        subject: `Event inquiry from ${form.get("name")}`,
        from_name: form.get("name"),
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        event_type: form.get("eventType"),
        event_date: form.get("eventDate"),
        guest_count: form.get("guestCount"),
        message: form.get("details"),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border-[3px] border-ink bg-cream p-10 text-center shadow-[8px_8px_0_0_#FF008C]">
        <h2 className="text-2xl text-ink">Thanks — got it!</h2>
        <p className="mt-3 text-sm font-medium text-ink/70">
          I usually reply within 1 to 2 business days with pricing and
          availability for your date.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-2xl border-[3px] border-ink bg-cream p-6 shadow-[8px_8px_0_0_#FF008C] sm:grid-cols-2 md:p-10"
    >
      <Field label="Full Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
      <div>
        <label className="text-sm font-bold uppercase tracking-wider text-ink/70">
          Event Type
        </label>
        <select
          name="eventType"
          required
          className="mt-2 w-full rounded-xl border-2 border-ink/30 bg-cream px-4 py-2.5 font-medium text-ink focus:border-ink focus:outline-none"
        >
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <Field label="Event Date" name="eventDate" type="date" />
      <Field label="Estimated Guest Count" name="guestCount" type="number" />

      <div className="sm:col-span-2">
        <label className="text-sm font-bold uppercase tracking-wider text-ink/70">
          Tell Us About Your Event
        </label>
        <textarea
          name="details"
          rows={picks ? 8 : 4}
          defaultValue={defaultDetails}
          placeholder="Location, flavors you're excited about, anything else we should know..."
          className="mt-2 w-full rounded-xl border-2 border-ink/30 bg-cream px-4 py-2.5 font-medium text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
        />
      </div>

      <div className="sm:col-span-2">
        <PushButton
          label={status === "sending" ? "Sending…" : "Send Inquiry"}
          type="submit"
          disabled={status === "sending"}
          surface="#F4CC7B"
          textColor="#000000"
        />
        <p className="mt-3 text-xs font-medium text-ink/50">
          {status === "error"
            ? "Something went wrong sending your inquiry — please try again."
            : "I usually reply within 1 to 2 business days."}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-bold uppercase tracking-wider text-ink/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border-2 border-ink/30 bg-cream px-4 py-2.5 font-medium text-ink focus:border-ink focus:outline-none"
      />
    </div>
  );
}
