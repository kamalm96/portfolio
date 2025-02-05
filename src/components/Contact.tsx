"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCopy,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";
import { data } from "../data/data";
import React from "react";
// import logo from "../../public/logo.png";

const socialIcons = {
  Github: <FaGithub className="w-5 h-5" />,
  Linkedin: <FaLinkedin className="w-5 h-5" />,
  Twitter: <FaTwitter className="w-5 h-5" />,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const contact = data.contact;

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-24 pb-16 bg-[#7510F7] text-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mb-20">
          <CardContent className="p-10">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-[#7510F7] p-3 rounded-full shadow-md">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-xl font-medium text-[#1E1F4B]">
                    {contact.email}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-[#7510F7] border-[#7510F7] hover:bg-[#7510F7] hover:text-white transition-colors duration-300"
                  onClick={copyEmail}
                >
                  {copied ? "Copied!" : <FaCopy className="w-5 h-5" />}
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-[#7510F7] p-3 rounded-full shadow-md">
                  <FaPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-xl font-medium text-[#1E1F4B]">
                    {contact.phone}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Content */}
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={48}
              height={48}
              className="mx-auto"
            />
          </div>
          <p className="text-2xl mb-12">
            Living, learning, & leveling up one day at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            {contact.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors duration-300 flex items-center space-x-2"
              >
                {socialIcons[social.name]}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          <div className="text-white/80 space-y-2">
            <p>Handcrafted by me © twentytwentyfour</p>
          </div>
        </div>
      </div>
    </section>
  );
}
