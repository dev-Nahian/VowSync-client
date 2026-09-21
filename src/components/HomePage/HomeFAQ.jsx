import Container from "../common/Container";
import FAQFlowers from "@/assets/Images/nrFAQflowers.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus } from "lucide-react";

const items = [
  {
    title: "1. How do I find the right vendor for my wedding?",
    content:
      "You can filter vendors by category, location, price range, and guest capacity. You can also chat directly with our AI assistant to receive curated recommendations tailored to your exact wedding style and budget.",
  },
  {
    title: "2. Are all the vendors on VowSync verified?",
    content:
      "Yes! Every vendor profile is rigorously vetted for quality, professional licenses, portfolio authenticity, and customer review integrity before receiving their certified badge.",
  },
  {
    title: "3. Can I message and request custom quotes directly?",
    content:
      "Absolutely. You can request availability, send your specific guest count and dietary needs, and receive transparent itemized quotes directly through your VowSync couple dashboard.",
  },
  {
    title: "4. Do you support destination and international weddings?",
    content:
      "Yes, VowSync features top destination wedding planners, resort banquet venues, and traveling cinema teams ready to coordinate celebrations globally.",
  },
  {
    title: "5. Is there any fee for couples to use VowSync?",
    content:
      "No, VowSync's suite of wedding planning tools — including the Budget Calculator, Interactive Checklist, Guest RSVP tracker, and AI assistant — is completely free for couples.",
  },
  {
    title: "6. How does the AI wedding assistant help me?",
    content:
      "Our AI planner analyzes your wedding date, location, budget, and aesthetic preferences to automatically generate a tailored month-by-month checklist, breakdown your expenses, and suggest compatible vendors.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="py-20 md:py-28 bg-white relative font-manrope">
      <Container>
        <div>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              Got Questions?
            </span>
            <h2 className="text-[#0B0B0B] text-center font-salsa text-3xl sm:text-4xl mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6A7283] text-sm sm:text-base mt-2">
              Everything you need to know about planning your dream wedding on VowSync.
            </p>
          </div>

          <div className="mt-12">
            <Accordion
              defaultValue="item-0"
              type="single"
              collapsible
              className="max-w-[971px] my-4 w-full mx-auto space-y-4"
            >
              {items.map(({ title, content }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#F0D5DD] rounded-2xl px-6 bg-[#FFF9F9] transition-all duration-200 [&[data-state=open]]:bg-white [&[data-state=open]]:shadow-[0_8px_24px_0_rgba(235,201,212,0.25)]"
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-5 transition-all [&[data-state=open]>svg]:rotate-45 text-lg sm:text-xl text-[#1D1D1F] font-semibold text-left font-manrope cursor-pointer gap-4">
                      <span>{title}</span>
                      <Plus className="h-6 w-6 shrink-0 transition-transform duration-200 text-[#C7A8B3]" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>

                  <AccordionContent className="text-[#4F586D] text-sm sm:text-base leading-relaxed pb-5 pt-1">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
      <div className="w-[140px] h-[300px] absolute left-0 top-[30%] pointer-events-none hidden xl:block opacity-60">
        <img className="w-full h-full object-contain" src={FAQFlowers} alt="" />
      </div>
    </section>
  );
}
