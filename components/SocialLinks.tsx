"use client";

import { Github, Facebook, Linkedin, Mail } from "lucide-react";
import { content } from "@/data/content";

export default function SocialLinks() {
  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: content.contact.social.github,
      hoverColor: "hover:bg-gray-800 dark:hover:bg-gray-900",
      iconColor: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: content.contact.social.linkedin,
      hoverColor: "hover:bg-blue-700",
      iconColor: "hover:text-white",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: content.contact.social.facebook,
      hoverColor: "hover:bg-blue-600",
      iconColor: "hover:text-white",
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${content.contact.email}`,
      hoverColor: "hover:bg-red-500",
      iconColor: "hover:text-white",
    },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socials.map((social, idx) => {
        const Icon = social.icon;
        return (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full transition transform hover:scale-110 ${social.hoverColor} ${social.iconColor}`}
            aria-label={social.label}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
