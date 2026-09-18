import confetti from "canvas-confetti";
import WelcomeRingImage from "@/assets/Images/Auth/welcome-ring.png";

export function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 5 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <img
        onClick={handleClick}
        src={WelcomeRingImage}
        alt=""
        className="w-full max-w-full"
      />
    </div>
  );
}
