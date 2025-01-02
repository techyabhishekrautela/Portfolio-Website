"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronRight, Database, LineChart, Brain } from 'lucide-react'

export function HeroSection() {
  const skills = ['Python', 'Data Analysis', 'Machine Learning', 'Strategic Management', 'C++', 'Java']
  
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Data Meets Strategy,
              <br />
              Powered by Innovation
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            Transforming complex data into actionable insights and strategic solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" className="group">
              View Portfolio
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Let's Collaborate
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-[500px] h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-blue-500/20 blur-3xl absolute -inset-4" />
              <Database className="w-48 h-48 text-blue-500" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-0 left-0"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-purple-500/20 blur-3xl absolute -inset-4" />
              <LineChart className="w-32 h-32 text-purple-500" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute bottom-0 right-0"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-green-500/20 blur-3xl absolute -inset-4" />
              <Brain className="w-32 h-32 text-green-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}