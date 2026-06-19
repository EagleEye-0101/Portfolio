"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Formspree submission failed");
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try emailing directly.",
      );
    }
  }

  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      titleLines={["Let's build something", "meaningful."]}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid gap-12 lg:grid-cols-2"
      >
        <div>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            Open to collaborations, internship opportunities, and impactful
            conversations around building scalable systems and intelligent
            solutions.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="block font-display text-2xl text-ink transition-colors hover:text-copper md:text-3xl"
            >
              {site.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs tracking-widest uppercase"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs tracking-widest uppercase"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="section-label mb-2 block">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-copper"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="section-label mb-2 block">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-copper"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="section-label mb-2 block">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className="w-full border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-copper"
              placeholder="Project inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="section-label mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-copper"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && (
            <p className="font-mono text-xs text-copper">
              Message sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-copper-dark">
              {errorMessage}
            </p>
          )}
        </form>
      </motion.div>
    </SectionWrapper>
  );
}
