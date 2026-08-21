import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { withBasePath } from "@/lib/site-path";

const wbcUrl = "https://www.thewomensbarbell.club/";

const programStages = [
  {
    number: "01",
    title: "Bodyweight",
    line: "Learn how your body moves.",
    copy: "We develop control, stability, mobility, and confidence in the movement patterns that support everything that comes next.",
  },
  {
    number: "02",
    title: "Dumbbells",
    line: "Add load with control.",
    copy: "Dumbbells help you develop coordination, balance, and strength while learning how to move weight intentionally—not simply complete repetitions.",
  },
  {
    number: "03",
    title: "Machines",
    line: "Build strength with precision.",
    copy: "Machines allow us to target specific muscles, practise effort, and build capacity while maintaining the control and technique established in the earlier stages.",
  },
  {
    number: "04",
    title: "Barbell",
    line: "Bring the foundation together.",
    copy: "We introduce the barbell progressively so you understand the lifts, trust your body, and feel confident taking up space at the rack.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Intention",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="15" />
        <circle cx="24" cy="24" r="7" />
        <path d="M24 6v6m0 24v6M6 24h6m24 0h6" />
      </svg>
    ),
    copy: "Know what you’re working toward, why you’re doing it, and how it should feel in your body. Based on your body and your life, we make purposeful decisions about your goals, exercises, nutrition, and priorities—and explain the reasoning behind them—so every session has a clear focus and a deeper reason behind it.",
  },
  {
    number: "02",
    title: "Strength",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M8 21h6v6H8zm26 0h6v6h-6zM14 18h5v12h-5zm15 0h5v12h-5zM19 22h10v4H19z" />
      </svg>
    ),
    copy: "Build physical and mental strength through progressive training and education. As you understand your body, your exercises, and your progress, you develop the confidence to make informed choices—and the self-trust to believe in what you’re capable of.",
  },
  {
    number: "03",
    title: "Sisterhood",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="17" cy="17" r="5" />
        <circle cx="32" cy="18" r="4" />
        <path d="M8 38c1-8 5-12 10-12s9 4 10 12m-2-9c2-3 4-5 7-5 4 0 7 4 8 11" />
      </svg>
    ),
    copy: "We help you communicate your goals and invite your loved ones into the journey so they can support you—and benefit from the stronger, more capable person you’re becoming. When support is limited, your coach and the WBC sisterhood are here for you to lean on.",
  },
];

const credentials = [
  "12+ years of full-time experience coaching women in strength + fitness",
  "Multiple awards + accolades at Canada’s largest fitness company",
  "Fitness educator + workshop facilitator + resource developer for personal trainers",
  "Advanced Fascial Stretch Therapy — Level 3",
  "Exercise Therapy + Nutrition Coaching",
  "Barbell Strength + Hypertrophy Training",
  "Competitive Powerlifter · Powerlifting Coach · Provincial Referee",
];

const services = [
  {
    tag: "COACHING",
    program: "FROM BODYWEIGHT TO BARBELLS",
    title: "Women’s Strength Coaching",
    copy: "One-to-one coaching and small-group training built around my signature From Bodyweight to Barbells program. We start at your current level and develop the strength, skill, and confidence to progress from foundational movement to confident barbell lifting.",
    meta: (
      <>
        <span>Mississauga and Milton, Ontario</span>
        <span>Limited availability · Inquire about current openings</span>
      </>
    ),
    cta: "Inquire about coaching",
    featured: true,
  },
  {
    tag: "MENTORSHIP",
    title: "Fitness Business Mentorship",
    copy: "Focused one-to-one calls for women building careers in fitness. Bring client questions, sales challenges, or business-development decisions, and we’ll troubleshoot them together with practical, experience-led guidance.",
    meta: <span>Limited one-to-one availability · Inquire about current openings</span>,
    cta: "Inquire about mentorship",
  },
  {
    tag: "EDUCATION",
    title: "Workshops + Speaking",
    copy: "Practical education for women, personal trainers, and communities on strength, training, and sustainable health.",
    meta: <span>In-person + virtual</span>,
    cta: "Discuss a workshop",
  },
  {
    tag: "COLLABORATION",
    title: "Brand + Media Partnerships",
    copy: "Values-aligned collaborations in women’s health, fitness, strength, recovery, and longevity.",
    meta: <span>Partnership inquiries</span>,
    cta: "Discuss a partnership",
  },
];

