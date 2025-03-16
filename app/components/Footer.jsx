import React from "react";

const Footer = async () => {
  const res = await fetch(
    "https://narrative-10a4cba.ingress-alpha.ewp.live/wp-json/acf/v2/options"
  );
  const data = await res.json();

  const {
    phone = "01715242124",
    email = "narrative.media.bd@gmail.com",
    policy_page = [],
    social_links = [],
  } = data || {};

  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto pt-[5vh] pb-[20px] text-white">
        <div className="block md:flex md:justify-between">
          <div>
            <img src="./narrative-logo.png" alt="logo" className="mb-2" />
            <div className="flex items-center gap-x-2">
              {" "}
              <a href={`tel:${phone}`} className="flex items-center space-x-2">
                <img src="/green-arrow.png" alt="Phone Icon" />
                <h3>{phone}</h3>
              </a>{" "}
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              {" "}
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-2"
              >
                <img src="/green-arrow.png" alt="Email Icon" />
                <h3>{email}</h3>
              </a>{" "}
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <a
                href={policy_page.url}
                alt="Policy Page"
                className="flex items-center space-x-2"
                target="_blank"
              >
                <img src="/green-arrow.png" />
                <p>{policy_page.title}</p>
              </a>
            </div>
          </div>

          <div>
            <div className="my-10 md:my-0">
              {social_links.map((link, index) => (
                <a
                  href={link.link.url}
                  key={index}
                  target="_blank"
                  className="bg-[#00FFE1] transition-colors duration-300 hover:bg-[#00CCB5] text-black w-full block px-4 py-2 mt-2 rounded col-span-1"
                >
                  {link.link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div>
            <p>© 2025 Narrative. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
