
import React, { useState } from 'react';
import { Search, MapPin, Menu, X, User, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-rose rounded-xl flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-primary-500">Book Beauty</h1>
              <p className="text-xs text-muted-foreground">Salon Kecantikan Indonesia</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Cari salon atau layanan..." 
                className="pl-10 bg-muted/50 border-rose-200 focus:border-primary-400"
              />
            </div>
            <Button variant="outline" size="sm" className="border-rose-200 text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              Jakarta
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary-500 transition-colors font-medium">
              Salon Partner
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-500 transition-colors font-medium">
              Bantuan
            </a>
            <Button variant="outline" className="border-primary-300 text-primary-500 hover:bg-primary-50">
              Masuk
            </Button>
            <Button className="bg-gradient-accent text-white hover:opacity-90">
              Daftar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Cari salon atau layanan..." 
              className="pl-10 bg-muted/50 border-rose-200"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-muted-foreground hover:text-primary-500 transition-colors font-medium">
                Salon Partner
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-500 transition-colors font-medium">
                Bantuan
              </a>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" className="flex-1 border-primary-300 text-primary-500">
                  Masuk
                </Button>
                <Button className="flex-1 bg-gradient-accent text-white">
                  Daftar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
