import React, { useState } from "react";
import {
  ArrowRight, CalendarDays, Clock3, Video, Menu, X, UserRound,
  Lightbulb, ClipboardCheck, MessageCircle, BriefcaseBusiness,
  GraduationCap, Compass, BookOpen, FileText, CheckCircle2, Plus,
  Minus, Instagram, Linkedin, Youtube, Mail, Sparkles
} from "lucide-react";

const curriculum = [
  ["Day 01", "Career Fundamentals", "Understand yourself and career options", "🧭"],
  ["Day 02", "Self Discovery", "Interests, strengths and aptitudes", "🪞"],
  ["Day 03", "Skill Exploration", "Find in-demand skills across fields", "💡"],
  ["Day 04", "Career Options", "Explore different career paths", "🗺️"],
  ["Day 05", "Resume & Portfolio", "Build a professional profile", "📄"],
  ["Day 06", "Communication Skills", "Express your ideas with confidence", "💬"],
  ["Day 07", "English for Work", "Practice professional communication", "🌱"],
  ["Day 08", "Digital Skills", "Get comfortable with essential tools", "💻"],
  ["Day 09", "Interview Readiness", "Prepare for real interview questions", "🎤"],
  ["Day 10", "Sales Fundamentals", "Learn the basics of value and selling", "🤝"],
  ["Day 11", "Personal Branding", "Showcase your skills and strengths", "✨"],
  ["Day 12", "AI & Modern Work", "Explore AI tools for everyday work", "🤖"],
  ["Day 13", "Career Pathways", "Match opportunities to your goals", "🚀"],
  ["Day 14", "Practical Assignment", "Apply what you have learned", "🛠️"],
  ["Day 15", "Review & Next Step", "Leave with a practical action plan", "🎯"]
];

const audiences = [
  ["🎓", "Students", "(10th / 12th)"],
  ["👩🏻‍🎓", "College Graduates", "Any stream"],
  ["🧑🏽‍💻", "Job Seekers", "Looking for opportunities"],
  ["🧭", "Career Switchers", "Exploring new fields"],
  ["🧠", "Skill Learners", "Ready to upskill"],
  ["🚀", "Aspiring Founders", "Building an idea"]
];

const faqs = [
  ["यह session किस language में होगा?", "Session मुख्य रूप से Hindi और Hinglish में होगा, ताकि concepts को समझना और apply करना आसान रहे।"],
  ["क्या session Zoom पर होगा?", "हाँ, live session online होगा। Join करने के लिए आपको session से पहले access details दी जाएँगी।"],
  ["क्या यह session free है?", "इस landing page पर session को free live session के रूप में दिखाया गया है। Registration के समय उपलब्ध details ज़रूर check करें।"],
  ["क्या मुझे पहले से preparation करनी होगी?", "नहीं। बस एक notebook और सीखने की इच्छा लेकर आएँ।"],
  ["क्या recording मिलेगी?", "Recording और replay access की availability registration के समय confirm की जाएगी।"],
  ["क्या certificate दिया जाएगा?", "Certificate से जुड़ी जानकारी Skills Club की registration team से confirm करें।"],
  ["क्या यह students के लिए है?", "यह students, graduates, job seekers, career switchers और skill learners सभी के लिए बनाया गया है।"],
  ["अगला step क्या है?", "Live session join करें, अपनी strengths समझें और 15-day learning journey के लिए अपना action plan बनाएँ।"]
];

const quizOptions = [
  "Solving problems",
  "Being creative",
  "Working with people",
  "Analyzing data"
];

