import {
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import Link from "next/link";

export const Footer = () => {
  const links = [
    {
      title: "Products",
      items: [
        { name: "Templates", href: "#" },
        { name: "Components", href: "#" },
        { name: "Icons", href: "#" },
        { name: "UI Kits", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Support", href: "#" },
        { name: "API Reference", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-zinc-50 px-4 pt-15 sm:px-6 md:px-8 lg:px-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 pb-12 lg:flex-row">
          <div className="max-w-full flex-1 lg:max-w-100">
            <div className="mb-6 text-zinc-900 dark:text-zinc-100">
              <svg
                width="27"
                height="29"
                viewBox="0 0 27 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.25 4.11 6 3.366 6-3.367m-12 20.176v-6.721l-6-3.367m24 0-6 3.367v6.72M1.61 7.67l11.64 6.54 11.64-6.54M13.25 27.25V14.197m12 5.18V9.017c0-.454-.124-.9-.358-1.293a2.63 2.63 0 0 0-.975-.947l-9.333-5.18a2.73 2.73 0 0 0-2.667 0l-9.333 5.18a2.63 2.63 0 0 0-.976.947 2.54 2.54 0 0 0-.358 1.293v10.36c0 .454.124.9.358 1.293s.57.72.976.947l9.333 5.18a2.73 2.73 0 0 0 2.667 0l9.333-5.18a2.63 2.63 0 0 0 .975-.947 2.53 2.53 0 0 0 .358-1.293"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mb-7 max-w-80 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              FOSTI is an independent non-profit organization operated by
              students of the Faculty of Communication and Informatics
              Universitas Muhammadiyah Surakarta focused on science and
              technology development.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <FaXTwitter size={16} />
              </Link>

              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <FaLinkedinIn size={16} />
              </Link>

              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <FaYoutube size={16} />
              </Link>

              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>

          <div className="flex w-full max-w-3xl flex-1 flex-wrap justify-between gap-8 sm:flex-nowrap">
            {links.map((link, index) => (
              <div key={index}>
                <h3 className="mb-6 text-base font-medium text-zinc-800 dark:text-zinc-100">
                  {link.title}
                </h3>

                <ul className="flex list-none flex-col gap-3">
                  {link.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex max-w-6xl flex-col gap-6 py-9 md:flex-row md:gap-16">
          <div className="flex flex-1 items-start gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              <IoLocationOutline />
            </div>

            <div>
              <h4 className="mb-0.5 text-base font-medium text-zinc-800 dark:text-zinc-100">
                Address
              </h4>

              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                548 Market Street, Suite 410
                <br />
                San Francisco, United States
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-start gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              <FaPhone />
            </div>

            <div>
              <h4 className="mb-0.5 text-base font-medium text-zinc-800 dark:text-zinc-100">
                Phone
              </h4>

              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                +1 (55) 123-4567
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-start gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              <HiOutlineMailOpen />
            </div>

            <div>
              <h4 className="mb-0.5 text-base font-medium text-zinc-800 dark:text-zinc-100">
                Email
              </h4>

              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                contact@prebuiltui.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-300 py-4 md:flex-row dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} PrebuiltUI. All Right Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-9">
            <Link
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              About Us
            </Link>

            <Link
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
