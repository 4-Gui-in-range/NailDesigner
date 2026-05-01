
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Sobre - Beleza em cada detalhe</title>
        <meta name="description" content="Conheça nossa história e filosofia de trabalho. Nail design profissional com foco em qualidade e atendimento personalizado." />
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
                <h1 className="text-foreground mb-6">Sobre mim</h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Transformando unhas em obras de arte, com dedicação, técnica e muito amor pelo que faço.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-foreground mb-6">Minha História</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  O que começou como uma paixão por nail art se transformou em um compromisso com a excelência. Cada cliente que passa por aqui não é apenas mais um atendimento, mas uma oportunidade de criar algo único e especial.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Acredito que a beleza está nos detalhes. Por isso, cada unha recebe atenção individual, cada design é pensado especialmente para você, e cada técnica é aplicada com precisão profissional.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Minha missão vai além de criar unhas bonitas. Quero que você saia daqui se sentindo mais confiante, mais você mesma. Porque quando você se sente bem com os pequenos detalhes, tudo muda.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-foreground mb-4">Meus Valores</h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Princípios que guiam cada trabalho que faço.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: 'Excelência',
                    description: 'Busco a perfeição em cada detalhe, utilizando as melhores técnicas e produtos do mercado.'
                  },
                  {
                    icon: Heart,
                    title: 'Cuidado',
                    description: 'Trato cada cliente com atenção especial, priorizando a saúde e beleza das suas unhas.'
                  },
                  {
                    icon: Users,
                    title: 'Conexão',
                    description: 'Crio relacionamentos verdadeiros, entendendo o estilo e necessidades de cada pessoa.'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 luxury-shadow hover:luxury-shadow-hover transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
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

export default AboutPage;
