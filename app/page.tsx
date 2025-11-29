'use client';

import Container from '@/components/ui/container';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Test Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-background-secondary to-background-secondary">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <p className="text-sm font-medium tracking-wider text-foreground-secondary uppercase mb-6">
                Kayky Vieira
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="font-display text-display-lg font-bold tracking-tight mb-8">
                Transformo produtos complexos em experiências{' '}
                <span className="text-gradient">simples e fluidas</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto mb-12">
                Tech Lead & Front-end Architect. Lidero times, desenho arquitetura
                e trago clareza para sistemas que não podem falhar.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="primary">Ver Projetos</Button>
                <Button variant="outline">Entrar em Contato</Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Test Components Section */}
      <section className="section-spacing bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-display-md font-display font-bold mb-12 text-center">
              Componentes Base
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScaleIn delay={0.2}>
              <Card hover>
                <h3 className="text-2xl font-bold mb-2">Card 1</h3>
                <p className="text-foreground-secondary">
                  Componente de card com hover effect
                </p>
              </Card>
            </ScaleIn>

            <ScaleIn delay={0.4}>
              <Card hover>
                <h3 className="text-2xl font-bold mb-2">Card 2</h3>
                <p className="text-foreground-secondary">
                  Animação de scale in com delay
                </p>
              </Card>
            </ScaleIn>

            <ScaleIn delay={0.6}>
              <Card hover>
                <h3 className="text-2xl font-bold mb-2">Card 3</h3>
                <p className="text-foreground-secondary">
                  Design tokens aplicados
                </p>
              </Card>
            </ScaleIn>
          </div>
        </Container>
      </section>

      {/* Test Typography Section */}
      <section className="section-spacing bg-background-secondary">
        <Container>
          <FadeIn>
            <h2 className="text-display-sm font-display font-bold mb-8">
              Tipografia
            </h2>
            <div className="space-y-4">
              <p className="text-display-lg font-display">Display Large</p>
              <p className="text-display-md font-display">Display Medium</p>
              <p className="text-display-sm font-display">Display Small</p>
              <p className="text-2xl">Heading 2XL</p>
              <p className="text-xl">Heading XL</p>
              <p className="text-lg">Body Large</p>
              <p className="text-base">Body Regular</p>
              <p className="text-sm">Body Small</p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
