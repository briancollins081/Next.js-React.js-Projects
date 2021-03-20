import Image from "next/image";
import s from "./hero.module.css";
const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.image}>
        <Image
          src="/images/site/andere.jpg"
          alt="Andere's Picture"
          width={300}
          height={300}
        />
      </div>
      <h1>Welcome, The Lost Arctic, To...</h1>
      <p>
        Navigate through the undergrounds of history, the hidden mines of
        treasurous knowledge. Get to hear about the untold mysteries of time lost
        and time gained... The thrill of wonderous existance w...
      </p>
    </section>
  );
};

export default Hero;
