
import React from 'react';
import { Search, Calendar, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Cari & Pilih Salon',
      description: 'Temukan salon terdekat dengan filter lokasi, layanan, dan rating terbaik',
      details: 'GPS otomatis mendeteksi lokasi Anda'
    },
    {
      icon: Calendar,
      title: 'Booking Appointment',
      description: 'Pilih tanggal, waktu, dan layanan sesuai kebutuhan Anda',
      details: 'Konfirmasi real-time dalam 5 menit'
    },
    {
      icon: CheckCircle,
      title: 'Nikmati Layanan',
      description: 'Datang ke salon dan nikmati layanan kecantikan berkualitas',
      details: 'Staff profesional & alat modern'
    },
    {
      icon: Star,
      title: 'Review & Rating',
      description: 'Berikan review untuk membantu pengguna lain mendapatkan layanan terbaik',
      details: 'Dapatkan poin reward untuk booking selanjutnya'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Cara <span className="gradient-text">Booking</span> Salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses booking yang mudah dan cepat, hanya dalam 4 langkah sederhana
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <Card className="hover-lift border-rose-100 hover:border-primary-200 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-rose rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-playfair font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="pt-2">
                      <span className="text-xs text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                        {step.details}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-white rounded-2xl p-8 shadow-rose max-w-md mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Siap Untuk <span className="gradient-text">Tampil Cantik?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Mulai perjalanan kecantikan Anda hari ini
            </p>
            <button className="w-full bg-gradient-accent text-white py-4 rounded-xl font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-200">
              Mulai Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
