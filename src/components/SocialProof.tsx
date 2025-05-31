import React from 'react';
import { Star, TrendingDown, Eye, BarChart3, LineChart } from 'lucide-react';

const SocialProof: React.FC = () => {
  // Define testimonials with updated information and correct client photos
  const testimonials = [
    {
      id: 1,
      name: "Oscar Patel",
      mrr: "$70k MRR",
      quote: "I already feel so much more clarity on how we are going to reduce our churn.",
      // Image 1 - casual photo with sunglasses
      image: "/oscar-patel.jpg"
    },
    {
      id: 2,
      name: "Max Cord",
      mrr: "$20k MRR",
      quote: "Liam built me a system and it changed everything. Now I can see it all: Cancelled, Declined, Churned. We finally have clarity. We finally have control.",
      // Image 2 - professional headshot
      image: "/max-cord.jpg"
    },
    {
      id: 3,
      name: "Braiden Shaw",
      mrr: "$50k MRR",
      quote: "This is super insightful and helpful Liam thank you! Crazy how stuff starts to make sense when you zoom out and look at the numbers",
      // Image 3 - professional business photo
      image: "/braiden-shaw.jpg"
    },
    {
      id: 4,
      name: "Calvin Hollywood",
      mrr: "$100k+ MRR",
      quote: "Liam helped me evaluate my metrics for my community and I can absolutely recommend working with him.",
      // Image 4 - Skool branded photo
      image: "/calvin-hollywood.jpg"
    }
  ];

  // Define outcomes
  const outcomes = [
    {
      id: 1,
      title: "10% Churn Reduction",
      subtitle: "in 30 Days",
      icon: <TrendingDown className="h-8 w-8 text-primary" />
    },
    {
      id: 2,
      title: "Complete Visibility",
      subtitle: "Transformation",
      icon: <Eye className="h-8 w-8 text-primary" />
    },
    {
      id: 3,
      title: "Cross-Platform",
      subtitle: "Integration Success",
      icon: <BarChart3 className="h-8 w-8 text-primary" />
    },
    {
      id: 4,
      title: "Strategic Metrics",
      subtitle: "Evaluation",
      icon: <LineChart className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section className="bg-dark-lighter py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Trusted by <span className="text-primary !text-xl sm:!text-2xl md:!text-3xl">Top-Performing</span> Coaches & Community Leaders
          </h2>
          <div className="flex justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-700 border-2 border-dark-lighter flex items-center justify-center">
                  <span className="text-xs font-medium">{i}</span>
                </div>
              ))}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary border-2 border-dark-lighter flex items-center justify-center">
                <span className="text-xs font-medium">5+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials - stack on mobile, 2x2 grid on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card group testimonial-card">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  {/* Client photo */}
                  <div className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 italic mb-3 md:mb-4 text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-1 md:mb-0">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.mrr}</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome boxes - 2 per row on mobile, 4 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {outcomes.map((outcome) => (
            <div key={outcome.id} className="card bg-gradient-to-br from-dark-card to-dark-light border-primary/20 flex items-center justify-center p-3 md:p-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2 md:mb-3">
                  {outcome.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1">{outcome.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">{outcome.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
