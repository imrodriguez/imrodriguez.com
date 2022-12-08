import { useState } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../helpers/classNames";

export const Contact = ({ content }) => {
  const [agreed, setAgreed] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append("name", e.target.elements["first-name"].value);
      formdata.append("lastname", e.target.elements["last-name"].value);
      formdata.append("sender", e.target.elements["email"].value);
      formdata.append("message", e.target.elements["message"].value);
      formdata.append("url", window.location.href);

      const requestOptions = {
        method: "POST",
        body: formdata,
      };

      const response = await fetch(
        "https://formspree.io/f/maykrdke",
        requestOptions
      );

      //if (response.status === 200) {
      window.location.href = "/thankyou";
      //} else {
      //throw new Error("Something went wrong");
      //}
    } catch (err) {
      console.log(err);
      window.location.href = "/thankyou";
    }
  };

  return (
    <div
      className="overflow-hidden bg-violet py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
      id="contact"
    >
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-orange"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-orange"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-orange sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">
            {content.description}
          </p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            onSubmit={onSubmit}
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-white"
              >
                {content.fields.firstname}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:border-orange focus:ring-orange"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-white"
              >
                {content.fields.lastname}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:border-orange focus:ring-orange"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                {content.fields.email}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:border-orange focus:ring-orange"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                {content.fields.message}
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:border-orange focus:ring-orange"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-orange" : "bg-gray-200",
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-white">{content.privacy}</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={!agreed}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange disabled:bg-slate-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {content.action}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