const testimonials = [
  {
    outcome: "Strength after major surgery",
    quote: (
      <>
        After two C-sections and major abdominal surgery, I’d lost all my core strength. Within six months I was strength training—going on vacation and doing <em>hard things</em>, keeping up with my kids, even training while fasting through Ramadan. She knew how I ate as a South Asian woman and coached me around my real life. It was her warmth and encouragement that changed my life for the better.
      </>
    ),
    name: "Anam S.",
    relationship: "Client, 6 years",
  },
  {
    outcome: "From bodyweight squat to a 125 lb barbell",
    quote: (
      <>
        I went from not being able to do a proper bodyweight squat to squatting a 125 lb barbell—both a physical and a highly emotional victory. From the time I started, I lost 30 pounds and went down almost three dress sizes. But more than that, I signed up for a trainer and got a world-class mentor, a movement specialist, and an extraordinary coach.
      </>
    ),
    name: "Maryam H.",
    relationship: "Client, 6 years",
  },
  {
    outcome: "A plan that moves with real life",
    quote: (
      <>
        I’d never been under a bar in over a decade of training with other trainers. Salwa moulds the entire plan around whatever is happening in your life—you never feel like you’re failing; you always feel on track. She’s a life coach, trainer, and guide, not just the hour you see her at the gym.
      </>
    ),
    name: "Mehwish J.",
    relationship: "Client, 5 years",
  },
  {
    outcome: "Rebuilding strength after injury",
    quote: (
      <>
        After a fall left me with a compression fracture, I thought I’d have to live with the limits. She built a progressive program with my physio and understood my body mechanics exceptionally well. It has literally been life-changing—I can resume and enjoy so many of the daily activities I couldn’t after the accident.
      </>
    ),
    name: "Dr. Linda Deppisch",
    relationship: "Client, 7 years",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">WOMEN’S STRENGTH COACH · EDUCATOR · ATHLETE · FOUNDER OF THE WOMEN’S BARBELL CLUB</p>
            <h1>
              Women don’t need to be told to do more.{" "}
              <span className="hero-highlight">They need to be built up so they can.</span>
            </h1>
            <p className="hero-lede">
              My signature program, From Bodyweight to Barbells, helps women fall in love with fitness, build strength and self-trust, and become confident barbell lifters—for life.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#program">Explore the program</Link>
              <a className="text-link" href={wbcUrl}>Visit The Women’s Barbell Club ↗</a>
            </div>
            <div aria-label="Professional highlights" className="hero-proof">
              <div><strong>12+</strong><span>years coaching women · multiple awards at Canada’s largest fitness company</span></div>
              <div><strong>3</strong><span>pillars for lasting progress</span></div>
              <div><strong>1</strong><span>goal: strength for real life</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="shape shape-one" />
            <div className="shape shape-two" />
            <div className="photo-frame">
              <img alt="Salwa Qadir strength training outdoors" className="site-photo hero-photo" src={withBasePath("/assets/hero.jpg")} />
            </div>
            <div aria-label="Train, learn, live" className="hero-note">
              <span>TRAIN</span><span>LEARN</span><span>LIVE</span>
            </div>
          </div>
        </section>

        <section aria-label="Core themes" className="marquee">
          <div className="marquee-track">
            {["MOVE WITH PURPOSE", "EAT TO SUPPORT YOUR LIFE", "RECOVER ON PURPOSE", "FEEL MORE CAPABLE", "GET STRONGER", "MOVE WITH PURPOSE", "EAT TO SUPPORT YOUR LIFE", "RECOVER ON PURPOSE"].map((item, index) => (
              <span className="marquee-item" key={`${item}-${index}`}>{item}<i>•</i></span>
            ))}
          </div>
        </section>

        <section className="program section" id="program">
          <div className="shell">
            <div className="program-heading">
              <div>
                <p className="eyebrow">SIGNATURE PROGRAM · THE WOMEN’S BARBELL CLUB</p>
                <h2>From Bodyweight<br /><em>to Barbells.</em></h2>
              </div>
              <div className="program-intro">
                <p className="program-lede">A progressive strength program that meets you where you are and teaches you how to become a confident lifter—one purposeful stage at a time.</p>
                <p>From Bodyweight to Barbells is the signature coaching pathway of The Women’s Barbell Club and the method at the centre of my one-to-one and small-group strength coaching.</p>
              </div>
            </div>

            <div aria-label="From Bodyweight to Barbells progression" className="program-stages">
              {programStages.map((stage) => (
                <article className="program-stage" key={stage.number}>
                  <span className="program-number">{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <strong>{stage.line}</strong>
                  <p>{stage.copy}</p>
                </article>
              ))}
            </div>

            <div className="program-details">
              <div>
                <p className="eyebrow">HOW IT WORKS</p>
                <p>Your starting point may be bodyweight, dumbbells, machines, or the barbell itself. We assess what your body, experience, and current season need, then use every stage with purpose. You learn how to move, why your program is structured the way it is, and how to keep building strength without feeling as though every interruption sends you back to the beginning.</p>
                <p>Progression is never about rushing toward the barbell or treating one form of training as more legitimate than another. It is about using the right tool at the right time and developing confidence through experience.</p>
              </div>
              <div className="program-fit">
                <p className="eyebrow">WHO IT IS FOR</p>
                <ul>
                  <li>Women new to strength training</li>
                  <li>Women returning after time away</li>
                  <li>Women rebuilding after pain or a significant life change</li>
                  <li>Women ready to progress beyond familiar exercises or equipment</li>
                  <li>Women who want to become confident barbell lifters</li>
                </ul>
              </div>
            </div>

            <div className="program-action">
              <div>
                <strong>One-to-one coaching + small-group training</strong>
                <span>Mississauga and Milton, Ontario · Limited availability</span>
              </div>
              <Link className="button button-primary" href="/contact">Inquire about the program</Link>
            </div>
          </div>
        </section>

        <section className="stories section" id="stories">
          <div className="shell">
            <div className="stories-heading">
              <div>
                <p className="eyebrow">CLIENT STORIES</p>
                <h2>Strength that shows up <em>in real life.</em></h2>
              </div>
              <p>These women started in different places—with pain, significant life changes, or years of stalled starts. What connects them is the strength they built and the way it began showing up beyond the gym. In their own words.</p>
            </div>
            <div className="stories-grid">
              {testimonials.map((testimonial) => (
                <blockquote className="story-card" key={testimonial.name}>
                  <span className="story-outcome">{testimonial.outcome}</span>
                  <span aria-hidden="true" className="story-mark">“</span>
                  <p>{testimonial.quote}</p>
                  <footer>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.relationship}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="shell">
            <p className="eyebrow">WORK WITH ME</p>
            <div className="work-heading">
              <h2>Get stronger for what matters to you.</h2>
              <p>My work takes different forms, but the starting point is always the woman in front of me. Whether you are here to get stronger, build your fitness career, bring meaningful education to a group, or explore a collaboration, we begin with what matters to you.</p>
            </div>
            <div className="work-grid">
              {services.map((service) => (
                <article className={`work-card${service.featured ? " featured" : ""}`} key={service.title}>
                  <span className="card-tag">{service.tag}</span>
                  {service.program && <span className="card-program">{service.program}</span>}
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="card-meta">{service.meta}</div>
                  <Link className="card-link" href="/contact">{service.cta} <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wbc section" id="wbc">
          <div className="shell wbc-card">
            <div className="wbc-copy">
              <p className="eyebrow">FOUNDED BY SALWA</p>
              <h2>I created the strength space I want the next generation to inherit.</h2>
              <p className="wbc-pillars">INTENTION <i>•</i> STRENGTH <i>•</i> SISTERHOOD</p>
              <p className="wbc-definition">A community-based approach to strength training that teaches women to fall in love with fitness through every season of life.</p>
              <p>After more than a decade coaching women, I knew access to the weight room was not enough. Women needed a clear way to learn, progress, support one another, and take ownership of the spaces where strength is built—not remain guests in them.</p>
              <p>I created The Women’s Barbell Club in response to what I saw women, especially younger women, asking for: credible coaching, practical education, a healthier relationship with fitness, and real sisterhood.</p>
              <p>WBC is a hybrid online and in-person pathway from beginner to confident lifter—and, eventually, leader. It is built around Intention, Strength, and Sisterhood so women can train, learn, and create more room to become stronger in the lives they are already living.</p>
            </div>
            <a aria-label="Join The Women’s Barbell Club waitlist" className="wbc-waitlist" href={wbcUrl}>
              <span>JOIN THE</span><strong>WAITLIST</strong><small>THE WOMEN’S BARBELL CLUB ↗</small>
            </a>
          </div>
        </section>

        <section className="statement section shell split-editorial" id="approach">
          <div className="editorial-copy">
            <p className="eyebrow">MY APPROACH</p>
            <h2>Strength has to work<br /><em>while life is happening.</em></h2>
            <p className="statement-copy">We train your body while working with the life you’re already living. As you get physically stronger, you also practise adjusting, prioritizing, recovering, following through, and making room for what matters to you. Confidence, self-trust, and mental strength improve through the same process—not afterward. The goal isn’t to finish becoming strong and then use that strength. It’s to become stronger while living your life and to get better at doing both.</p>
          </div>
          <div className="section-photo-wrap approach-photo-wrap">
            <img alt="Salwa Qadir seated with a barbell and stability ball" className="site-photo" src={withBasePath("/assets/approach.jpg")} />
          </div>
        </section>

        <section aria-labelledby="wbc-framework-heading" className="pillars shell">
          <div className="pillar-intro">
            <p className="eyebrow">THE WBC FRAMEWORK</p>
            <h2 id="wbc-framework-heading">Three pillars.<br /><em>One connected approach.</em></h2>
            <p>We use Intention, Strength, and Sisterhood to connect your training, nutrition, recovery, and real life—so you can achieve your goals, keep evolving through every season, and never have to start from scratch again.</p>
          </div>
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              {pillar.icon}
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </section>

        <div className="foundations-visual">
          <img alt="Salwa Qadir training outdoors with her daughter" className="site-photo wide-photo" src={withBasePath("/assets/foundations.jpg")} />
        </div>

        <section className="statement section shell split-editorial" id="values">
          <div className="editorial-copy">
            <p className="eyebrow">COACHING THE WOMAN IN FRONT OF ME</p>
            <h2>Your goals matter.<br /><em>So do your values, culture, and priorities.</em></h2>
            <p className="statement-copy">Growing up across cultures taught me early that women can have very different relationships with family, food, movement, time, and personal goals. I don’t expect you to fit yourself into a generic version of fitness. We shape strength and wellness around who you are and the season of life you’re in—respecting your values, culture, and priorities while helping you get stronger in the life you actually live.</p>
          </div>
          <div className="section-photo-wrap values-photo-wrap">
            <img alt="Salwa Qadir beside a stability ball and water bottle" className="site-photo" src={withBasePath("/assets/values.jpg")} />
          </div>
        </section>

        <section className="about section" id="about">
          <div className="shell about-grid">
            <div className="about-visual">
              <div className="about-photo">
                <img alt="Salwa Qadir smiling during a candid family fitness moment" className="site-photo about-image" src={withBasePath("/assets/about.jpg")} />
              </div>
              <div className="lavender-card">STRENGTH<br />IS A SKILL.</div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">ABOUT SALWA</p>
              <h2>I learned how to get stronger in the middle of a full life.</h2>
              <p>I’m a women’s strength coach, educator, competitive powerlifter, and mom. I didn’t start out loving weights. My relationship with fitness changed when I stopped asking how to become smaller and started asking what my body could do.</p>
              <p>That shift took me from dance to the weight room, then into a full-time career coaching women, educating trainers, and growing into leadership at Canada’s largest fitness company. My work there was recognized with multiple awards and accolades. At the same time, I trained and competed as a powerlifter while coaching and refereeing in the sport. I also protected my own physical wellbeing and raised a family.</p>
              <p>I learned that not every chapter of life can hold the same amount. I learned when to push, when to pull back, and how to make room for my goals without losing sight of what I needed. That’s how I coach now: physical strength, confidence, and self-trust develop together while we learn how to adjust, prioritize, and make room for what matters in real life.</p>
              <Link className="text-link light-link" href="#work">See how we can work together <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="credentials section shell">
          <div className="credentials-intro">
            <p className="eyebrow">EXPERIENCE + CREDENTIALS</p>
            <h2>More than a decade coaching women.<br />A career shaped by teaching strength well.</h2>
            <div className="credential-photo-wrap">
              <img alt="Salwa Qadir in a professional portrait" className="site-photo credential-photo" src={withBasePath("/assets/experience.jpg")} />
            </div>
          </div>
          <div className="credential-list">
            {credentials.map((credential, index) => (
              <div key={credential}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{credential}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="athlete-photo-band shell">
          <div className="athlete-photo-wrap">
            <img alt="Salwa Qadir preparing to lift at a powerlifting competition" className="site-photo athlete-photo" src={withBasePath("/assets/powerlifter.jpg")} />
          </div>
          <p className="athlete-caption">Competitive Powerlifter · Powerlifting Coach · Provincial Referee</p>
        </section>

        <section className="quote-band">
          <div className="shell">
            <p>“Women don’t need to be told to do more.<br /><em>They need to be built up so they can do more—and shown how.</em>”</p>
          </div>
        </section>

        <section className="contact-teaser section">
          <div className="shell contact-teaser-card">
            <div className="contact-photo-wrap">
              <img alt="Salwa Qadir in a relaxed seated portrait" className="site-photo contact-photo" src={withBasePath("/assets/contact.jpg")} />
            </div>
            <div>
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>Have a question or an idea? Want to work together?</h2>
            </div>
            <Link className="button button-primary" href="/contact">Contact Salwa</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
