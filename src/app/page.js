"use client";
import { useState } from "react";
import Image from "next/image";
// import loginData from "../../public/data.json";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(username, password);

  let submit = () => {
    if (!username && !password) {
      exit;
    } else if (username == "muku" && password == "123") {
      // alert("verified");
      // window.location.href('www.google.com')
    } else {
      alert("invalid");
    }
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="container  mx-auto flex justify-between px-60 gap-9 py-36 ">
          <div className="pt-10 w-1/2">
            <Image
              className="relative -left-6 "
              src="/facebook.svg"
              width={300}
              height={200}
              alt="logo"
            />
            <p className="font-normal text-2xl">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          <div className="w-2/5">
            <div className="border-2 bg-white shadow-lg p-10 px-7 rounded-xl ">
              <form>
                <input
                  className=""
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Email or phone number"
                />
                <input
                  className=""
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <input
                  className="py-2 px-20 w-full font-medium text-lg bg-blue-600 text-white rounded-md"
                  type="submit"
                  value="Log in"
                  onClick={submit}
                />
              </form>
              <a
                href="#"
                className="block text-center text-sm text-blue-600 my-3"
              >
                Forgotten password?
              </a>
              <hr className="mb-7"></hr>
              <div className="text-center">
                <a
                  href="#"
                  className=" py-4 px-5 font-medium text-base bg-green-500 text-white rounded-md"
                >
                  Create new account
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm mt-4 text-center">
                <a href="#" className="font-bold  ">
                  {" "}
                  Create a page
                </a>{" "}
                for celebrity, brand or bussiness{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container bg-white mx-auto py-10 px-60">
          <ul className="flex gap-3 text-xs font-extralight text-gray-600">
            <li>
              <a className="hover:underline" href="#">
                English
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                हिन्दी
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                ਪੰਜਾਬੀ
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                اردو
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                ગુજરાતી
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                বাংলা
              </a>
            </li>
          </ul>
          <hr className="my-2"></hr>
          <ul className="flex gap-3 text-xs font-extralight text-gray-600">
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Sign Up
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Log in
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Messenger
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Facebook Lite
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Video
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Places
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Games
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Marketplace
              </a>
            </li>
            <li>
              <a className=" hover:underline " href="#">
                {" "}
                Meta Pay
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
