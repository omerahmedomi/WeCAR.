import React ,{useEffect}from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import  {MapPin,Car,Users,Globe,Truck,Wrench} from 'lucide-react'


const services = [
  {
    icon: <MapPin size={32} />,
    title: "Airport Pickup & Drop (Bole & Beyond)",
    description:
      "We offer hassle-free pickups and drop-offs at major airports like Bole International. Our drivers wait on time so you don’t have to deal with taxi lines or fare haggling.",
  },
  {
    icon: <Car size={32} />,
    title: "Self-Drive & Chauffeur Options",
    description:
      "Prefer to drive yourself or sit back and relax? You can choose either. We provide both self-drive options and reliable local drivers who know the roads and routes well.",
  },
  {
    icon: <Users size={32} />,
    title: "Event & Wedding Car Rentals",
    description:
      "Planning a wedding or special event? Rent luxury sedans, SUVs, or vans with or without a driver. Make your day stand out with a premium ride fit for the occasion.",
  },
  {
    icon: <Globe size={32} />,
    title: "Intercity & Long-Distance Travel",
    description:
      "Need to travel to Bahir Dar, Hawassa, or Gonder? We offer vehicles suited for long-distance and rough roads. Perfect for road trips, work assignments, or family travel.",
  },
  {
    icon: <Truck size={32} />,
    title: "Car Rental for NGOs & Companies",
    description:
      "We work with NGOs, embassies, and businesses to provide short and long-term rentals with service contracts. All paperwork is handled professionally and fast.",
  },
  {
    icon: <Wrench size={32} />,
    title: "Well-Maintained Cars with Fuel Options",
    description:
      "Our cars are regularly serviced and road-tested. You can choose full tank, half tank, or return-as-you-got-it policies. No hidden fees, no breakdowns.",
  },
];


const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <Header />

      <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500" >
        <h2 className="text-3xl font-bold text-center mb-10 font-grenze pt-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 font-eczar">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow-md rounded-xl p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-all duration-500"
            >
              <div className="text-cyan-600 dark:text-cyan-200">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OurServices