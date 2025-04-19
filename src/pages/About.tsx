import { Button } from "@/components/ui/button";

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 px-8">
      <h1 className="text-8xl font-extrabold text-primary-foreground text-center">About Me</h1>
      <p className="text-lg max-w-2xl text-primary-foreground text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
        at, ligula. Suspendisse hendrerit, dolor sed auctor fermentum, velit
        neque interdum orci, sit amet eleifend nisl lorem et lorem. Suspendisse
        et orci vel massa rutrum pulvinar.{" "}
      </p>
      <Button className="mt-6 bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8 py-3">
        Continue
      </Button>
    </div>
  );
}

export default About;
