import React from "react";

function TestomonialContent({ image, Content, Name, title , mode }) {
  return (
    <div className="lg:w-full lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <img
          alt="testimonial"
          className="w-20  h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={image}
        />
        <p
          style={{ color: mode === "dark" ? "white" : "" }}
          className="leading-relaxed"
        >
          {Content}
        </p>
        <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
        <h2
          style={{ color: mode === "dark" ? "#ff4162" : "" }}
          className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
        >
          {Name}
        </h2>
        <p
          style={{ color: mode === "dark" ? "white" : "" }}
          className="text-gray-500"
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default TestomonialContent;

