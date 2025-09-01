"use client"

import React from "react"
import {
  Target,
  Eye,
  Users,
  Heart,
  Zap,
  Building,
  Award,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";


const page = ()=>{


  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=500/https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/e2b93451-eaf0-4e58-b336-693e905b7e53.png')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sendly
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Discover the core components that define Money Transfer Excellence.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-blue-400 font-semibold">
              INNOVATION • EXCELLENCE • IMPACT
            </span>
            <div className="w-12 h-0.5 bg-blue-400"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default page