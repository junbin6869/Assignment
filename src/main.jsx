import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Award,
  BookOpenText,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MessageCircle,
  PenLine,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound
} from 'lucide-react';
import './styles.css';

const achievementPosts = [
  {
    name: 'Amelia Tan',
    role: 'Year 2 Computer Science',
    result: 'Accepted into a summer internship',
    body: 'I finally received an offer after weeks of applications. The offer matters, but the process behind it matters too.',
    labels: [
      { value: '20', label: 'applications submitted' },
      { value: '15', label: 'rejections received' },
      { value: '4', label: 'interviews attended' },
      { value: '6 weeks', label: 'resume revisions' }
    ],
    tags: ['Internship', 'Rejection', 'Persistence'],
    comments: 18,
    support: 142
  },
  {
    name: 'Daniel Wong',
    role: 'Foundation in Science',
    result: 'Improved calculus grade from C to A-',
    body: 'This was not a sudden success. I failed two quizzes, changed my study routine, and joined a weekly peer revision group.',
    labels: [
      { value: '2', label: 'failed quizzes' },
      { value: '9', label: 'consultation sessions' },
      { value: '38 hrs', label: 'practice logged' },
      { value: '3', label: 'study methods tested' }
    ],
    tags: ['Exam Recovery', 'Peer Support', 'Study Habits'],
    comments: 11,
    support: 96
  }
];

const forumPosts = [
  {
    title: 'I did not get shortlisted for the scholarship',
    author: 'Anonymous student',
    text: 'I felt embarrassed at first because everyone around me seemed to be winning awards. Reading other posts helped me see rejection as part of the process.',
    recovery: 'I asked for feedback, rewrote my personal statement, and planned two alternative applications.',
    replies: 24,
    tag: 'Scholarship setback'
  },
  {
    title: 'My group presentation went badly',
    author: 'Priya K.',
    text: 'Our slides were not clear and I froze during the Q&A. It felt like proof that I was not good enough.',
    recovery: 'My lecturer reminded us that weak presentations can be improved. I booked a practice session before the next one.',
    replies: 17,
    tag: 'Confidence'
  },
  {
    title: 'Burned out after chasing perfect grades',
    author: 'Marcus L.',
    text: 'I kept comparing my results with classmates and ignored sleep. My grades looked fine, but I was not coping well.',
    recovery: 'I started tracking effort, rest, and progress instead of only final marks.',
    replies: 31,
    tag: 'Healthy comparison'
  }
];

const guidanceCards = [
  {
    icon: ShieldCheck,
    title: 'Compare the full process',
    text: 'A final achievement is incomplete without attempts, mistakes, support, and recovery.'
  },
  {
    icon: RotateCcw,
    title: 'Normalize setbacks',
    text: 'Rejection, failed tests, and difficult feedback can be ordinary stages of academic growth.'
  },
  {
    icon: HeartHandshake,
    title: 'Respond with support',
    text: 'The forum rewards constructive replies that help students reflect and recover.'
  }
];

function App() {
  return (
    <main className="app-shell">
      <section className="phone-frame" aria-label="Academic Reality App prototype">
        <header className="topbar">
          <div>
            <p className="eyebrow">Student community prototype</p>
            <h1>Academic Reality</h1>
          </div>
          <button className="icon-button" aria-label="Search posts" title="Search posts">
            <Search size={20} />
          </button>
        </header>

        <nav className="tabs" aria-label="Main sections">
          <a href="#feed" className="active">Feed</a>
          <a href="#composer">Label</a>
          <a href="#forum">Forum</a>
          <a href="#guidance">Guide</a>
        </nav>

        <section className="summary-strip" aria-label="App purpose">
          <div>
            <strong>Success with context</strong>
            <span>Every achievement post includes the effort and rejection behind the result.</span>
          </div>
          <Sparkles size={22} />
        </section>

        <section id="feed" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Reality Feed</p>
              <h2>Achievements without the illusion of effortlessness</h2>
            </div>
            <button className="small-button">
              <PenLine size={16} />
              Post
            </button>
          </div>

          <div className="feed-list">
            {achievementPosts.map((post) => (
              <article className="post-card" key={post.name}>
                <div className="post-header">
                  <div className="avatar" aria-hidden="true">{post.name.slice(0, 1)}</div>
                  <div>
                    <h3>{post.name}</h3>
                    <p>{post.role}</p>
                  </div>
                </div>
                <div className="result-line">
                  <Award size={18} />
                  <strong>{post.result}</strong>
                </div>
                <p className="post-body">{post.body}</p>
                <div className="label-grid">
                  {post.labels.map((label) => (
                    <div className="metric" key={label.label}>
                      <strong>{label.value}</strong>
                      <span>{label.label}</span>
                    </div>
                  ))}
                </div>
                <div className="tag-row">
                  {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <footer className="post-actions">
                  <button><HeartHandshake size={16} /> {post.support}</button>
                  <button><MessageCircle size={16} /> {post.comments}</button>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section id="composer" className="content-section composer-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Achievement Label Composer</p>
              <h2>Before posting, add the process behind the result</h2>
            </div>
          </div>

          <form className="composer-card">
            <label>
              Achievement
              <input value="Received an internship offer" readOnly />
            </label>
            <div className="composer-grid">
              <label>
                Attempts
                <input value="20 applications" readOnly />
              </label>
              <label>
                Setbacks
                <input value="15 rejections" readOnly />
              </label>
            </div>
            <label>
              Recovery or support used
              <textarea value="Revised my resume with a peer mentor and practiced interviews after each rejection." readOnly />
            </label>
            <div className="completion-meter">
              <div>
                <CheckCircle2 size={18} />
                Reality label complete
              </div>
              <span>4/4 context fields</span>
            </div>
            <button type="button" className="primary-button">
              <Send size={18} />
              Share with context
            </button>
          </form>
        </section>

        <section id="forum" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Academic Struggle Forum</p>
              <h2>Setbacks students usually do not post</h2>
            </div>
          </div>

          <div className="forum-list">
            {forumPosts.map((post) => (
              <article className="forum-card" key={post.title}>
                <div className="forum-tag">{post.tag}</div>
                <h3>{post.title}</h3>
                <p className="byline">{post.author}</p>
                <p>{post.text}</p>
                <div className="recovery-box">
                  <TrendingUp size={17} />
                  <span>{post.recovery}</span>
                </div>
                <footer>
                  <UsersRound size={16} />
                  {post.replies} supportive replies
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section id="guidance" className="content-section guidance-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Guidance Hub</p>
              <h2>Healthy academic comparison</h2>
            </div>
          </div>

          <div className="guidance-list">
            {guidanceCards.map(({ icon: Icon, title, text }) => (
              <article className="guidance-card" key={title}>
                <Icon size={22} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="bottom-nav" aria-label="Prototype navigation">
          <a href="#feed"><Target size={19} />Feed</a>
          <a href="#composer"><PenLine size={19} />Post</a>
          <a href="#forum"><MessageCircle size={19} />Forum</a>
          <a href="#guidance"><BookOpenText size={19} />Guide</a>
        </footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
