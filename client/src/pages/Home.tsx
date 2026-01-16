import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Leaf, Heart, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useSnacks } from "@/hooks/use-content";

export default function Home() {
  const { data: snacks, isLoading: loadingSnacks } = useSnacks();

  const handleContact = () => {
    window.location.href = "mailto:contact@cleanfuelvending.com";
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract shapes background */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-accent/10 rounded-r-full blur-3xl opacity-60" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Healthy Vending Solutions
              </div>
              <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] mb-6 text-foreground">
                Fuel Your Body <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  The Clean Way
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Reimagining vending machines with fresh, nutritious, and delicious options for the modern lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="nature" onClick={handleContact}>
                  Get in Touch
                </Button>
                <ScrollLink to="snacks" smooth={true} duration={500}>
                  <Button size="xl" variant="outline" className="w-full sm:w-auto border-2 hover:bg-secondary/50">
                    See Our Menu
                  </Button>
                </ScrollLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Image Container with Blob Shape */}
              <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20">
                 {/* 
                    Using Unsplash image for Hero concept: Fresh healthy food 
                    https://unsplash.com/photos/bowl-of-vegetable-salad-IybPJ47gfa8
                 */}
                <img
                  src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop"
                  alt="Fresh healthy food bowl"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <Leaf size={20} />
                  </div>
                  <span className="font-bold text-foreground">100% Fresh</span>
                </div>
                <p className="text-sm text-muted-foreground">Locally sourced ingredients daily.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                    <Heart size={20} />
                  </div>
                  <span className="font-bold text-foreground">Nutritious</span>
                </div>
                <p className="text-sm text-muted-foreground">Curated for balanced energy.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section id="mission" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Mission"
            subtitle="We believe convenience shouldn't come at the cost of your health. We're here to change the way you snack on the go."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Zap,
                title: "Energy for Life",
                desc: "Fuel your busy day with snacks that provide sustained energy, not sugar crashes.",
              },
              {
                icon: Leaf,
                title: "Clean Ingredients",
                desc: "No artificial preservatives, colors, or flavors. Just real food doing real good.",
              },
              {
                icon: Heart,
                title: "Health First",
                desc: "We curate options that support heart health, immunity, and overall well-being.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SNACKS SECTION */}
      <section id="snacks" className="py-24 relative overflow-hidden">
         {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Curated Selection"
            subtitle="Explore our range of guilt-free treats and energizing bites."
          />

          {loadingSnacks ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-muted animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {snacks?.map((snack, idx) => (
                <motion.div
                  key={snack.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 group"
                >
                  <div className="h-48 overflow-hidden relative bg-secondary/20">
                    <img
                      src={snack.imageUrl || "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&auto=format&fit=crop&q=60"}
                      alt={snack.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      {snack.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{snack.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{snack.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Want to see the full nutrition facts?</p>
            <Button variant="outline" onClick={handleContact} className="gap-2">
              Request Full Catalog <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 p-2 rounded-xl">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Clean Fuel</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-lg font-medium mb-2">Ready to upgrade your snacking?</p>
              <a 
                href="mailto:contact@cleanfuelvending.com" 
                className="text-primary hover:text-accent transition-colors font-bold text-xl block hover:underline"
              >
                contact@cleanfuelvending.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Clean Fuel Vending. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
