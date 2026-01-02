export function PartnersGrid() {
  const placeholders = Array.from({ length: 6 });
  return (
    <section className='flex flex-col items-center gap-6 py-16 w-full'>
      <h2 className='text-[#162A41] font-normal text-2xl text-center'>
        Empresas parceiras
      </h2>

      <div className='grid grid-cols-3 gap-3 w-full max-w-[400px] px-4'>
        {placeholders.map((_, index) => (
          <div
            key={index}
            className='
              bg-[#DDE9EA]
              rounded-[16px]
              w-full
              aspect-5/4
            '
          />
        ))}
      </div>
    </section>
  );
}
