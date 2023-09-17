import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users",
        { username, secret },
        { headers: { "Private-key": "3b4f130a-0109-42e2-aeeb-5e95227b0a51" } }
      )
      .then((r) => router.push("/chats"));
  }

  return (
    <div className="background-auth">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">BBCHAT</div>

          <div className="input-container">
            <input
              placeholder="Username"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
