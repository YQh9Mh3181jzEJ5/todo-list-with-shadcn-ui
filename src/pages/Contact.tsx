import { ContactForm } from "@/features/contact/components/ContactForm";

export const Contact = () => {
  return (
    <div className="container max-w-2xl py-8">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <ContactForm />
    </div>
  );
};
