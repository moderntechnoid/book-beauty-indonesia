
import React from 'react';
import { Scissors, Sparkles, Palette, Crown, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Hair Care',
      description: 'Potong rambut, styling, dan perawatan rambut profesional',
      popular: 'Cut & Blow Dry',
      color: 'bg-rose-500'
    },
    {
      icon: Sparkles,
      title: 'Facial Treatment',
      description: 'Perawatan wajah untuk kulit sehat dan berseri',
      popular: 'Deep Cleansing',
      color: 'bg-primary-500'
    },
    {
      icon: Palette,
      title: 'Makeup & Beauty',
      description: 'Makeup profesional untuk acara special Anda',
      popular: 'Wedding Makeup',
      color: 'bg-accent'
    },
    {
      icon: Crown,
      title: 'Nail Art',
      description: 'Manicure, pedicure, dan nail art kreatif',
      popular: 'Gel Polish',
      color: 'bg-rose-400'
    },
    {
      icon: Heart,
      title: 'Body Treatment',
      description: 'Spa dan perawatan tubuh yang menyegarkan',
      popular: 'Full Body Massage',
      color: 'bg-primary-400'
    },
    {
      icon: Star,
      title: 'Bridal Package',
      description: 'Paket lengkap kecantikan untuk hari bahagia',
      popular: 'Pre-Wedding',
      color: 'bg-accent/80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Layanan <span className="gradient-text">Kecantikan</span> Terlengkap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari perawatan harian hingga acara special, temukan semua layanan kecantikan 
            yang Anda butuhkan di satu platform
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift cursor-pointer border-rose-100 hover:border-primary-200 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-playfair font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Popular Service Tag */}
                  <div className="pt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-600">
                      Populer: {service.popular}
                    </span>
                  </div>

                  {/* View More Button */}
                  <div className="pt-4">
                    <button className="text-primary-500 font-medium text-sm hover:text-accent transition-colors group-hover:translate-x-1 transform duration-200">
                      Lihat Salon →
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-200">
            Jelajahi Semua Layanan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