function SectionEyebrow({ children }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizStep, setQuizStep] = useState(1);
  const [quizDone, setQuizDone] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitQuiz = () => {
    if (!quizAnswer) return;
    if (quizStep < 3) {
      setQuizStep((step) => step + 1);
      setQuizAnswer("");
    } else {
      setQuizDone(true);
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Skills Club home">
          <span className="brand-mark">SC</span>
          <span className="brand-copy"><strong>Skills Club</strong><small>Learn · Practice · Grow</small></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#session" onClick={() => setMenuOpen(false)}>Live Session</a>
          <a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <button className="button button-primary header-cta" onClick={() => scrollTo("session")}>Join Live Session <ArrowRight size={16} /></button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <SectionEyebrow>LIVE CAREER CLARITY SESSION</SectionEyebrow>
            <h1>Degree है!<br />अब <span>Direction</span><br />चाहिए?</h1>
            <p className="hero-lede">Confusion से Clarity तक — एक Live Session जो आपकी career direction को साफ़ करेगा। Expert guidance, practical steps और real opportunities के साथ।</p>
            <div className="event-meta">
              <div><CalendarDays /><span><small>This Sunday</small><strong>28 Oct 2024</strong></span></div>
              <div><Clock3 /><span><small>07:00 PM</small><strong>(IST)</strong></span></div>
              <div><Video /><span><small>Live on</small><strong>Zoom</strong></span></div>
            </div>
            <button className="button button-primary hero-button" onClick={() => scrollTo("session")}>Join Free Live Session <ArrowRight size={17} /></button>
            <div className="social-proof">
              <div className="avatar-stack"><span>👨🏻</span><span>👩🏽</span><span>👨🏽</span><span>👩🏻</span></div>
              <p><strong>10,000+</strong> students already joined</p>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a student thinking about career choices">
            <div className="sun-orb" />
            <div className="art-scribble scribble-one">✳</div>
            <div className="art-scribble scribble-two">↗</div>
            <div className="question-card question-top"><UserRound size={17} /><span>What career<br />is right for me?</span></div>
            <div className="question-card question-left"><Lightbulb size={18} /><span>Which skills<br />should I learn?</span></div>
            <div className="question-card question-right"><BriefcaseBusiness size={17} /><span>Will I get a<br />good job?</span></div>
            <div className="question-card question-bottom"><Compass size={17} /><span>How do I<br />start?</span></div>
            <div className="student-illustration">
              <div className="student-hair" />
              <div className="student-face"><span className="eye eye-left" /><span className="eye eye-right" /><span className="smile" /></div>
              <div className="student-neck" />
              <div className="student-body"><div className="shirt" /><div className="jacket-left" /><div className="jacket-right" /></div>
              <div className="laptop"><span>SC</span></div>
            </div>
            <div className="art-caption"><Sparkles size={14} /> Your next chapter starts here</div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Trusted by learners">
          <p>TRUSTED BY 10,000+ LEARNERS</p>
          <div className="trust-logos"><span>Google</span><span className="microsoft-logo">▦ Microsoft</span><span>amazon</span><span>◩ Adobe</span><span>tcs</span><span>Infosys</span></div>
        </section>

        <section className="section-wrap why-section" id="why">
          <div className="why-copy">
            <SectionEyebrow>WHY THIS SESSION?</SectionEyebrow>
            <h2>Career के सवालों का<br />अब मिलेगा <span>सही जवाब</span></h2>
            <p>Get practical guidance, real insights and a clear roadmap to build a career you’ll be proud of.</p>
            <a className="text-link" href="#curriculum">Explore the learning journey <ArrowRight size={16} /></a>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card"><span className="icon-tile yellow"><UserRound /></span><div><h3>Expert Guidance</h3><p>Learn from industry professionals and career mentors.</p></div></article>
            <article className="benefit-card"><span className="icon-tile pink"><BriefcaseBusiness /></span><div><h3>Real Examples</h3><p>Get practical, real-world examples from different career paths.</p></div></article>
            <article className="benefit-card"><span className="icon-tile blue"><ClipboardCheck /></span><div><h3>Step-by-Step Plan</h3><p>Know exactly what to do after your degree.</p></div></article>
            <article className="benefit-card"><span className="icon-tile green"><MessageCircle /></span><div><h3>Live Q&A</h3><p>Ask your doubts and get personalized answers.</p></div></article>
          </div>
        </section>

        <section className="quiz-band section-wrap" id="quiz">
          <div className="quiz-copy">
            <SectionEyebrow>TAKE THE FIRST STEP</SectionEyebrow>
            <h2>Personality Quiz से<br />जानिए आपकी <span>Career Clarity</span></h2>
            <p>यह एक छोटा सा quiz है जो आपकी रुचि, सोच और personality के आधार पर आपकी best career direction suggest करेगा।</p>
            <button className="button button-primary" onClick={() => { setQuizDone(false); setQuizStep(1); setQuizAnswer(""); scrollTo("quiz-card"); }}>Start Free Quiz <ArrowRight size={17} /></button>
            <div className="micro-note"><Clock3 size={14} /> Takes only 3 minutes</div>
          </div>
          <div className="quiz-card" id="quiz-card">
            {quizDone ? (
              <div className="quiz-result">
                <span className="result-icon"><CheckCircle2 size={28} /></span>
                <p className="quiz-progress">QUIZ COMPLETE</p>
                <h3>Your clarity journey starts now!</h3>
                <p>Join the live session to explore your strengths and turn them into a practical career plan.</p>
                <button className="button button-primary" onClick={() => scrollTo("session")}>Reserve My Spot <ArrowRight size={15} /></button>
              </div>
            ) : (
              <>
                <div className="quiz-topline"><span>QUESTION {quizStep} / 3</span><span className="quiz-progress-bar"><i style={{ width: `${quizStep / 3 * 100}%` }} /></span></div>
                <h3>{quizStep === 1 ? "What kind of work excites you the most?" : quizStep === 2 ? "Which task sounds most satisfying?" : "What would you like your work to create?"}</h3>
                <div className="quiz-options">
                  {(quizStep === 2 ? ["Finding solutions", "Making something new", "Helping a team", "Understanding patterns"] : quizStep === 3 ? ["A useful product", "A creative idea", "A positive impact", "A smarter process"] : quizOptions).map((option) => (
                    <button key={option} className={quizAnswer === option ? "quiz-option selected" : "quiz-option"} onClick={() => setQuizAnswer(option)}>
                      <span className="radio-dot" />{option}
                    </button>
                  ))}
                </div>
                <button className="button button-primary quiz-next" onClick={submitQuiz} disabled={!quizAnswer}>{quizStep === 3 ? "See Next Steps" : "Next"} <ArrowRight size={15} /></button>
              </>
            )}
          </div>
        </section>

        <section className="section-wrap curriculum-section" id="curriculum">
          <div className="section-heading">
            <div><SectionEyebrow>15-DAY LIVE LEARNING JOURNEY</SectionEyebrow><h2>Learn. Practice. <span>Grow.</span></h2><p>A step-by-step program to take you from confusion to a clear career plan.</p></div>
            <button className="button button-outline" onClick={() => document.getElementById("full-plan")?.scrollIntoView({ behavior: "smooth" })}>View Full Plan <ArrowRight size={15} /></button>
          </div>
          <div className="curriculum-grid" id="full-plan">
            {curriculum.map(([day, title, desc, emoji]) => <article className="day-card" key={day}>
              <span className="day-emoji">{emoji}</span><small>{day}</small><h3>{title}</h3><p>{desc}</p>
            </article>)}
          </div>
        </section>

        <section className="audience-band section-wrap">
          <div className="audience-heading"><div><SectionEyebrow>WHO IS THIS FOR?</SectionEyebrow><h2>अगर आप इनमें से किसी एक में हैं,<br />यह <span>session</span> आपके लिए है</h2></div><p>No matter what stage you’re in, this session will help you gain clarity and confidence.</p></div>
          <div className="audience-grid">{audiences.map(([emoji, title, subtitle]) => <article className="audience-card" key={title}><span>{emoji}</span><h3>{title}</h3><p>{subtitle}</p></article>)}</div>
        </section>

        <section className="section-wrap stories-section" id="stories">
          <SectionEyebrow>WHAT OUR LEARNERS SAY</SectionEyebrow>
          <div className="section-heading"><div><h2>Real Stories. <span>Real Clarity.</span></h2></div><span className="review-label">Learner experiences</span></div>
          <div className="testimonial-grid">
            <article className="testimonial-card"><p>“This session completely changed my perspective. Now I have a clear plan for my career.”</p><div className="reviewer"><span>👨🏻</span><div><strong>Rohit Sharma</strong><small>B.Tech Student</small></div><b>★★★★★</b></div></article>
            <article className="testimonial-card"><p>“The quiz and live session helped me understand my strengths. Highly recommended!”</p><div className="reviewer"><span>👩🏽</span><div><strong>Priya Verma</strong><small>College Graduate</small></div><b>★★★★★</b></div></article>
            <article className="testimonial-card"><p>“Practical advice and real examples. Exactly what I needed to take my next step.”</p><div className="reviewer"><span>👨🏽</span><div><strong>Aman Kumar</strong><small>Job Seeker</small></div><b>★★★★★</b></div></article>
          </div>
        </section>

        <section className="final-cta section-wrap" id="session">
          <div className="cta-sparkle">✳</div>
          <div className="cta-copy"><SectionEyebrow>YOUR NEXT STEP</SectionEyebrow><h2>Confusion को postpone मत कीजिए —<br /><span>Clarity</span> की शुरुआत कीजिए!</h2><p>Join the next live session and take control of your career journey.</p><button className="button button-primary" onClick={() => window.location.href = "mailto:hello@skillsclub.in?subject=Join%20Skills%20Club%20Live%20Session"}>Join Free Live Session <ArrowRight size={16} /></button><div className="social-proof"><div className="avatar-stack"><span>👨🏻</span><span>👩🏽</span><span>👨🏽</span><span>👩🏻</span></div><p><strong>10,000+</strong> students already joined</p></div></div>
          <div className="cta-art"><div className="cta-halo" /><div className="cta-person">👩🏻‍🎓</div><div className="cta-note">Same Dream<br /><strong>Bigger Direction!</strong><span>〰</span></div></div>
        </section>

        <section className="section-wrap faq-section" id="faq">
          <div className="faq-title"><SectionEyebrow>FAQ</SectionEyebrow><h2>Frequently Asked Questions</h2><p>Everything you need to know before joining.</p></div>
          <div className="faq-grid">{faqs.map(([q, a], i) => <article className={faqOpen === i ? "faq-item faq-expanded" : "faq-item"} key={q}>
            <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}><span>{q}</span>{faqOpen === i ? <Minus size={17} /> : <Plus size={17} />}</button>
            {faqOpen === i && <p className="faq-answer">{a}</p>}
          </article>)}</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand"><a className="brand brand-light" href="#home"><span className="brand-mark">SC</span><span className="brand-copy"><strong>Skills Club</strong><small>Learn · Practice · Grow</small></span></a><p>Helping students and professionals find the right career path through expert guidance, practical learning and community support.</p><div className="social-icons"><a href="#stories" aria-label="YouTube"><Youtube size={17} /></a><a href="#stories" aria-label="Instagram"><Instagram size={17} /></a><a href="#stories" aria-label="LinkedIn"><Linkedin size={17} /></a></div></div>
          <div className="footer-links"><h3>Quick Links</h3><a href="#home">Home</a><a href="#why">About</a><a href="#session">Live Session</a><a href="#curriculum">Curriculum</a><a href="#stories">Reviews</a><a href="#faq">FAQ</a></div>
          <div className="footer-links"><h3>Resources</h3><a href="#quiz">Career Quiz</a><a href="#stories">Success Stories</a><a href="#session">Contact Us</a><a href="#faq">Privacy Policy</a><a href="#faq">Terms & Conditions</a></div>
          <div className="footer-subscribe"><h3>Join Our Community</h3><p>Get updates about upcoming sessions, new resources and career tips.</p><form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }}><label className="sr-only" htmlFor="email">Your email address</label><Mail size={16} /><input id="email" type="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} /><button type="submit" aria-label="Subscribe"><ArrowRight size={16} /></button></form>{subscribed && <small className="subscribe-success">Thanks! You're on the list.</small>}</div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2024 Skills Club. All rights reserved.</span><span>Made with <b>♥</b> for a brighter future</span></div>
      </footer>
    </div>
  );
}

export default App;