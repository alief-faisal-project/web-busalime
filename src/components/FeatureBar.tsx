import { Sparkles, Leaf, BadgePercent } from 'lucide-react';

const features = [
  {
    title: 'Kualitas Terbaik',
    description: 'Formula premium untuk hasil bersih maksimal',
    icon: Sparkles,
  },
  {
    title: 'Aroma Segar',
    description: 'Wangi jeruk nipis yang menyegarkan',
    icon: Leaf,
  },
  {
    title: 'Hemat & Ekonomis',
    description: 'Busa melimpah dengan sedikit sabun',
    icon: BadgePercent,
  },
];

const FeatureBar = () => {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container-section">
        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border">
                  <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[260px] bg-background rounded-xl p-4 shadow-sm border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border">
                      <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;
