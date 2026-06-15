import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-attendance.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[120vw] -translate-x-1/2 rounded-full bg-gradient-primary opacity-20 blur-3xl" aria-hidden />
      <div className="container mx-auto grid gap-8 py-16 md:grid-cols-2 md:items-center md:py-24">
        <article className="z-10 space-y-6 text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            College Attendance, simplified
          </h1>
          <p className="text-lg text-muted-foreground">
            Create time-bound rooms, upload roll numbers once, and let students check in securely using mobile fingerprint.
          </p>
          <div className="flex items-center gap-4">
            <Button size="lg" variant="hero">
              Create room now
              <ArrowRight className="ml-1" />
            </Button>
            <a href="#how-it-works" className="text-sm underline underline-offset-4">
              See how it works
            </a>
          </div>
        </article>
        <aside className="relative">
          <img
            src={heroImg}
            alt="Students verifying attendance with smartphone fingerprint in front of a lecture hall"
            loading="eager"
            className="mx-auto aspect-video w-full rounded-xl border bg-card object-cover shadow-elegant"
          />
        </aside>
      </div>
    </section>
  );
};

export default Hero;
