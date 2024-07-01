import Image from "next/image";
import type { Metadata } from "next";
import Education from "./components/education";
import Projects from "./components/projects";
import Inprogress from "./components/inprogress";
import Skills from "./components/skills";
import Social from "./components/social";
import Avatar from "../../assets/sun.jpg";

const Page = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">
            Samir <span className="text-primary">Niroula</span>
          </h1>
          <p>
            Software Engineer | <span className="font-bold">Student</span>{" "}
            <span className="px-2 py-1 text-xs rounded-md text-primary bg-primary/10">
              <span>NEW</span>
            </span>
          </p>
          <p>Namaskar!</p>
          <p className="text-justify">
            I'm Samir Niroula, an undergraduate computer science student from
            Jhapa. I have a passion for developing web applications and learning
            new technologies. Currently, I'm seeking an internship to further
            develop my skills and gain experience in software engineering.
          </p>
        </div>
        <Image
          src={Avatar}
          alt="Samir Niroula"
          className="object-cover w-auto h-32 md:w-32 md:h-auto grayscale rounded-md"
          width={300}
          height={300}
          placeholder="blur"
        />
      </div>
      <div className="flex gap-2">
        <div
          className="px-2 text-sm rounded-md text-primary bg-primary/10"
          aria-label="DoB: 2005AD"
        >
          2005 AD
        </div>
        <div
          className="px-2 text-sm rounded-md text-primary bg-primary/10"
          aria-label="Blood group: A+VE"
        >
          A+VE
        </div>
        <div
          className="px-2 text-sm rounded-md text-primary bg-primary/10"
          aria-label="Height: 5 feet 11 inches"
        >
          <span>5'11</span>
        </div>
      </div>

      <Education />

      <Projects />

      <Inprogress />

      <Skills />

      <Social />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">Contact</h2>
        <ul className="list-inside">
          <li>
            <span>{"email: "}</span>
            <a
              href="mailto:mail@samirn.com.np"
              className="italic underline text-primary"
            >
              mail@samirn.com.np
            </a>
          </li>
          <li>
            <span>{"full website: "}</span>
            <a
              href="https://samirn.com.np"
              target="_blank"
              className="italic underline text-primary"
            >
             samirn.com.np
            </a>
          </li>
        </ul>
      </div>

      <p className="text-xs">
        {"Samir Niroula " + new Date().getFullYear()},{" "}
        <a
          href="https://github.com/bhaskarrijal/bhaskarrijal-min"
          target="_blank"
          className="italic underline text-primary"
        >
          edit this site
        </a>
      </p>
    </div>
  );
};

export default Page;
