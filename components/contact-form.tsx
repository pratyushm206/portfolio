"use client";

import { useState } from "react";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: typeof errors = {};

    if (!name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!senderEmail.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      nextErrors.message = "Please add a short message.";
    } else if (message.trim().length < 20) {
      nextErrors.message = "Please add a bit more detail so I understand the opportunity.";
    }

    setErrors(nextErrors);
    setSuccessMessage("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a recruiter"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
    );

    setSuccessMessage("Looks good. Your default email client is opening now.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="form-label">Name</span>
          <input
            className="input-field"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          {errors.name ? <span className="form-feedback form-error">{errors.name}</span> : null}
        </label>
        <label className="space-y-2">
          <span className="form-label">Email</span>
          <input
            className="input-field"
            type="email"
            placeholder="you@example.com"
            value={senderEmail}
            onChange={(event) => setSenderEmail(event.target.value)}
            required
          />
          {errors.email ? <span className="form-feedback form-error">{errors.email}</span> : null}
        </label>
      </div>

      <label className="space-y-2">
        <span className="form-label">Message</span>
        <textarea
          className="input-field min-h-36 resize-none"
          placeholder="Tell me about the opportunity, project, or role."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        {errors.message ? <span className="form-feedback form-error">{errors.message}</span> : null}
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="form-helper">
          Best for internship outreach, recruiter introductions, and project conversations.
        </p>
        <button type="submit" className="button-primary">
          Send Message
        </button>
      </div>

      {successMessage ? <p className="form-feedback form-success">{successMessage}</p> : null}
    </form>
  );
}
