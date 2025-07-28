import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-600 text-sm bg-gray-100">
      &copy; {new Date().getFullYear()} NGO. All rights reserved.
    </footer>
  );
}