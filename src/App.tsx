import React, { useState, useEffect } from 'react';
import { 
  MonitorSmartphone, 
  PenTool, 
  BarChart3, 
  CheckCircle2, 
  Users, 
  Award, 
  Target, 
  ChevronDown, 
  ChevronUp,
  Star,
  ShoppingCart,
  Lightbulb,
  ArrowRight,
  Play,
  Menu,
  X,
  Zap,
  Shield,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
              </div>
              <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>TOKOP</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Team working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
          >
            Start Your Online Store<br />With Zero Risk
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Join Tokop, the most innovative cross-border e-commerce platform. Connect directly with 2 million+ premium factories and sell to 1 billion+ buyers globally without holding any inventory.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg shadow-blue-600/30"
          >
            Start Selling Now
          </motion.button>
        </div>
      </section>

      {/* Features 3-Column */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: 'Zero Inventory Risk', desc: 'No need to buy stock upfront. Choose from 10 million+ best-selling products and only pay the factory when you make a sale.' },
              { icon: Layers, title: 'Direct from Factory', desc: 'Cut out the middlemen. We connect you directly with over 2 million premium factories, ensuring the best prices.' },
              { icon: BarChart3, title: 'Global Reach', desc: 'Access over 1 billion active buyers across 200 countries. We handle the global marketing so you can focus on growing.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Digital Marketing */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative"
            >
              {/* Abstract UI Composition Simulation */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute top-0 left-0 w-64 h-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-10 transform -rotate-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-20 bg-slate-200 rounded"></div>
                  </div>
                  <div className="h-32 bg-slate-100 rounded-lg mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-16 bg-blue-100 rounded"></div>
                    <div className="h-8 w-24 bg-slate-900 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-20 right-0 w-56 h-48 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-20">
                  <div className="flex justify-between items-end mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Play className="w-5 h-5 ml-1" /></div>
                    <div className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+4.5%</div>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-10 w-64 h-40 bg-slate-900 rounded-2xl shadow-xl p-4 z-30 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-slate-400">Total Revenue</div>
                    <div className="text-xs font-bold text-green-400 bg-green-400/20 px-2 py-1 rounded">+12.8%</div>
                  </div>
                  <div className="text-3xl font-bold">19,6k</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-4">
                <span className="w-8 h-px bg-slate-300"></span>
                INNOVATIVE DROPSHIPPING
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Revolutionizing traditional e-commerce</h2>
              <p className="text-slate-500 mb-8 text-lg">
                Traditional retail involves long supply chains and high markups. Traditional e-commerce requires heavy investment in inventory, marketing, and logistics. Tokop eliminates these barriers, making entrepreneurship accessible to everyone.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">Free registration with just your personal ID</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">Set your own profit margins freely on any product</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">Factories handle all shipping and logistics directly to buyers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {['Global Reach', 'Secure Escrow', 'Zero Risk', '2M+ Factories', '1B+ Buyers', 'Big Data', 'Fast Shipping'].map((logo, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold font-serif">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Solutions */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <h2 className="text-4xl font-bold text-slate-900 max-w-md leading-tight">Everything you need to succeed</h2>
            <p className="text-slate-500 max-w-md text-lg">
              Tokop provides a comprehensive ecosystem designed to protect buyers, empower sellers, and streamline operations for factory suppliers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Secure Transactions', desc: 'Our escrow system ensures funds are only released when the buyer is satisfied with their purchase.' },
              { icon: Target, title: 'Hassle-Free Returns', desc: 'If a customer is unsatisfied, factories handle the returns and bear the shipping costs. You lose nothing.' },
              { icon: BarChart3, title: 'Big Data Selection', desc: 'We use advanced analytics to curate 10 million global best-sellers for you to add to your store.' },
              { icon: Zap, title: 'Zero Startup Cost', desc: 'No registration fees, no monthly subscriptions. Start your entrepreneurial journey completely free.' },
              { icon: Layers, title: 'Automated Logistics', desc: 'Once an order is placed, the factory automatically receives the details and ships directly to your buyer.' },
              { icon: Users, title: 'Global Marketing', desc: 'Benefit from our massive search ad campaigns across 200 countries, driving traffic to the platform.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  Explore Details <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows Accordion */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-4">
                <span className="w-8 h-px bg-slate-300"></span>
                HOW IT WORKS
              </div>
              <h2 className="text-4xl font-bold mb-10 text-slate-900 leading-tight">A simple, secure, and profitable process</h2>
              
              <div className="space-y-4">
                <AccordionItem 
                  title="1. Setup Your Store" 
                  content="Register for free using your ID. Browse our factory supplier center and select products you want to sell. Publish them to your store and set your desired profit margin."
                  isOpen={true}
                />
                <AccordionItem 
                  title="2. Secure Order Processing" 
                  content="When a buyer orders, their payment is securely held in escrow. You pay the factory cost, and the factory ships the product directly to the buyer."
                />
                <AccordionItem 
                  title="3. Earn & Grow" 
                  content="Once the buyer receives the product and is satisfied, the transaction is complete. The funds are unfrozen, and your profit is ready to be withdrawn."
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional woman" 
                  className="w-full h-auto"
                />
                {/* Floating UI Elements */}
                <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg w-48">
                  <div className="text-xs text-slate-500 mb-1">Trusted Users</div>
                  <div className="text-3xl font-bold text-blue-600">4.5K</div>
                  <div className="flex -space-x-2 mt-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">$</div>
                  <div>
                    <div className="text-2xl font-bold">+52,4%</div>
                    <div className="text-xs text-slate-500">Yearly Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Engine */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 order-2 lg:order-1 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1bfe8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smiling woman" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-10 left-0 right-0 px-8">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold">Personalized Strategy</div>
                      <div className="text-xs text-slate-500">Weekly Dynamics</div>
                    </div>
                    <div className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      +74.6%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-4">
                <span className="w-8 h-px bg-slate-300"></span>
                EMPOWERING ENTREPRENEURS
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Built by Tokopedia Group in 2020</h2>
              <p className="text-slate-500 mb-10 text-lg">
                Our mission is to empower individuals in Southeast Asia and beyond to start their own online businesses easily. By connecting buyers directly to factories, we reduce costs and create opportunities for everyone.
              </p>
              
              <div className="flex gap-12 mb-12">
                <div>
                  <div className="text-5xl font-bold text-slate-900 mb-2">2M+</div>
                  <div className="text-sm text-slate-500">Premium Factory<br/>Suppliers</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-slate-900 mb-2">66M+</div>
                  <div className="text-sm text-slate-500">Products Added<br/>Quarterly</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-8 border-t border-slate-200">
                <div className="flex text-green-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <div className="text-slate-600">
                  Rated <strong className="text-slate-900">4.78</strong> out of 5 with <strong className="text-slate-900">1,309</strong> reviews on
                </div>
                <div className="font-bold flex items-center gap-1 text-slate-900">
                  <Star className="w-5 h-5 fill-green-500 text-green-500" /> Trustpilot
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl font-bold text-slate-900 max-w-md leading-tight">Trusted by millions globally</h2>
            <p className="text-slate-500 max-w-md text-lg">
              Join a thriving ecosystem of buyers, sellers, and suppliers working together in a secure, innovative marketplace.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {['Zapier', 'Intercom', 'Zendesk', 'Slack', 'Trello', 'Notion', 'Discord', 'Shopify', 'HubSpot', 'Firebase', 'MailChimp', 'Zoom'].map((tool, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl font-bold text-slate-400">
                  {tool[0]}
                </div>
                <span className="text-sm font-medium text-slate-700">{tool}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Join the Platform
            </button>
          </div>
        </div>
      </section>

      {/* Save Time & Stats */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="w-full lg:w-1/2">
              <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-4">
                <span className="w-8 h-px bg-slate-300"></span>
                SOLUTIONS SIMPLIFIED
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Save your time and effort with Formex</h2>
              <p className="text-slate-500 mb-10 text-lg">
                Sapien tempor sodales bibendum convallis in volutpat morbi veles fusce laoreet sapien undo neque mauris vitae habitant inceptos and ligula luctus ipsum a habitant dignissim
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Marketing integrations</h3>
                    <p className="text-slate-500">Ligula risus auctor tempus in magna risus feugiat dolores sagittis suscipit luctus tempor and purus</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Intelligence</h3>
                    <p className="text-slate-500">Risus ligula auctor tempus in magna risus feugiat dolores sagittis suscipit luctus tempor and purus</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-[120%] max-w-2xl">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-lg">Overall Progress</h4>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <div className="text-xs text-slate-500 mb-1">Total Visits</div>
                    <div className="text-xl font-bold">36,896</div>
                  </div>
                  <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                    <div className="text-xs text-blue-600 mb-1">New Visitors</div>
                    <div className="text-xl font-bold text-blue-700">14,758</div>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <div className="text-xs text-slate-500 mb-1">Visit Duration</div>
                    <div className="text-xl font-bold">1m 48s</div>
                  </div>
                </div>
                <div className="h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-end p-4 gap-2">
                  {[40, 70, 45, 90, 65, 80, 55, 100, 75, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-100 rounded-t-sm relative group">
                      <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid & Text */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden">
                <div className="bg-white p-10 text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">14,3k</div>
                  <div className="text-sm text-slate-500">Trusted Users</div>
                </div>
                <div className="bg-white p-10 text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">438</div>
                  <div className="text-sm text-slate-500">Delivered Projects</div>
                </div>
                <div className="bg-white p-10 text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">13,8k</div>
                  <div className="text-sm text-slate-500">Happy Customers</div>
                </div>
                <div className="bg-white p-10 text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">96%</div>
                  <div className="text-sm text-slate-500">Positive Feedbacks</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-4">
                <span className="w-8 h-px bg-slate-300"></span>
                DIGITAL TRANSFORMATION
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Solutions that deliver the results</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5"></div>
                  <span className="text-slate-600">Sodales dapibus libero suscipit quisque congue tempus ociis posuere blandit and tristique mollis lectus hendrerit orci litora hendrerit suscipit quaerat sapien quaere</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5"></div>
                  <span className="text-slate-600">Sodales dapibus libero suscipit quisque congue tempus ociis posuere blandit and tristique mollis lectus hendrerit</span>
                </li>
              </ul>

              <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Let's grow together <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16 max-w-2xl mx-auto">Here's what our amazing customers are saying</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <TestimonialCard 
              text="At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue egestas and suscipit lectus"
              name="Paul S. Chun"
              role="Web Developer"
            />
            <TestimonialCard 
              text="Mauris gestas magnis a sapien etiam sapien congue an augue egestas and ultrice vitae purus diam an integer congue magna egestas magna suscipit augue cubilia laoreet magna suscipit"
              name="Maria Haverman"
              role="App Developer"
            />
            <TestimonialCard 
              text="Mauris donec a magnis sapien etiam pretium a congue augue volutpat lectus aenean magna mauris lectus laoreet and ligula egestas undo suscipit lectus"
              name="David Bromberg"
              role="Web Developer"
            />
          </div>

          <div className="text-center">
            <p className="text-slate-500 mb-8">Our users love us as much as we love them</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <ReviewBadge name="Capterra" rating="4.7/5" />
              <ReviewBadge name="Trustpilot" rating="4.95/5" />
              <ReviewBadge name="Google" rating="4.24/5" />
              <ReviewBadge name="CROWD" rating="4.68/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Complex Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Man looking at screen" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-xl w-48">
                  <div className="text-xs text-slate-500 mb-1">Sales Dynamics</div>
                  <div className="text-2xl font-bold text-slate-900">$32,657</div>
                  <div className="flex items-end gap-1 mt-3 h-10">
                    {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-4">
                <span className="w-8 h-px bg-slate-300"></span>
                ONE-STOP SOLUTIONS
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Complex solutions to digital growth</h2>
              <p className="text-slate-500 mb-6 text-lg">
                Sapien tempor sodales bibendum convallis in volutpat morbi veles fusce laoreet sapien undo neque mauris vitae habitant inceptos and ligula luctus ipsum a habitant dignissim
              </p>
              <p className="text-slate-500 mb-8 text-lg">
                Sapien tempor sodales bibendum convallis in volutpat morbi veles fusce laoreet sapien undo neque mauris vitae habitant inceptos and ligula luctus ipsum a habitant dignissim
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-500">
                  Trusted by <strong className="text-slate-900">12k+</strong> Worldwide<br/>Brand & Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-4">
                <span className="w-8 h-px bg-slate-300"></span>
                QUESTIONS & ANSWERS
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Have questions? We have answers</h2>
              <p className="text-slate-500 mb-8">
                Some questions about the Formex are asked frequently. We have compiled a list of the most common questions people usually ask us!
              </p>
              <button className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-full font-medium transition-colors">
                Read The FAQs
              </button>
            </div>

            <div className="w-full lg:w-2/3 space-y-4">
              <FAQItem 
                question="Get started with Formex" 
                answer="Sapien tempor sodales and quaerat ipsum congue in turpis laoreet neque auctor vitae feugiat dolor luctus placerat and bibendum ligula cursus purus vitae auctor fringilla"
                isOpen={true}
              />
              <FAQItem 
                question="Manage privacy settings" 
                answer="Aliquam nullam tempor malesuada a sapien gravida donec porta congue ipsum tempor a lacus suscipit auctor in habitant egestas."
              />
              <FAQItem 
                question="Do you offer a trial?" 
                answer="Yes, we offer a 14-day free trial with no credit card required. You can explore all the features before making a decision."
              />
              <FAQItem 
                question="How do I choose a plan?" 
                answer="Our plans are designed to scale with your business. You can start with the basic plan and upgrade at any time as your needs grow."
              />
              <FAQItem 
                question="How do I get help?" 
                answer="Our support team is available 24/7 via live chat and email. We also have a comprehensive knowledge base with tutorials and guides."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Dark gradient background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start your Tokop store today!</h2>
          <p className="text-xl text-slate-300 mb-10">Join the most innovative e-commerce platform and build your business with zero risk.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg shadow-blue-600/30 mb-6">
            Register for Free
          </button>
          <p className="text-sm text-slate-400">No inventory required | Secure transactions</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">TOKOP</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                The most innovative cross-border e-commerce platform. Empowering everyone to start an online store with zero cost and zero risk.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">About</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Discover</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Core Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-600">Plans & Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Community</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Our Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Customers</a></li>
                <li><a href="#" className="hover:text-blue-600">Help & Support</a></li>
                <li><a href="#" className="hover:text-blue-600">Life Chatting</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-sm text-slate-500">
            <p>© 2026. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900">FB</a>
              <a href="#" className="hover:text-slate-900">TW</a>
              <a href="#" className="hover:text-slate-900">IN</a>
              <a href="#" className="hover:text-slate-900">IG</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components for cleaner code

function AccordionItem({ title, content, isOpen: initialOpen = false }: { title: string, content?: string, isOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  return (
    <div className={`border rounded-2xl p-6 transition-colors ${isOpen ? 'border-blue-100 bg-white shadow-sm' : 'border-slate-200 bg-transparent'}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className={`font-bold text-lg ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>{title}</h3>
        {isOpen ? <X className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </div>
      {isOpen && content && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 text-slate-500 leading-relaxed"
        >
          {content}
        </motion.p>
      )}
    </div>
  );
}

function TestimonialCard({ text, name, role }: { text: string, name: string, role: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex text-yellow-400 mb-6">
        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-slate-600 mb-8 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
          <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} />
        </div>
        <div>
          <div className="font-bold text-slate-900">{name}</div>
          <div className="text-sm text-slate-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewBadge({ name, rating }: { name: string, rating: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-bold text-slate-900 flex items-center gap-1">
        {name === 'Trustpilot' && <Star className="w-5 h-5 fill-green-500 text-green-500" />}
        {name}
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex text-yellow-400">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
        </div>
        <span className="font-medium text-slate-700">{rating}</span>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen: initialOpen = false }: { question: string, answer?: string, isOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  return (
    <div className="border-b border-slate-200 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className={`font-bold text-lg ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>{question}</h3>
        {isOpen ? <X className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </div>
      {isOpen && answer && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 text-slate-500 leading-relaxed pr-8"
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
}
