import { EXPERIENCE } from '@/lib/data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A timeline of my professional experience.
          </p>
        </div>
        <div className="relative mt-12">
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"
            aria-hidden="true"
          ></div>
          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.logo;
              return (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Content */}
                  <div
                    className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8 text-left'}`}
                  >
                    <div className={`flex w-full ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <div className={`fade-in-up w-full max-w-md rounded-lg bg-card p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 ${isLeft ? 'text-right' : 'text-left'}`}>
                            <p className="text-sm text-muted-foreground">{item.period}</p>
                            <h3 className="mt-1 text-xl font-bold text-primary">{item.role}</h3>
                            <p className="mt-1 font-semibold">{item.company}</p>
                            <ul className={`mt-2 text-muted-foreground list-disc list-inside ${isLeft ? 'text-right' : 'text-left'}`}>
                            {item.description.split('. ').filter(d => d).map((desc, i) => (
                                <li key={i} className="mb-1">{desc}{desc.endsWith('.') ? '' : '.'}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                  </div>

                  {/* Icon in the middle */}
                  <div className="absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-primary ring-8 ring-background transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </span>
                  </div>

                  {/* Empty div for spacing */}
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
