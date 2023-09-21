const Contact = () => {
  return (
    <section id="contact" className="mx-auto flex max-w-contentContainer flex-col items-center justify-center gap-4 py-10 xl:py-32">
      <p className="flex items-center font-titleFont text-lg font-semibold tracking-wide text-textGreen">04. What’s Next?</p>
      <h2 className="font-titleFont text-5xl font-semibold">Hire Me</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I am currently open to new oppoturnites where I can employ my skills , preferably in fast paced startups or any place that offers me an apportunity to
        learn and grow as software engineer . Sounds like you ?
      </p>

      <a href="mailto:obuyaamwatah@gmail.com">
        <button className="mt-6 h-14 w-40 rounded-md border border-textGreen font-titleFont text-sm tracking-wider text-textGreen duration-300 hover:bg-hoverColor">
          Let&apos;s connect
        </button>
      </a>
    </section>
  );
};

export default Contact;
