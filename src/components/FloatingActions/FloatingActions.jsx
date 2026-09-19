import { MessageCircle, Phone } from 'lucide-react'
import './FloatingActions.css'

export function ContactTab({ onClick }) {
  return (
    <button className="contact-tab" onClick={onClick}>
      Contact Us
    </button>
  )
}

export default function FloatingActions({ onEnquireClick, phone = '+918438598947' }) { 
  return (
    <div className="floating-actions">
      <a
        href={`https://wa.me/${phone.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-actions__btn floating-actions__btn--whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a href={`tel:${phone}`} className="floating-actions__btn floating-actions__btn--call" aria-label="Call us">
        <Phone size={20} />
      </a>
      {onEnquireClick && (
        <button className="floating-actions__enquire" onClick={onEnquireClick}>
          Enquire Now
        </button>
      )}
    </div>
  )
}
