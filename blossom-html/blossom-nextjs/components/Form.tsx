'use client';

import { useState } from 'react';

export default function Form() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      form.reset();
    }, 1100);
  };

  return (
    <form id="enquiryForm" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <div className="form-row">
          <div className="field">
            <label htmlFor="fName">Your Name *</label>
            <input id="fName" name="name" type="text" placeholder="E.g. Priya Shah" required />
          </div>
          <div className="field">
            <label htmlFor="fPhone">Phone / WhatsApp *</label>
            <input id="fPhone" name="phone" type="tel" placeholder="+91 98765 43210" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="fDate">Preferred Event Date</label>
            <input id="fDate" name="date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="fGuests">Guest Count</label>
            <select id="fGuests" name="guests" defaultValue="250-350">
              <option value="upto-150">Up to 150 guests</option>
              <option value="150-250">150 – 250 guests</option>
              <option value="250-350">250 – 350 guests</option>
              <option value="350-500">350 – 500 guests</option>
              <option value="500-600">500 – 600 guests</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="fType">Occasion</label>
            <select id="fType" name="occasion">
              <option>Wedding / Vivaah</option>
              <option>Wedding Reception</option>
              <option>Garba &amp; Sangeet Night</option>
              <option>Haldi / Mehndi / Ring Ceremony</option>
              <option>Birthday or Kids&apos; Party</option>
              <option>Baby Shower / Naming</option>
              <option>Kitty / Family Get-Together</option>
              <option>Corporate / Dealer Meet</option>
              <option>Other — will explain</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="fPack">Interested Tier</label>
            <select id="fPack" name="tier">
              <option>Deciding — suggest please</option>
              <option>The Meadow (intimate)</option>
              <option>The Blossom (signature)</option>
              <option>The Grand Bloom (bespoke)</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="fMsg">Tell Us More</label>
          <textarea id="fMsg" name="message" placeholder="Your date, rituals planned (hawan, baraat…), catering ideas, budget range — anything helps." />
        </div>
        <div className="form-foot">
          <p className="form-note">We reply within business hours, all days. Your details stay private — date-first conversation, zero spam.</p>
          <button className="btn btn-gold" type="submit" disabled={sending}>
            {sending ? <span>Sending the blossoming envelope…</span> : <>{sent ? 'Request Sent — We Will Call You' : <>Send Enquiry <span className="arr">✿</span></>}</>}
          </button>
        </div>
        <div className={'form-ok' + (sent ? ' show' : '')}>✿ Enquiry bloom-boxed! The booking desk will call you shortly on the number shared.</div>
      </div>
    </form>
  );
}
