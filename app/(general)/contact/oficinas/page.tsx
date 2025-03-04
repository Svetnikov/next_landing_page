
export default function OficinasPage() {
  return (
    <div>
      <h1 className="text-3xl text-center bg-orange-500 text-white my-3 py-3">UBÍCANOS</h1>

      <div className="flex justify-center">
        <div className=" flex flex-col">

            <span className="text-center">Acérquese a la oficina más cercana a usted. ¡Nuestro personal estará encantado de resolver todas sus dudas!</span>
            <div className="">
                <h1 className="text-3xl text-center bg-orange-500 text-white my-3 py-3">Taquilla Principal</h1>
                <p className="text-xl">Av. Arismendi, al lado de la E/S San Luis.</p>      
            </div>

            <iframe className="h-80 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31390.801167574427!2d-64.22559553523584!3d10.433463840481972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3271ba9980e76d%3A0x9b03b83fd142d695!2sE%2FS%20PDV%20San%20Luis%20de%20Cuman%C3%A1!5e0!3m2!1ses-419!2sve!4v1741115573143!5m2!1ses-419!2sve" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>


      <h1>Brasil</h1>
      <p>Sector 2, en la antigua farmacia Divino Niño.</p>

      <h1>Llanada</h1>
      <p>Av. Principal, frente a la parada de buses.</p>
    </div>
  );
}