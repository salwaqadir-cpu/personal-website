import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Salwa Qadir about women’s strength coaching, fitness business mentorship, workshops, speaking and brand or media partnerships.",
};

const inquiryTypes = [
  "Women’s Strength Coaching — One-to-One or Small Group",
  "Fitness Business Mentorship",
  "Workshops + Speaking",
  "Brand + Media Partnerships",
  "General Inquiry",
];

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader contactActive />
      <main id="main">
        <section className="contact-page section contact-hero">
          <div className="shell contact-page-grid">
            <div className="contact-page-copy">
              <p className="eyebrow">CONTACT</p>
              <h1>Let’s start with what you’re looking for.</h1>
              <p className="contact-lede">Whether you’re interested in coaching, mentorship, education, or a collaboration, send a note below. Tell me a little about what you’re looking for, and I’ll make sure your inquiry reaches the right place.</p>
              <div aria-label="Inquiry types" className="inquiry-types">
                {inquiryTypes.map((type) => <span key={type}>{type}</span>)}
              </div>
            </div>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="contact-wbc">
          <div className="shell contact-wbc-card">
            <div>
              <p className="eyebrow">THE WOMEN’S BARBELL CLUB</p>
              <h2>Interested in WBC?</h2>
              <p>Join the waitlist for launch updates and first access.</p>
            </div>
            <a className="button button-primary" href="https://www.thewomensbarbell.club/">Join the WBC waitlist ↗</a>
          </div>
        </section>

        <section className="contact-note">
          <div className="shell contact-note-grid">
            <div>
              <p className="eyebrow">A GOOD FIT</p>
              <h2>Clear, practical, women-centred work.</h2>
            </div>
            <p>I’m most interested in work that helps women build strength, understand their health, and feel more capable in the lives they are already living.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
