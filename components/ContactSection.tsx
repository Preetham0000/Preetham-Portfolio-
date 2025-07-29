
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        // Simulate a form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, you'd send this data to a backend or service like Netlify Forms, Formspree, etc.
        console.log({ name, email, message });

        setStatus('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-20 bg-slate-100 rounded-2xl mb-20">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-slate-900">Get In Touch</h2>
                <p className="text-slate-600 mb-8">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-left space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                            {status ? status : 'Send Message'}
                        </button>
                    </div>
                    {status.includes('successfully') && <p className="text-center text-green-600 mt-4">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
