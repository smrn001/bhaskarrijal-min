import React from "react";

const Social = () => {
  const social = [
    {
      name: "Github",
      link: "https://github.com/smrn001",
    },
    // {
    //     name: 'Twitter',
    //     link: 'https://twitter.com/samirniroula',
    // },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/samirniroula",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/samirn.me",
    },
    {
      name: "Facebook",
      link: "https://facebook.com/samirn.com.np",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Social</h2>
        <ul className="list-inside">
          {social.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                className="text-primary underline italic"
              >
                <span>{social.link}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Social;
