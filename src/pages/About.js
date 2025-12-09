import React from "react";

export default function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>About Me</h2>
      <p>
        Hi! I'm Keisly
      </p>
      <p>
        Here are my certificates:
      </p>

        <li>
          <strong>NetworkSupportAndSecurity:</strong> {" "}
          <a
            href="https://www.credly.com/badges/66a6a44f-1156-44e0-95b8-461468aa11ba"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </li>

        <li>
          <strong>JavaScriptEssential 1:</strong> {" "}
          <a
            href="https://www.credly.com/badges/9fbe849f-aa3f-4ca8-9d78-06636b953b37"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </li>



    </div>
  );
}
