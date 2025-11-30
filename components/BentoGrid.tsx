"use client";

import { cn } from "@/lib/utils"; // We will create this utility next
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-gray-900 border border-gray-800 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Link href={link} className="h-full flex flex-col">
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4">
          {icon}
          <div className="font-heading font-bold text-white mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-gray-400 text-xs">
            {description}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};