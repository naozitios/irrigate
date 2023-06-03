"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";
import quoteImage from "../../../images/quotes.jpg";

const products = [
  {
    id: 1,
    name: "Secular quotes",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1685689238460-fdd76e602962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    imageAlt: "Front of men's Basic Tee in black."
  },
  {
    id: 2,
    name: "Bible quotes",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1684020171241-3092315f2840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    imageAlt: "Front of men's Basic Tee in black."
  },
  {
    id: 2,
    name: "All quotes",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1508972036778-18166e320345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt: "Front of men's Basic Tee in black."
  },
  // More products...
];

export default function Page() {
  return (
    <div className="h-screen w-screen bg-white">
        
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Pick your river
        </h2>
      </div>
      <div className="flex justify-center">
        {products.map((product) => (
          <div key={product.id} className="group relative p-4 m-12">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                style={{ width: "25em", height: "25em" }}
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                  }}
                >
                    <h1 className="font-bold white sm:text-6xl">
                    {product.name}
                    </h1>
                  
                </h2>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
