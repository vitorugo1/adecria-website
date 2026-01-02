export function NewsletterSection() {
  return (
    <section
      className='
        w-full
        bg-[#F8FBFB]
        py-12 px-6
        flex flex-col
        items-center
        justify-center
      '
    >
      <div className='w-full max-w-[345px] flex flex-col gap-8'>
        <h2 className='text-[#162A41] text-center text-[20px] font-medium leading-snug'>
          Gostaria de receber nossos conteúdos por e-mail? Cadastre-se abaixo:
        </h2>
        <form className='flex flex-col gap-4 w-full'>
          <input
            type='text'
            placeholder='Nome completo'
            className='
              w-full
              h-12
              px-6
              rounded-[30px]
              bg-white
              text-[#162A41]
              placeholder-[#4D4D4D80]/75 /* Cor do texto placeholder */
              outline-none
              focus:ring-2 focus:ring-[#32859C]/20 transition-all
              shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]
            '
          />

          <input
            type='email'
            placeholder='E-mail'
            className='
              w-full
              h-12
              px-6
              rounded-[30px]
              bg-white
              text-[#162A41]
              placeholder-[#4D4D4D80]/75 /* Cor do texto placeholder */
              outline-none
              focus:ring-2 focus:ring-[#32859C]/20 transition-all
              shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]
            '
          />

          <div className='flex justify-end mt-2'>
            <button
              type='submit'
              className='
                bg-[#32859C]
                text-white
                text-sm
                py-3 px-8
                rounded-full
                shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]
                hover:brightness-105 transition-all
              '
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
