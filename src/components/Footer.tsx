
import React from 'react';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-rose rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-white">Book Beauty</h3>
                <p className="text-xs text-gray-400">Salon Kecantikan Indonesia</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Platform booking salon kecantikan terpercaya yang menghubungkan Anda 
              dengan salon berkualitas di seluruh Indonesia.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-white">Layanan</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Hair Care</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Facial Treatment</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Makeup & Beauty</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Nail Art</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Body Treatment</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Bridal Package</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-white">Perusahaan</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Bergabung Sebagai Partner</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Press Release</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-white">Kontak</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>hello@bookbeauty.id</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="font-semibold text-white mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email Anda..." 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-primary-400"
                />
                <button className="px-4 py-2 bg-gradient-accent text-white rounded-lg text-sm hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Book Beauty Indonesia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Bantuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
