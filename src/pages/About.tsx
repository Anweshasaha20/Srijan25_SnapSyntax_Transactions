import { Button } from "@/components/ui/button";
import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-r from-black to-purple-900 text-white min-h-screen">
      <div className="flex flex-col items-start justify-center h-screen gap-13 px-8">
        <h1 className="text-8xl font-extrabold pl-15">About Me</h1>
        <p className="text-lg ml-auto max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium at, ligula. Suspendisse hendrerit, dolor sed
          auctor fermentum, velit neque interdum orci, sit amet eleifend nisl
          lorem et lorem. Suspendisse et orci vel massa rutrum pulvinar.{" "}
        </p>
        <Button className="mt-4 self-center bg-purple-700 hover:bg-purple-800 text-lg px-8 py-3">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default About;
