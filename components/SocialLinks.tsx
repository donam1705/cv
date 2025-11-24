"use client";

import { Github, Twitter, Mail, Facebook } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "#",
    hoverColor: "hover:bg-gray-800 dark:hover:bg-gray-900",
    iconColor: "hover:text-white",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    hoverColor: "hover:bg-blue-400",
    iconColor: "hover:text-white",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
    hoverColor: "hover:bg-blue-600",
    iconColor: "hover:text-white",
  },
  {
    icon: Mail,
    label: "Email",
    href: "#",
    hoverColor: "hover:bg-red-500",
    iconColor: "hover:text-white",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      {socials.map((social, idx) => {
        const Icon = social.icon;
        return (
          <a
            key={idx}
            href={social.href}
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
