import React from "react";
import "./Countant.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../src/animation/done.json";
import contactAnimation from "../../../src/animation/contactus.json";

const Countant = () => {
  const [state, handleSubmit] = useForm("xovadned");

  return (
    <div>
      <section className="contact-as ">
        <h1 className="home">
          <span className="icon-envelope"></span>
          Contant us
        </h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
          perspiciatis.
        </p>
        <div style={{ justifyContent: "space-between" }} className="flex ">
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              <label autoComplete="off" required htmlFor="email">
                Email Address:
              </label>
              <input
                placeholder="Enter Adress"
                name="email"
                type="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex">
              <label htmlFor="massege">Your massage:</label>
              <textarea
                placeholder="Massage"
                required
                name="Message"
                id="massege"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit"
            >
              {state.submitting ? "submitting ..." : "submit"}
            </button>
            {state.succeeded && (
              <p
                className="flex"
                style={{ fontSize: "16px", marginTop: "1.7rem" }}
              >
                <Lottie
                  loop={false}
                  style={{ height: 30 }}
                  animationData={groovyWalkAnimation}
                />
                your massage has been sent successfully
              </p>
            )}
          </form>
          <div className=" animation ">
            {" "}
            <Lottie className="contactus" style={{ height: 355 }} animationData={contactAnimation} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countant;
