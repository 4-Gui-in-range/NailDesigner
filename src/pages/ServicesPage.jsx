
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Palette } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  // Corrigido: Adicionei um terceiro serviço à lista, pois antes estava tentando acessar services[2] mesmo não existindo.
  const services = [
    {
      icon: Sparkles,
      title: 'Alongamento',
      description: 'Alongamento de unhas com técnicas profissionais, utilizando gel ou fibra de vidro para resultados naturais e resistentes. Perfeito para quem deseja unhas longas e elegantes.'
    },
    {
      icon: Palette,
      title: 'Nail Art',
      description: 'Designs personalizados e exclusivos criados especialmente para você. De minimalistas a elaborados, cada arte é única e reflete seu estilo pessoal com perfeição.'
    },
    {
      icon: Sparkles,
      title: 'Manicure & Pedicure',
      description: 'Cuidado completo das unhas das mãos e dos pés, com acabamentos perfeitos, esmaltação duradoura e atenção especial à saúde das suas unhas.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Beleza em cada detalhe</title>
        <meta name="description" content="Conheça meus serviços de nail design: alongamento, nail art personalizada com técnicas profissionais." />
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
                <h1 className="text-foreground mb-6">Meus Serviços</h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Ofereço uma gama completa de serviços de nail design com técnicas profissionais e produtos premium para garantir resultados excepcionais.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Services Grid - 2+1 Layout */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <ServiceCard {...services[0]} index={0} />
                <ServiceCard {...services[1]} index={1} />
              </div>
              <div className="max-w-2xl mx-auto">
                <ServiceCard {...services[2]} index={2} />
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-foreground mb-4">Como funciona</h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Processo cuidadoso para garantir que cada detalhe seja perfeito.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Consulta', description: 'Conversamos sobre suas preferências e estilo' },
                  { step: '02', title: 'Preparação', description: 'Cuidado profissional com cutículas e unhas' },
                  { step: '03', title: 'Aplicação', description: 'Técnicas avançadas para resultado impecável' },
                  { step: '04', title: 'Finalização', description: 'Acabamento perfeito e orientações de cuidado' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-6xl font-bold text-primary/20 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
