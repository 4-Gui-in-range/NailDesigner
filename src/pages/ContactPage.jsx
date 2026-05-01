
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua Felipe Miguel, 787', 'Serrania, Minas Gerais - MG']
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(35) 99705-8514']
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['nicollyfontesdias@gmail.com']
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Durante a semana: Depois das 17:00', 'Sábado e Domingo: Depois das 14:00']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Beleza em cada detalhe</title>
        <meta name="description" content="Entre em contato conosco para agendar seu horário. Atendimento personalizado de nail design em São Paulo." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-foreground mb-6">Entre em Contato</h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Estarei pronta para atender você. Agende seu horário ou tire suas dúvidas através dos meus canais de contato.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12">

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Informações de Contato</h2>
                    <p className="text-foreground/70 leading-relaxed mb-8">
                      Escolha a forma mais conveniente para entrar em contato. Estarei sempre disponível para atender você da melhor forma possível.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground/70">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
