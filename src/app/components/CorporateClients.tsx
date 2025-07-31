'use client';

const CorporateClients = () => {
  return (
    <section className="bg-[#f6f8fc] py-12 px-6 md:px-20">
      <div className="mx-auto">
        {/* Title */}
        <div className="flex items-center justify-start gap-4 mb-10">
          <h3 className="text-xs tracking-widest text-gray-500 uppercase">Corporate Clients</h3>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-400 text-lg tracking-widest font-medium">
          <div>LOGO</div>
          <div>LOGO</div>
          <div>LOGO</div>
          <div>LOGO</div>
        </div>
      </div>
    </section>
  );
};

export default CorporateClients;
