'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Contact() {
  const { t } = useI18n()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    
    const subject = `Contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    
    window.open(`mailto:cmftall@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                   <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                     {t('contact.title')}
                   </h2>
                   <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                     {t('contact.subtitle')}
                   </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('contact.quickLinks')}
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/cmftall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {t('contact.linkedinProfile')}
                  </a>
                  <a
                    href="https://www.github.com/cmftall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {t('contact.githubPortfolio')}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('contact.title')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-blue-500 text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.email')}</p>
                      <p className="text-muted-foreground">cmftall@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-green-500 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.location')}</p>
                      <p className="text-muted-foreground">Paris, France & Montreal, Canada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-purple-500 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.phone')}</p>
                      <p className="text-muted-foreground">+33 7 67 07 01 79</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">
                    {t('contact.message')}
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition-colors resize-none"
                        placeholder={t('contact.messagePlaceholder')}
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium rounded-lg transition-colors duration-200"
                      >
                        {t('contact.sendMessage')}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}