import Image from "next/image";

type InputProps = {
  type: string;
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
};

const InputField = ({ type, placeholder, iconSrc, iconAlt }: InputProps) => (
  <div className="flex items-center bg-gray-100 border-gray-200 border rounded-lg px-3 py-2 gap-2">
    <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
    <input
      type={type}
      placeholder={placeholder}
      className="flex-1 outline-none bg-gray-100 text-black placeholder-black"
    />
  </div>
);

const socialProviders = [
  { src: "/google_PNG19635.png", alt: "Google", label: "Google" },
  { src: "/aple.svg", alt: "Apple", label: "Apple ID" },
];

const Page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f3f1]">
      <div className="relative flex bg-white rounded-2xl shadow-md overflow-hidden w-[1000px] h-[600px]">
        <div className="absolute top-4 right-6">
          <p className="text-sm text-gray-500">
            Don’t have an account? <a href="#" className="text-black font-bold">Sign up</a>
          </p>
        </div>
        <div className="flex items-center justify-center bg-[#f9f9f8] w-[420px] h-full rounded-r-3xl">
          <Image
            src="/logo-principal.png"
            alt="logo-principal"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
        <div className="flex flex-1 items-center justify-center px-12">
          <div className="w-full max-w-md flex flex-col">
            <h2 className="text-3xl font-bold text-black mb-2">Sign in</h2>
            <p className="text-sm text-black font-bold mb-6">Sign in with Open account</p>
            <div className="flex gap-3 mb-8">
              {socialProviders.map((p) => (
                <button
                  key={p.label}
                  className="flex-1 flex items-center text-black font-bold justify-center border rounded-lg border-gray-200 py-2"
                >
                  <Image src={p.src} alt={p.alt} width={20} height={20} className="mr-2" />
                  {p.label}
                </button>
              ))}
            </div>
            <p className="text-sm text-black font-bold mb-4">Or continue with email address</p>
            <form className="flex flex-col gap-4">
              <InputField type="email" placeholder="tam@ui8.net" iconSrc="/correo.png" iconAlt="Email" />
              <InputField type="password" placeholder="********" iconSrc="/contrasena.png" iconAlt="Password" />
              <button className="bg-blue-600 text-white py-2 rounded-lg">Start trading</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
