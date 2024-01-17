import React from "react";
import { contacts } from "../constants";

const Contact = () => {
  return (
    <section className="relative flex lg:flex-col max-container h-screen">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <div className="mt-16 flex flex-wrap gap-12">
          {contacts.map((skill) => (
            <a
              className="block-container w-20 h-20"
              key={skill.name}
              href={skill.url}
              target="_blank"
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
