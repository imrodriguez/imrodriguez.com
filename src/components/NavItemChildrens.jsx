import { useState } from "react";

export default function NavItemChildrens({ children, value }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p onClick={() => setOpen(!open)}>{value}</p>
      {open && children}
    </>
  );
}
