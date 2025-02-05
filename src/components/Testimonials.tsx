"use client";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import type { data } from "../data/data";

export default function Testimonials({
  testimonials,
}: {
  testimonials: typeof data.testimonials;
}) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
