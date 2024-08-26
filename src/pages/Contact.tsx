import { ContactForm } from "@/features/contact/components/ContactForm";
import { Card, CardContent } from "@/components/ui";

export const Contact = () => {
  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};
