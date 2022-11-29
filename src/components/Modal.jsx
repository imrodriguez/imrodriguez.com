import { signal } from "@preact/signals";

const contactModal = signal(false);

export default function Modal({ children }) {
  return (
    <>
      <button
        onClick={() => {
          contactModal.value = true;
        }}
        class={`bg-violet hover:bg-violet-light py-2 px-4 rounded-lg text-white font-title font-bold flex justify-center items-center gap-2`}
      >
        <img
          width={24}
          height={24}
          src={`/icons/contact.svg`}
          class="w-6"
          alt="button icon"
        />
        Contact
      </button>
      <div
        className={`${
          contactModal.value ? "fixed" : "hidden"
        } top-0 left-0 right-0 bottom-0 grid place-content-center h-screen w-screen z-40`}
      >
        <div className="bg-slate-100 rounded-md min-w-[90vw] md:min-w-[55vw] drop-shadow-lg z-50">
          <div className="flex justify-end pt-4 px-4">
            <svg
              onClick={() => (contactModal.value = false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="p-8 pt-0">{children}</div>
        </div>
      </div>
    </>
  );
}
