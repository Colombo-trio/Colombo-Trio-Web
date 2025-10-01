import React from "react";

const Contact = ({ theme, setTheme }) => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col theme-bg theme-text group/design-root overflow-x-hidden pt-12"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="tracking-light text-[32px] font-bold leading-tight theme-text">
                  Get in Touch
                </p>
                <p className="text-sm font-normal leading-normal theme-text-secondary">
                  We're here to help. Reach out to us with any questions or
                  inquiries.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 theme-text">
              Contact Information
            </h3>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              {[
                { label: "Email", value: "colombotrio@gmail.com" },
                { label: "Phone", value: "+94 71 303 1383" },
                // {
                //   label: "Address",
                //   value: "123 Innovation Drive, Tech City, CA 90210",
                // },
              ].map((item, index) => (
                <div
                  key={index}
                  className="col-span-2 grid grid-cols-subgrid border-t theme-border py-5"
                >
                  <p className="text-sm font-normal leading-normal theme-text-secondary">
                    {item.label}
                  </p>
                  <p className="text-sm font-normal leading-normal theme-text">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Follow Us */}
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 theme-text">
              Inquiries
            </h3>
            {/* <div className="@container">
              <div className="gap-2 px-4 flex flex-wrap justify-start">
                {[
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                      </svg>
                    ),
                  },
                  {
                    name: "GitHub",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                      </svg>
                    ),
                  },
                  {
                    name: "YouTube",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>
                      </svg>
                    ),
                  },
                ].map((social, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 py-2.5 text-center w-20 theme-bg-card rounded-lg"
                  >
                    <div className="rounded-full p-2.5 theme-bg-secondary">
                      <div className="theme-text">{social.icon}</div>
                    </div>
                    <p className="text-sm font-medium leading-normal theme-text">
                      {social.name}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Contact Form */}
            {[
              { placeholder: "Your Name", type: "input" },
              { placeholder: "Your Email", type: "input" },
              { placeholder: "Your Message", type: "textarea" },
            ].map((field, index) => (
              <div
                key={index}
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
              >
                <label className="flex flex-col min-w-40 flex-1">
                  {field.type === "textarea" ? (
                    <textarea
                      placeholder={field.placeholder}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border-none focus:border-none min-h-36 p-4 text-base font-normal leading-normal theme-bg-secondary theme-text placeholder-theme-text-secondary"
                    ></textarea>
                  ) : (
                    <input
                      placeholder={field.placeholder}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border-none focus:border-none h-14 p-4 text-base font-normal leading-normal theme-bg-secondary theme-text placeholder-theme-text-secondary"
                    />
                  )}
                </label>
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em] theme-button-primary"
                onMouseOver={(e) => (e.target.style.opacity = "0.9")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                <span className="truncate">Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
