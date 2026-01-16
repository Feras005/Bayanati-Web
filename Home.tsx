import { Link } from "react-router";
import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";
import { Shield, Lock, CheckCircle, ArrowRight, Building2, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Secure Data Exchange for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Trusted Growth
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Enabling permission-based data sharing between SMEs and enterprises. Help businesses prove credibility, reduce risk, and unlock access to finance and partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/book-meeting"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700 hover:border-slate-600"
              >
                Book a Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The Challenge
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Small startups and SMEs struggle to access high-value data from large corporations because enterprises fear data leaks and weak security controls.
              </p>
              <p className="text-slate-400 leading-relaxed">
                This lack of trusted data-sharing prevents SMEs from proving credibility, accessing finance, and forming strategic partnerships—limiting growth despite strong fundamentals.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-8 rounded-2xl border border-blue-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Solution
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Bayanati is a secure data exchange platform that standardizes, encrypts, and verifies data to enable trusted, permission-based sharing.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We mitigate corporate fears of data leaks while empowering SMEs to securely prove credibility and unlock financing and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Bayanati?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A trusted platform built on security, transparency, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-slate-400 leading-relaxed">
                  End-to-end encryption and industry-leading security protocols protect sensitive data throughout the exchange process.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Verified & Compliant</h3>
                <p className="text-slate-400 leading-relaxed">
                  Data standardization and verification ensures accuracy, while maintaining full regulatory compliance.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Permission-Based</h3>
                <p className="text-slate-400 leading-relaxed">
                  Full control over who accesses your data and when, with granular permission management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Unlock New Opportunities
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Secure data sharing opens doors for SMEs and reduces risk for enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">For SMEs</h3>
                <p className="text-slate-400 leading-relaxed">
                  Securely prove credibility to banks and financial institutions, unlocking access to financing and strategic partnerships that drive growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">For Enterprises</h3>
                <p className="text-slate-400 leading-relaxed">
                  Share data confidently with verified security controls, reducing risk while enabling collaboration with high-potential SMEs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To enable secure, trusted, and permission-based data sharing between SMEs and enterprises, helping businesses prove credibility, reduce risk, and unlock access to finance and partnerships.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become the leading secure data-sharing infrastructure in the Gulf, empowering SMEs to grow through trust, transparency, and compliant digital collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Enable Secure Data Sharing?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Join the platform that's transforming how SMEs and enterprises collaborate through trusted data exchange.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
