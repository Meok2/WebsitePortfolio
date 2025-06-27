import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Portfolio = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {/* Header with logout */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid #e2e8f0',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Portfolio
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {user && (
            <span style={{ fontSize: '0.9rem', color: '#666' }}>
              Welcome, {user.name || user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              background: '#f56565',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Portfolio Content - Using existing HTML structure */}
      <div style={{ marginTop: '80px' }}>
        <PortfolioContent />
      </div>
    </div>
  );
};

const PortfolioContent = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <img 
              src="/assets/profile.svg" 
              alt="Profile" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '6px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem', color: '#020817' }}>
            John Developer
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#3b82f6', marginBottom: '1.5rem', fontWeight: '600' }}>
            Full Stack IT Professional
          </p>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Passionate about creating innovative solutions and building scalable applications
            that make a difference in the digital world.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <button style={{
              padding: '0.75rem 1.5rem',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              View My Work
            </button>
            <button style={{
              padding: '0.75rem 1.5rem',
              background: 'transparent',
              color: '#020817',
              border: '2px solid #e2e8f0',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '1rem', color: '#020817' }}>
              About Me
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Get to know more about my background and expertise
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#020817' }}>
                Professional Background
              </h3>
              <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                With over 5 years of experience in IT and software development, I specialize in 
                creating robust, scalable applications using modern technologies. My journey began 
                with a passion for problem-solving and has evolved into expertise across full-stack 
                development, cloud architecture, and system optimization.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem', lineHeight: '1.8' }}>
                I believe in writing clean, maintainable code and staying current with industry 
                best practices. My approach combines technical excellence with strong communication 
                skills to deliver solutions that exceed expectations.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f1f5f9', borderRadius: '0.75rem' }}>
                  <span style={{ display: 'block', fontSize: '1.875rem', fontWeight: '700', color: '#3b82f6', marginBottom: '0.5rem' }}>
                    50+
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>
                    Projects Completed
                  </span>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f1f5f9', borderRadius: '0.75rem' }}>
                  <span style={{ display: 'block', fontSize: '1.875rem', fontWeight: '700', color: '#3b82f6', marginBottom: '0.5rem' }}>
                    5+
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>
                    Years Experience
                  </span>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f1f5f9', borderRadius: '0.75rem' }}>
                  <span style={{ display: 'block', fontSize: '1.875rem', fontWeight: '700', color: '#3b82f6', marginBottom: '0.5rem' }}>
                    15+
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>
                    Technologies
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#020817' }}>
                  Core Values
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
                    <span style={{ color: '#3b82f6', fontSize: '0.875rem' }}>✓</span>
                    Innovation & Creativity
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
                    <span style={{ color: '#3b82f6', fontSize: '0.875rem' }}>✓</span>
                    Continuous Learning
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
                    <span style={{ color: '#3b82f6', fontSize: '0.875rem' }}>✓</span>
                    Quality & Excellence
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
                    <span style={{ color: '#3b82f6', fontSize: '0.875rem' }}>✓</span>
                    Collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 2rem', background: '#f1f5f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '1rem', color: '#020817' }}>
              Featured Projects
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Showcase of my recent work and achievements
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Project cards would go here */}
            <div style={{ background: '#ffffff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
              <div style={{ height: '200px', background: 'linear-gradient(135deg, #3b82f6 0%, rgba(59, 130, 246, 0.8) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2.25rem' }}>
                💻
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#020817' }}>
                  E-Commerce Platform
                </h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                    React
                  </span>
                  <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                    Node.js
                  </span>
                  <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '5rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '1rem', color: '#020817' }}>
              Technical Skills
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Technologies and tools I work with
            </p>
          </div>
          <div style={{ display: 'grid', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#020817' }}>
                Frontend Development
              </h3>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <span style={{ fontWeight: '500', color: '#020817' }}>HTML5/CSS3</span>
                  <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '0.5rem', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6 0%, rgba(59, 130, 246, 0.8) 100%)', width: '95%', borderRadius: '0.5rem' }}></div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <span style={{ fontWeight: '500', color: '#020817' }}>JavaScript/TypeScript</span>
                  <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '0.5rem', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6 0%, rgba(59, 130, 246, 0.8) 100%)', width: '90%', borderRadius: '0.5rem' }}></div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <span style={{ fontWeight: '500', color: '#020817' }}>React/Vue.js</span>
                  <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '0.5rem', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6 0%, rgba(59, 130, 246, 0.8) 100%)', width: '85%', borderRadius: '0.5rem' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 2rem', background: '#f1f5f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '1rem', color: '#020817' }}>
              Get In Touch
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Let's discuss your next project
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '1.5rem', background: '#ffffff', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
              <p style={{ fontSize: '1.125rem', color: '#020817', marginBottom: '0.5rem' }}>
                📧 john.developer@email.com
              </p>
              <p style={{ fontSize: '1.125rem', color: '#020817' }}>
                📱 +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;