import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />

      <main className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Portrait and contact info */}
            <div className="space-y-8">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <img
                  src="/images/Damian.png"
                  alt="Damian Portrait"
                  className="w-full rounded-3xl"
                />
              </div>

              <div className="text-center lg:text-left space-y-4">
                <p className="text-xl font-medium text-black">
                  Glorydam@mails.com
                </p>
                <p className="text-xl font-medium text-black">
                  +988 0988 98678
                </p>
              </div>
            </div>

            {/* Right side - About content */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-black italic">
                About Damian
              </h1>

              <div className="space-y-6 text-black leading-relaxed">
                <p className="italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vehicula, sapien sed sodales consectetur, risus elit tristique
                  sapien, ac lobortis nunc ante eu leo. Quisque commodo mi
                  augue, sed ultrices turpis condimentum vel. Integer eu urna et
                  turpis molestie auctor. Maecenas placerat, neque in egestas
                  dapibus, lorem nulla efficitur diam, eu commodo metus tellus
                  pharetra ipsum. Integer in turpis non velit luctus eleifend ut
                  sed sem. Sed tincidunt sapien felis, a scelerisque libero
                  blandit ac. Integer sed dolor ante. Sed vulputate nulla
                  mauris, sit amet efficitur est rutrum at. In nec quam sit amet
                  metus volutpat consequat tincidunt vitae justo.
                </p>

                <p className="italic">
                  Vivamus aliquet mi sed leo gravida vehicula. Nunc porttitor
                  ante nibh, sed volutpat est ultrices eget. Etiam nec mauris
                  lorem. Integer auctor eros arcu, nec vestibulum felis
                  facilisis a. Morbi mauris sapien, condimentum nec mattis quis,
                  cursus et ante. Morbi volutpat leo non tortor gravida, at
                  ultrices magna efficitur. Integer sit amet rhoncus leo, a
                  lacinia sem. Sed non tortor ac quam venenatis fringilla.
                  Maecenas at sem lectus. Vestibulum interdum velit vitae
                  dignissim volutpat. Donec sit amet faucibus orci. Phasellus
                  laoreet, nulla ac condimentum efficitur, erat risus rhoncus
                  risus, id gravida odio leo sit amet justo. Integer varius quam
                  vel massa faucibus, viverra maximus nisl placerat.
                </p>
              </div>

              {/* Social media icons */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a href="#" className="text-black hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

              {/* Book session button */}
              <section className="px-8 py-12">
                <div className="max-w-7xl mx-auto">
                  <div className="p-8">
                    <button className="w-[300px] h-[100px] bg-[#F0EBE0] rounded-[18px]  hover:opacity-90 text-black font-medium rounded-md transition-colors underline">
                      Book A Session With Us Now
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-8 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-right">
            <p className="text-sm font-semibold">© 2098 LENS BY DAMIANO</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
