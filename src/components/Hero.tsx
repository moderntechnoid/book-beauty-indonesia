
import React from 'react';
import { MapPin, Star, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                Temukan Salon 
                <span className="gradient-text block">Kecantikan Terbaik</span>
                di Indonesia
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Platform booking salon terpercaya dengan ribuan salon berkualitas. 
                Booking mudah, layanan terjamin, dan pengalaman kecantikan yang tak terlupakan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-accent text-white hover:opacity-90 px-8 py-6 text-lg">
                <MapPin className="mr-2 h-5 w-5" />
                Cari Salon Terdekat
              </Button>
              <Button size="lg" variant="outline" className="border-primary-300 text-primary-500 px-8 py-6 text-lg">
                Lihat Cara Kerja
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">1000+</div>
                <div className="text-sm text-muted-foreground">Salon Partner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">50K+</div>
                <div className="text-sm text-muted-foreground">Booking Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">4.8★</div>
                <div className="text-sm text-muted-foreground">Rating Platform</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image with Floating Cards */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Salon Beauty Treatment" 
                className="rounded-3xl shadow-rose w-full object-cover"
              />
              
              {/* Floating Cards */}
              <Card className="absolute -top-4 -left-4 p-4 shadow-rose hover-lift bg-white">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Rating Tinggi</div>
                    <div className="text-xs text-muted-foreground">4.9/5 dari 2.5K review</div>
                  </div>
                </div>
              </Card>

              <Card className="absolute -bottom-4 -right-4 p-4 shadow-rose hover-lift bg-white">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Booking Instan</div>
                    <div className="text-xs text-muted-foreground">Konfirmasi dalam 5 menit</div>
                  </div>
                </div>
              </Card>

              <Card className="absolute top-1/2 -right-8 p-3 shadow-rose hover-lift bg-white">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium">Salon Terverifikasi</span>
                </div>
              </Card>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 right-20 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
