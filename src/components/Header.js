import React from "react";
import { useState } from "react";
import TitoLogo from "../images/tito-logo.png";
import { NavLink } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { isConnected, address } = useAccount();
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();

  return (
    <>
      <div class="">
        <header style={{ backgroundcolor: "transparent" }}>
          <nav class="mx-auto flex items-center justify-between gap-x-6 p-6 max-w-screen lg:px-8">
            <div class="flex">
              <a
                class="-m-1.5 p-1.5 text-white flex justify-center items-center "
                href="/"
              >
                <span class="sr-only">Your Company</span>
                <img className="w-16 h-16" src={TitoLogo} alt="Tito" />
              </a>
            </div>
            <div class="hidden gap-x-6 lg:flex xl:gap-x-12">
              <a
                target=""
                class="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="/#finance"
              >
                About
              </a>
              <a
                target="_blank"
                class="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="https://whitepaper.borroe.finance/introduction/borroe-finance"
              >
                Whitepaper
              </a>
              <a
                target=""
                class="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="/#Tito"
              >
                Tito
              </a>
              <a
                target="_blank"
                class="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="https://gleam.io/4bs1I/borroe-gleam-summer-defi-giveaway"
              >
                Win 50K
              </a>
              <a
                target=""
                class="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="/howtobuy"
              >
                How to buy
              </a>
            </div>
            <div class="items-center justifybox height same and content size same, Its difficult to manage the ssection becuase images sizes is too much, if i set the images its look strechable -end hidden gap-x-4 lg:flex xl:gap-x-8">
              <NavLink
                to="/Dashboard"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {" "}
                <button class="rounded-md text-white shadow-sm bg-transparent font-bold border border-neutral-500 py-3 px-4 text-[10px] xl:py-4 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                  Dashboard
                </button>
              </NavLink>
              <button
                class="rounded-md text-white shadow-sm bg-transparent font-bold border border-neutral-500 py-3 px-4 text-[10px] xl:py-4 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                onClick={() => open()}
              >
                {isConnected
                  ? `${address.substring(0, 4)}....${address.substring(
                      address.length - 4,
                      address.length
                    )}`
                  : "Connect Wallet"}
              </button>
            </div>
            <div class="flex lg:hidden">
              <button
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span class="sr-only">Open main menu</span>
                <span class="w-fit">
                  <svg
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </nav>
          {toggle && (
            <div class="lg:hidden">
              <div class="fixed inset-y-0 right-0 z-50 w-full bg-black px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="gap-x-6 flex justify-between">
                  <a class="-m-1.5 p-1.5" href="/">
                    <span class="sr-only">Your Company</span>
                    Tito
                  </a>
                  <button
                    class="-m-2.5 rounded-md p-2.5 text-white"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <span class="sr-only">Close menu</span>
                    <span class="w-fit">
                      <svg
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                      <a
                        target=""
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="/#finance"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        About
                      </a>
                      <a
                        target="_blank"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="https://whitepaper.borroe.finance/introduction/borroe-finance"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        Whitepaper
                      </a>
                      <a
                        target=""
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="/#Tito"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        Tito
                      </a>
                      <a
                        target="_blank"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="https://gleam.io/4bs1I/borroe-gleam-summer-defi-giveaway"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        Win 50K
                      </a>
                      <a
                        target=""
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="/howtobuy"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        How to buy
                      </a>
                    </div>
                    <div class="flex flex-1 items-center gap-x-6 py-6">
                      <NavLink
                        to="/Dashboard"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        {" "}
                        <button class="rounded-md text-white shadow-sm bg-transparent font-bold border border-neutral-500 py-3 px-4 text-[10px] xl:py-4 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                          Dashboard
                        </button>
                      </NavLink>
                      <button
                        class="rounded-md shadow-sm bg-transparent font-bold border border-white py-3 px-4 text-[10px] text-white xl:py-5 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                        onClick={() => open()}
                      >
                        {isConnected
                          ? `${address.substring(0, 4)}....${address.substring(
                              address.length - 4,
                              address.length
                            )}`
                          : "Connect Wallet"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;
