'use client'

import Link from 'next/link'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export function Footer() {

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Bio */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-4">Fallou TALL</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data Architect delivering measurable ROI through proven quality frameworks and team leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">Paris & Montreal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href="mailto:cmftall@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  cmftall@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/cmftall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/cmftall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Fallou TALL. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
