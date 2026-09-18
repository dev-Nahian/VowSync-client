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
    title: "1. How do I find the right vendor for my event?",
    content: "You can browse vendors by category, location, or event type. Our platform makes it easy to compare services and choose the one that best matches your style and budget.",
  },
  {
    title: "2. Are the vendors on your platform verified?",
    content:
      "You can browse vendors by category, location, or event type. Our platform makes it easy to compare services and choose the one that best matches your style and budget.",
  },
  {
    title: "3. Can I contact vendors directly through the platform?",
    content:
      "You can browse vendors by category, location, or event type. Our platform makes it easy to compare services and choose the one that best matches your style and budget.",
  },
  {
    title: "4. Do you cover international events?",
    content: "You can browse vendors by category, location, or event type. Our platform makes it easy to compare services and choose the one that best matches your style and budget.",
  },
  {
    title: "5. Is there a cost to use the platform?",
    content:
      "You can browse vendors by category, location, or event type. Our platform makes it easy to compare services and choose the one that best matches your style and budget.",
  },
  {
    title: "6. What types of events can I plan with your platform?",
    content:
      "You can browse vendors by category, location, or event type. Our platform makes it easy to compare services and choose the one that best matches your style and budget.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="py-[120px] bg-white relative">
      <Container>
        <div>
          <div>
            <h2 className="text-[#0B0B0B] text-center font-salsa text-[40px] leading-12">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12">
            <Accordion
              defaultValue="item-0"
              type="single"
              collapsible
              className="max-w-[971px] my-4 w-full mx-auto"
            >
              {items.map(({ title, content }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="[&[data-state=open]]:shadow-[0_8px_24px_0_rgba(235,201,212,0.18)]"
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-45 text-2xl text-[#1D1D1F] font-semibold leading-9 font-manrope cursor-pointer">
                      {title}
                        <Plus className="h-8 w-8 shrink-0  transition-transform duration-200 text-[#C7A8B3]" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>

                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
      <div className="w-[180px] h-[378px] absolute left-0 top-[30%] ">
        <img className="w-full h-full" src={FAQFlowers} alt="not found" />
      </div>
    </section>
  );
}
