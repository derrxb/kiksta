import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/client/ui/atoms/accordion";
import { faqs } from "@/public/locales/en/pace-calculator.json";

export const FrequentlyAskedQuestions = () => {
  return (
    <Accordion type="single" collapsible>
      {faqs.map((faq) => (
        <AccordionItem key={faq.answer} value={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
