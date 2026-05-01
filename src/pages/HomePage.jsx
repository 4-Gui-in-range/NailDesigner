import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CtaBackdropMarquee from '@/components/CtaBackdropMarquee.jsx';
import HeroSideMarquee from '@/components/HeroSideMarquee.jsx';
import { MODEL_HERO_IMAGE } from '@/data/modelPhotos.js';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Beleza em cada detalhe - Nail Design de Luxo</title>
        <meta name="description" content="Transforme suas unhas em obras de arte com técnicas profissionais de nail design. Autoestima e confiança em cada detalhe." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Foto em “janela” limitada (max largura/altura) + fundo sólido — evita upscale excessivo do arquivo. */}
          <div className="absolute inset-0 bg-foreground">
            <div className="absolute inset-0 flex items-center justify-center">
              <aside className="relative hidden h-[min(100dvh,920px)] min-h-0 min-w-0 max-w-[360px] flex-1 overflow-hidden min-[1480px]:block">
                <HeroSideMarquee reverse />
              </aside>
              <div className="relative mx-auto h-[min(100dvh,920px)] w-full max-w-[min(100vw,1240px)] shrink-0">
                <img
                  src={MODEL_HERO_IMAGE}
                  alt="Profissional de nail design segurando pincel com olhar confiante"
                  className="absolute inset-0 h-full w-full object-cover object-[center_22%] md:object-[28%_center]"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <aside className="relative hidden h-[min(100dvh,920px)] min-h-0 min-w-0 max-w-[360px] flex-1 overflow-hidden min-[1480px]:block">
                <HeroSideMarquee />
              </aside>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="mb-6">
                <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary bg-primary/10 px-4 py-2 rounded-full">
                  NAIL DESIGN
                </span>
              </div>
              <h1 className="text-background mb-6">
                Beleza em cada detalhe
              </h1>
              <p className="text-xl md:text-2xl text-background/90 leading-relaxed mb-8 max-w-xl">
                Transforme suas unhas em obras de arte. Autoestima e confiança começam nos pequenos detalhes que fazem toda a diferença.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6 rounded-xl font-semibold">
                  Agendar Agora
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-foreground mb-4">Por que escolher meu trabalho?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Cada unha é tratada com dedicação e técnica profissional para resultados que superam expectativas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: 'Técnicas Avançadas',
                  description: 'Utilizo as técnicas mais modernas de nail design para resultados impecáveis e duradouros.'
                },
                {
                  icon: Heart,
                  title: 'Atendimento Personalizado',
                  description: 'Cada cliente recebe atenção exclusiva, com designs criados especialmente para seu estilo.'
                },
                {
                  icon: Star,
                  title: 'Produtos Premium',
                  description: 'Trabalho apenas com produtos de alta qualidade que garantem beleza e saúde das unhas.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 luxury-shadow hover:luxury-shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative min-h-[min(44dvh,300px)] overflow-hidden py-24 bg-primary sm:min-h-0">
          <CtaBackdropMarquee />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary-foreground mb-6">
                Pronta para transformar suas unhas?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Agende seu horário e descubra como pequenos detalhes podem fazer toda a diferença na sua autoestima.
              </p>
              <Link to="/contact">
                <Button className="bg-background text-foreground hover:bg-background/90 transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6 rounded-xl font-semibold">
                  Entrar em Contato
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
