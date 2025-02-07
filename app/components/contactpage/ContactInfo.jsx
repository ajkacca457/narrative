import React from "react";

const contactCardsData = [
  {
    id: 1,
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.9996 40.3V47.8C53.0024 48.4963 52.8598 49.1854 52.5809 49.8234C52.3019 50.4613 51.8928 51.034 51.3798 51.5047C50.8667 51.9754 50.261 52.3337 49.6015 52.5568C48.9419 52.7798 48.243 52.8627 47.5496 52.8C39.8567 51.9641 32.4671 49.3354 25.9746 45.125C19.9342 41.2867 14.8129 36.1654 10.9746 30.125C6.74953 23.603 4.1202 16.1775 3.29959 8.45C3.23711 7.75867 3.31928 7.0619 3.54084 6.40406C3.7624 5.74622 4.11852 5.14172 4.5865 4.62905C5.05449 4.11638 5.6241 3.70677 6.25907 3.4263C6.89403 3.14583 7.58044 3.00065 8.27459 3H15.7746C16.9879 2.98806 18.1641 3.41769 19.084 4.20883C20.0039 4.99997 20.6048 6.09861 20.7746 7.3C21.0911 9.70016 21.6782 12.0568 22.5246 14.325C22.8609 15.2198 22.9337 16.1923 22.7344 17.1272C22.535 18.0621 22.0717 18.9203 21.3996 19.6L18.2246 22.775C21.7835 29.0339 26.9657 34.2161 33.2246 37.775L36.3996 34.6C37.0793 33.9278 37.9375 33.4646 38.8724 33.2652C39.8073 33.0658 40.7798 33.1386 41.6746 33.475C43.9428 34.3214 46.2994 34.9084 48.6996 35.225C49.914 35.3963 51.0231 36.008 51.8159 36.9437C52.6088 37.8795 53.03 39.0739 52.9996 40.3Z"
          stroke="#00FFFF"
          strokeWidth="6"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Phone Number",
    description: "598.843.4834 x1755",
  },
  {
    id: 2,
    icon: (
      <svg
        width="52"
        height="60"
        viewBox="0 0 52 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.5 25C48.5 42.5 26 57.5 26 57.5C26 57.5 3.5 42.5 3.5 25C3.5 19.0326 5.87053 13.3097 10.0901 9.0901C14.3097 4.87053 20.0326 2.5 26 2.5C31.9674 2.5 37.6903 4.87053 41.9099 9.0901C46.1295 13.3097 48.5 19.0326 48.5 25Z"
          stroke="#00FFFF"
          strokeWidth="6"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26 32.5C30.1421 32.5 33.5 29.1421 33.5 25C33.5 20.8579 30.1421 17.5 26 17.5C21.8579 17.5 18.5 20.8579 18.5 25C18.5 29.1421 21.8579 32.5 26 32.5Z"
          stroke="#00FFFF"
          strokeWidth="6"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Our Location",
    description: "Location detail",
  },
  {
    id: 3,
    icon: (
      <svg
        width="57"
        height="47"
        viewBox="0 0 57 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.88574 3.50269H48.8857C51.6357 3.50269 53.8857 5.75269 53.8857 8.50269V38.5027C53.8857 41.2527 51.6357 43.5027 48.8857 43.5027H8.88574C6.13574 43.5027 3.88574 41.2527 3.88574 38.5027V8.50269C3.88574 5.75269 6.13574 3.50269 8.88574 3.50269Z"
          stroke="#00FFFF"
          strokeWidth="6"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53.8857 8.50269L28.8857 26.0027L3.88574 8.50269"
          stroke="#00FFFF"
          strokeWidth="6"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Our Email",
    description: "admin@pagebuzz.co",
  },
];

const ContactInfo = () => {
  return (
    <div className="w-full contact-cards-element h-auto pb-[20vh]">
      <div className="contact-cards-container w-3/5 mx-auto">
        <div className="grid grid-cols-3 gap-6 mt-12">
          {contactCardsData.map((card) => (
            <div key={card.id} className="contact-card text-center">
              <div className="contact-card-icon mx-auto w-fit">{card.icon}</div>
              <h3 className="text-white text-[28px] font-semibold mt-4 contact-card-title">
                {card.title}
              </h3>
              <p className="text-[#A7A7A7] mt-4 text-[16px] contact-card-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
