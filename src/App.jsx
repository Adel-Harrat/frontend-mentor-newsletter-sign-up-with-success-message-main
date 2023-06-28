import { useState } from "react";
import Form from "../components/Form";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import ListItem from "../components/ListItem";
import Button from "../components/Button";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <>
      {!formSubmitted && (
        <main className="bg-white lg:w-[65rem] lg:flex lg:justify-between lg:items-start lg:rounded-[2rem] lg:overflow-hidden lg:min-h-[690px]">
          <section className="lg:order-last basis-[670px] lg:flex lg:items-center lg:justify-center">
            <img
              src="/assets/images/illustration-sign-up-mobile.svg"
              alt="sign up mobile image"
              className="w-full lg:hidden"
            />

            <img
              src="/assets/images/illustration-sign-up-desktop.svg"
              alt="sign up desktop image"
              className="hidden lg:block lg:m-6 lg:w-full lg:h-full"
            />
          </section>

          <section className="px-5 lg:flex lg:flex-col lg:justify-center lg:px-20">
            <Title />
            <Subtitle />

            <ul className="text-base mt-5 text-charcoal-grey lg:text-lg lg:mt-8">
              <ListItem text="Product discovery and building what matters" />
              <ListItem text="Measuring to ensure updates are a success" />
              <ListItem text="And much more!" />
            </ul>

            <Form setFormSubmitted={setFormSubmitted} setEmail={setEmail} />
          </section>
        </main>
      )}

      {formSubmitted && (
        <section className="px-8 relative min-h-screen lg:bg-white lg:max-w-[34rem] lg:p-16 lg:min-h-fit lg:rounded-[3rem] lg:overflow-hidden">
          <img
            src="/assets/images/icon-success.svg"
            alt="check icon"
            className="mt-36 lg:mt-0"
          />
          <h1 className="text-[2.75rem] leading-10 text-dark-slate-grey font-bold mt-10 lg:text-[3.75rem] lg:leading-[4rem]">
            Thanks for subscribing!
          </h1>
          <p className="text-charcoal-grey mt-6 lg:text-lg">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <Button
            text="Dismiss message"
            classes={
              "absolute bottom-24 left-8 right-8 w-auto px-24 lg:relative lg:mt-10 lg:bottom-0 lg:left-0 lg:right:0 lg:w-full"
            }
          />
        </section>
      )}
    </>
  );
};

export default App;
