import FeedbackForm from "@/components/FeedbackForm";

export default function IndexPage() {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="font-bold text-6xl">Welcome Brother</h1>
        <p className="mt-3 text-2xl">Hope you are well</p>
      </div>
      <FeedbackForm />
      <article className="mt-10">
        <h2 className="font-bold text-xl">About Me</h2>
        <p>
          Hi, I m Mehedi Hasan, a full-stack developer with a passion for making
          the web awesome. I love mixing cool ideas with the latest techie
          stuff. My goal is simple: create websites and apps that people enjoy
          using. From the front look to the behind-the-scenes code, I have got
          it covered. Always learning new tricks and keeping up with whats hot
          in tech, I m on a mission to improve the online world. Lets team up,
          turn ideas into user-friendly websites, and make the web an even
          cooler space for everyone.
        </p>
      </article>
      <article className="mt-10">
        <h2 className="font-bold text-xl">Why I am the right person for you</h2>
        <p>
          I m a good fit for your project because I know my stuff when it comes
          to building websites. I m into both the front and back parts of it,
          making sure everything works smoothly. I m always learning new things
          to stay on top of the latest tech trends. What sets me apart is my
          knack for turning ideas into easy-to-use websites. I m excited to
          bring my skills and energy to your team and help make things even
          better on the web. Lets work together to create awesome stuff!
        </p>
      </article>
    </div>
  );
}
