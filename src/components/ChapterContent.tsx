"use client";

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

/* ─── FRONT COVER ─── */
export function FrontCover() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center relative overflow-hidden select-none">
      {/* Decorative border */}
      <div className="absolute inset-3 border border-gold/20 rounded-lg pointer-events-none" />
      <div className="absolute inset-5 border border-gold/10 rounded-lg pointer-events-none" />

      {/* Top ornament */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
      />

      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        animate={{ opacity: 1, letterSpacing: "0.35em" }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="text-[10px] text-gold/60 uppercase tracking-[0.35em] mb-6"
      >
        Portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wide"
      >
        YUBRAJ
        <br />
        TAMANG
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent my-6"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="space-y-1"
      >
        <p className="font-inter text-[11px] text-white/50 tracking-[0.15em] uppercase">
          Data Analyst
        </p>
        <p className="font-inter text-[11px] text-white/50 tracking-[0.15em] uppercase">
          BI & Reporting
        </p>
        <p className="font-inter text-[11px] text-white/50 tracking-[0.15em] uppercase">
          Insight Discovery
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="font-playfair text-[10px] text-gold/40 italic mt-8 tracking-widest"
      >
        Edition 2026
      </motion.p>

      {/* Bottom ornament */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-8"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        className="font-inter text-[9px] text-white/30 mt-6 tracking-[0.2em] uppercase"
      >
        Click to Open
      </motion.p>
    </div>
  );
}

/* ─── WELCOME PAGE ─── */
export function WelcomePage() {
  return (
    <div className="p-6 md:p-8 lg:p-10 h-full flex flex-col justify-between items-center text-center relative select-none">
      <div className="absolute inset-4 border border-gold/10 rounded pointer-events-none" />
      
      {/* Top Header */}
      <div className="mt-8">
        <p className="font-inter text-[9px] text-muted tracking-[0.3em] uppercase">
          Welcome to the Portfolio of
        </p>
      </div>

      {/* Main Title */}
      <div className="my-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal tracking-wide mb-3">
          Yubraj Tamang
        </h2>
        <div className="w-12 h-[1px] bg-gold mx-auto my-4" />
        <p className="font-inter text-xs text-muted/80 tracking-[0.15em] uppercase">
          Data Analysis &amp; Reporting
        </p>
      </div>

      {/* Bottom Subtitle */}
      <div className="mb-8">
        <p className="font-playfair text-[10px] text-gold-dark italic tracking-widest mb-1">
          Lalitpur, Nepal
        </p>
        <p className="font-inter text-[8px] text-muted tracking-wider uppercase">
          Edition 2026
        </p>
      </div>
    </div>
  );
}

/* ─── LANDING PAGE ─── */
export function LandingPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10 h-full flex flex-col justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.p
          variants={fadeIn}
          custom={0}
          className="font-inter text-xs text-muted tracking-[0.2em] uppercase mb-4"
        >
          Welcome
        </motion.p>

        <motion.h2
          variants={fadeIn}
          custom={1}
          className="font-playfair text-charcoal"
        >
          <span className="text-xl md:text-2xl font-light block mb-1">Hello,</span>
          <span className="text-lg md:text-xl font-light block mb-1">
            I&apos;m
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold block text-gold-dark">
            Yubraj Tamang
          </span>
        </motion.h2>

        <motion.div variants={fadeIn} custom={2} className="chapter-divider mt-4" />

        <motion.p
          variants={fadeIn}
          custom={3}
          className="font-playfair text-base md:text-lg text-charcoal-light italic mb-6"
        >
          Data Analyst
        </motion.p>

        <motion.p
          variants={fadeIn}
          custom={4}
          className="font-inter text-sm text-muted leading-relaxed mb-8 max-w-md"
        >
          Turning data into clear insights, interactive dashboards, and business-ready
          reporting that supports smarter decisions. Based in Nepal, focused on
          impact through analysis.
        </motion.p>

        <motion.div
          variants={fadeIn}
          custom={5}
          className="flex flex-wrap gap-3"
        >
          <a href="#" className="btn-link">
            <span className="material-symbols-rounded text-sm">description</span>
            Resume
          </a>
          <a
            href="https://github.com/yubrajtamang"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            <span className="material-symbols-rounded text-sm">code</span>
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-link">
            <span className="material-symbols-rounded text-sm">work</span>
            LinkedIn
          </a>
          <a href="mailto:yubraj@example.com" className="btn-link">
            <span className="material-symbols-rounded text-sm">mail</span>
            Email
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── ABOUT ─── */
import { aboutText } from "@/data/portfolio";

export function AboutPage() {
  const paragraphs = aboutText.split("\n\n");

  return (
    <div className="p-6 md:p-8 lg:p-10">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.p variants={fadeIn} custom={0} className="chapter-number">
          Chapter One
        </motion.p>
        <motion.h2 variants={fadeIn} custom={1} className="chapter-title text-2xl md:text-3xl mb-1">
          About Me
        </motion.h2>
        <motion.div variants={fadeIn} custom={2} className="chapter-divider" />

        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeIn}
              custom={i + 3}
              className="font-inter text-sm text-charcoal-light leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── EXPERIENCE ─── */
import { experiences } from "@/data/portfolio";

export function ExperiencePage() {
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.p variants={fadeIn} custom={0} className="chapter-number">
          Chapter Two
        </motion.p>
        <motion.h2 variants={fadeIn} custom={1} className="chapter-title text-2xl md:text-3xl mb-1">
          Experience
        </motion.h2>
        <motion.div variants={fadeIn} custom={2} className="chapter-divider" />

        <div className="relative pl-6 mt-4">
          <div className="timeline-line" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                custom={i + 3}
                className="relative"
              >
                <div className="absolute -left-6 top-1">
                  <div className="timeline-dot" />
                </div>
                <p className="font-playfair text-base font-semibold text-charcoal">
                  {exp.role}
                </p>
                <p className="font-inter text-xs text-gold-dark font-medium mt-0.5">
                  {exp.company}
                </p>
                <p className="font-inter text-[11px] text-muted mt-0.5">
                  {exp.date}
                </p>
                <ul className="mt-2 space-y-1">
                  {exp.description.map((d, j) => (
                    <li
                      key={j}
                      className="font-inter text-xs text-charcoal-light leading-relaxed flex gap-2"
                    >
                      <span className="text-gold mt-0.5 shrink-0">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── PROJECTS ─── */
import { projects } from "@/data/portfolio";

export function ProjectsPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.p variants={fadeIn} custom={0} className="chapter-number">
          Chapter Three
        </motion.p>
        <motion.h2 variants={fadeIn} custom={1} className="chapter-title text-2xl md:text-3xl mb-1">
          Projects
        </motion.h2>
        <motion.div variants={fadeIn} custom={2} className="chapter-divider" />

        <div className="space-y-4 mt-4">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              custom={i + 3}
              className={`project-card ${proj.featured ? "border-l-2 border-l-gold" : ""}`}
            >
              <div className="p-4">
                <h3 className="font-playfair text-base font-semibold text-charcoal mb-1">
                  {proj.title}
                </h3>
                <p className="font-inter text-xs text-charcoal-light leading-relaxed mb-3">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.technologies.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !text-[10px] !py-1 !px-2.5"
                    >
                      <span className="material-symbols-rounded text-xs">code</span>
                      Source
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !text-[10px] !py-1 !px-2.5"
                    >
                      <span className="material-symbols-rounded text-xs">open_in_new</span>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── EDUCATION ─── */
import { education } from "@/data/portfolio";

export function EducationPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.p variants={fadeIn} custom={0} className="chapter-number">
          Chapter Four
        </motion.p>
        <motion.h2 variants={fadeIn} custom={1} className="chapter-title text-2xl md:text-3xl mb-1">
          Education
        </motion.h2>
        <motion.div variants={fadeIn} custom={2} className="chapter-divider" />

        <div className="relative pl-6 mt-4">
          <div className="timeline-line" />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                custom={i + 3}
                className="relative"
              >
                <div className="absolute -left-6 top-1">
                  <div className="timeline-dot" />
                </div>
                <p className="font-playfair text-lg font-semibold text-charcoal">
                  {edu.degree}
                </p>
                <p className="font-inter text-sm text-gold-dark font-medium mt-1">
                  {edu.university}
                </p>
                <div className="flex gap-4 mt-1">
                  <p className="font-inter text-xs text-muted">{edu.years}</p>
                  {edu.cgpa && (
                    <p className="font-inter text-xs text-muted">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── SKILLS ─── */
import { skillCategories } from "@/data/portfolio";

export function SkillsPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>
        <motion.p variants={fadeIn} custom={0} className="chapter-number">
          Chapter Five
        </motion.p>
        <motion.h2 variants={fadeIn} custom={1} className="chapter-title text-2xl md:text-3xl mb-1">
          Skills
        </motion.h2>
        <motion.div variants={fadeIn} custom={2} className="chapter-divider" />

        <div className="space-y-4 mt-3">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.category} variants={fadeIn} custom={i + 3}>
              <h3 className="font-playfair text-sm font-semibold text-charcoal mb-1.5 flex items-center gap-2">
                <span className="w-4 h-px bg-gold" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 pl-6">
                {cat.skills.map((s) => (
                  <span key={s} className="tech-badge">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init({
      publicKey: "FN4XDb23Wd64RjYz_",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send("service_e3nje96", "template_botsp2y", {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      });

      window.alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      window.alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="p-6 md:p-8 lg:p-10">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.p variants={fadeIn} custom={0} className="chapter-number">
          Chapter Six
        </motion.p>
        <motion.h2 variants={fadeIn} custom={1} className="chapter-title text-2xl md:text-3xl mb-1">
          Contact
        </motion.h2>
        <motion.div variants={fadeIn} custom={2} className="chapter-divider" />

        <motion.p
          variants={fadeIn}
          custom={3}
          className="font-inter text-sm text-charcoal-light leading-relaxed mb-6"
        >
          I&apos;d love to hear from you. Whether you have a project in mind or just want to connect let&apos;s talk.
        </motion.p>

        <motion.form
          variants={fadeIn}
          custom={4}
          className="space-y-3"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="font-inter text-[11px] text-muted uppercase tracking-wider block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="font-inter text-[11px] text-muted uppercase tracking-wider block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="font-inter text-[11px] text-muted uppercase tracking-wider block mb-1">
              Message
            </label>
            <textarea
              name="message"
              className="form-input"
              rows={3}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-gold w-full justify-center mt-2" disabled={isSending}>
            <span className="material-symbols-rounded text-sm">send</span>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          variants={fadeIn}
          custom={5}
          className="mt-6 pt-4 border-t border-charcoal/10 space-y-2"
        >
          <div className="flex items-center gap-2 font-inter text-xs text-muted">
            <span className="material-symbols-rounded text-sm text-gold">mail</span>
            yt60015@gmail.com
          </div>
          <div className="flex items-center gap-2 font-inter text-xs text-muted">
            <span className="material-symbols-rounded text-sm text-gold">location_on</span>
            Kathmandu, Nepal
          </div>
          <div className="flex items-center gap-2 font-inter text-xs text-muted">
            <span className="material-symbols-rounded text-sm text-gold">phone</span>
            +977 9767410777
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── BACK COVER ─── */
export function BackCover() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center relative overflow-hidden select-none p-6 md:p-8 lg:p-10">
      <div className="absolute inset-3 border border-gold/20 rounded-lg pointer-events-none" />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="font-playfair text-base md:text-lg text-charcoal-light italic max-w-xs leading-relaxed"
      >
        &ldquo;The only way to do great work is to love what you do.&rdquo;
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="font-inter text-[10px] text-muted mt-4 tracking-[0.15em]"
      >
        — Steve Jobs
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent my-8"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="font-playfair text-sm text-gold-dark font-medium mb-2"
      >
        Thank you for visiting my portfolio.
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="font-inter text-[10px] text-muted italic"
      >
        Have a wonderful day!
      </motion.p>
    </div>
  );
}
