import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-navy text-white">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl lg:text-5xl font-semibold tracking-tighter2">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-white/70">
          The page you were looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
