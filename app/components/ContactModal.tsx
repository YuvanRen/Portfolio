'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  const contactInfo = [
    { type: 'Phone', value: '(201) 665-5833', href: 'tel:+12016655833' },
    { type: 'Email', value: 'yrengifo@stevens.edu', href: 'mailto:yrengifo@stevens.edu' },
    { type: 'LinkedIn', value: 'linkedin.com/in/YuvanRengifo', href: 'https://www.linkedin.com/in/yuvan-rengifo-178925256/' }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-cyber-black/90 border-2 border-cyber-blue p-8 rounded-lg max-w-md w-full mx-4">
        <h2 className="cyber-glitch text-2xl font-bold text-cyber-yellow mb-6 text-center" data-text="CONTACT INFO">
          CONTACT INFO
        </h2>
        
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.type === 'LinkedIn' ? '_blank' : undefined}
              rel={info.type === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              className="cyber-card block hover:border-cyber-yellow transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-cyber-blue font-mono-cyber">{info.type}</span>
                <span className="text-cyber-yellow font-mono-cyber">{info.value}</span>
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={onClose}
          className="cyber-button mt-6 w-full text-center"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ContactModal; 