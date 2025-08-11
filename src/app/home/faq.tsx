import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import placeholder from "../../assets/placeholder.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="rounded-lg mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        className="cursor-pointer w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-lg font-medium text-gray-900 pr-4">{question}</h3>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Plus className="w-5 h-5 text-gray-600" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const faqData = [
    { id: 1, question: "What is your return policy?", answer: "We offer a 30-day return policy for all unused items in their original packaging. Returns are free for defective products, and a small restocking fee may apply for other returns. Please contact our customer service team to initiate a return." },
    { id: 2, question: "How long does shipping take?", answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping options are also available at checkout. International shipping times vary by destination and can take 7-14 business days." },
    { id: 3, question: "Do you offer international shipping?", answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination. Some restrictions may apply to certain products or regions. You can check if we ship to your location by entering your address at checkout." },
    { id: 4, question: "How can I track my order?", answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site. You'll also receive automatic updates about your shipment's progress." },
    { id: 5, question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with SSL encryption to protect your payment information." }
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) newOpenItems.delete(id);
    else newOpenItems.add(id);
    setOpenItems(newOpenItems);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8">
      <div>
        <Image src={placeholder} alt="" className="p-4" />
      </div>

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h1>
          <div className="text-gray-600 flex gap-2">
            <button className="rounded-3xl px-2 bg-blue-400 cursor-pointer">Group 1</button>
            <button className="rounded-3xl px-2 bg-blue-50 cursor-pointer">Group 2</button>
            <button className="rounded-3xl px-2 bg-blue-50 cursor-pointer">Group 3</button>
          </div>
        </div>

        <div className="space-y-2">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
