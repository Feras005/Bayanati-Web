import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";
import { Shield, Lock, Database, CheckCircle, FileCheck, Users } from "lucide-react";

const services = [
  {
    icon: Lock,
    title: "Secure Data Transfer",
    description: "Enterprise-grade secure data exchange with end-to-end encryption, ensuring sensitive information remains protected throughout the transfer process between SMEs and corporations."
  },
  {
    icon: Shield,
    title: "Permission-Based Sharing",
    description: "Granular access control and permission management that gives you complete control over who can access your data and when, with full audit trails."
  },
  {
    icon: Database,
    title: "Data Standardization",
    description: "Convert diverse data formats into standardized, verified formats that meet industry requirements and ensure compatibility across systems."
  },
  {
    icon: CheckCircle,
    title: "Data Verification",
    description: "Comprehensive data validation and verification processes that ensure accuracy and credibility, building trust between SMEs and financial institutions."
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit",
    description: "Full regulatory compliance support with detailed audit logs, helping both SMEs and enterprises meet data protection and financial regulations."
  },
  {
    icon: Users,
    title: "Data Consulting",
    description: "Expert guidance on secure data sharing strategies, helping you maximize the value of trusted data exchange while maintaining security and compliance."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive secure data exchange solutions designed to enable trusted collaboration between SMEs and enterprises.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How Bayanati Works
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A seamless, secure process for trusted data exchange
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect & Verify</h3>
              <p className="text-slate-400">
                SMEs and enterprises join the platform with verified identities and security credentials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure Exchange</h3>
              <p className="text-slate-400">
                Data is encrypted, standardized, and shared through permission-based access controls.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Unlock Opportunities</h3>
              <p className="text-slate-400">
                SMEs gain credibility for financing while enterprises mitigate risk through verified data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
