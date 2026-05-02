'use client';
import { useState } from 'react';

const projectTypes = [
  'Frontend Architecture & Performance',
  'Full Stack Web Applications',
  'Enterprise Admin Panels & Dashboards',
  'E-Commerce & Platform Development',
  'Technical Strategy & Consulting',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: projectTypes[0],
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        projectType: projectTypes[0],
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send inquiry. Please try again or use direct email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
      {/* Name + Company */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <FormField
          label="Your Name *"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          label="Company"
          name="company"
          type="text"
          placeholder="Acme Inc."
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      {/* Email + Project Type */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <FormField
          label="Email Address *"
          name="email"
          type="email"
          placeholder="hello@world.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="relative">
          <label
            className="font-label mb-2 block text-[0.6875rem] font-semibold tracking-widest uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Project Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full cursor-pointer appearance-none bg-transparent px-0 py-3 text-lg focus:outline-none"
            style={{
              borderBottom: '1px solid rgba(224,191,191,0.4)',
              color: 'var(--color-on-surface)',
              fontFamily: 'var(--font-body)',
            }}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <label
          className="font-label mb-2 block text-[0.6875rem] font-semibold tracking-widest uppercase"
          style={{ color: 'var(--color-on-surface-variant)' }}
        >
          Your Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          placeholder="Tell me about your vision..."
          className="w-full resize-none bg-transparent px-0 py-3 text-lg focus:outline-none"
          style={{
            borderBottom: '1px solid rgba(224,191,191,0.4)',
            color: 'var(--color-on-surface)',
            fontFamily: 'var(--font-body)',
          }}
        />
      </div>

      {/* Status Messages */}
      {status === 'error' && (
        <p className="font-body text-sm font-semibold" style={{ color: 'var(--color-error)' }}>
          {errorMessage}
        </p>
      )}
      {status === 'success' && (
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface-container-highest)' }}>
          <p className="font-body text-sm font-semibold" style={{ color: 'var(--color-primary-container)' }}>
            Thanks for reaching out! I've received your inquiry and will get back to you shortly.
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="font-body flex items-center justify-center gap-3 w-full md:w-auto px-12 py-5 font-semibold transition-all hover:opacity-80 hover:shadow-xl active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--color-primary-container)',
            color: 'var(--color-on-primary)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
          {status !== 'loading' && (
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          )}
        </button>
      </div>
    </form>
  );
}

/* ── Reusable form field ── */
function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className="relative">
      <label
        className="font-label mb-2 block text-[0.6875rem] font-semibold tracking-widest uppercase"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent px-0 py-3 text-lg transition-all focus:outline-none"
        style={{
          borderBottom: '1px solid rgba(224,191,191,0.4)',
          color: 'var(--color-on-surface)',
          fontFamily: 'var(--font-body)',
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderBottomColor = 'var(--color-primary)')
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderBottomColor = 'rgba(224,191,191,0.4)')
        }
      />
    </div>
  );
}
