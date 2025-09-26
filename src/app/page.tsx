export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">
                Aware Connections Center
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Acasă</a>
              <a href="#despre" className="text-gray-700 hover:text-blue-600 transition-colors">Despre noi</a>
              <a href="#servicii" className="text-gray-700 hover:text-blue-600 transition-colors">Servicii</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Nu există cupluri disfuncționale.
            <br />
            <span className="text-blue-600">Există doar ființe umane curajoase</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            care vor să trăiască autentic, să iubească și să se conecteze cu ele însele.
          </p>
        </div>
      </section>

      {/* Visul Devenit Realitate */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Aware Connections Center - un vis devenit realitate
            </h3>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                Aware Connections Center s-a născut din visul nostru de a crea un spațiu unde oamenii să se simtă cu adevărat în siguranță să își exploreze experiențele interioare fără teama de a fi judecați, etichetați sau &quot;reparați&quot;. Numele nu a fost ales întâmplător:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Aware</h4>
                  <p>pentru că vindecarea începe cu conștientizarea. Nu poți transforma ceea ce nu recunoști. Multe dintre problemele noastre continuă să ne afecteze tocmai pentru că operează sub nivelul conștiinței, ca niște programări automate moștenite din experiențe trecute.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-900 mb-3">Connections</h4>
                  <p>pentru că nu suntem făcuți să existăm în izolare. Vindecarea autentică se întâmplă în relație - cu tine însuți, cu alții, cu viața în general. Chiar și atunci când lucrezi individual, procesul terapeutic e profund relațional.</p>
                </div>
              </div>

              <p className="text-lg text-center italic bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium my-8">
                Aici, în cabinetele noastre, nu există întrebări &quot;prea personale&quot;, emoții &quot;prea intense&quot; sau povești &quot;prea complicate&quot;. Există doar ființe umane curajoase care vor să trăiască autentic, să iubească și să se conecteze cu ele însele.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Echipa */}
      <section id="despre" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Cosmin și Cristina</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Aware Connections Center suntem noi, Cosmin și Cristina. Ca echipă de terapeuți și parteneri în viață, înțelegem profund importanța unei conexiuni sigure și conștiente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chiar dacă folosim în practica noastră diverse forme de terapie, pe care le-am studiat de-a lungul anilor, preferăm perspectiva și tehnicile derivate din <strong>Terapia centrată pe emoții (EFT)</strong> aplicată la indivizi, cupluri și familii. EFT este mai mult decât o tehnică pentru noi - este o filosofie aliniată cu valorile noastre cu care rezonăm profund.
            </p>
          </div>
        </div>
      </section>

      {/* Footer cu Contact */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Aware Connections Center</h4>
              <p className="text-gray-300 leading-relaxed">
                Un spațiu sigur pentru vindecarea emoțională și construirea de conexiuni autentice prin Terapia Centrată pe Emoții.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicii</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Terapia de cuplu (EFT)</li>
                <li>Terapia individuală (EFIT)</li>
                <li>Traumatologie</li>
                <li>Terapia de familie și adolescenți</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-gray-300 space-y-4">
                <p>📧 office@awareconnections.eu</p>
                <p>📍 Călărași, Str. Grivița 78</p>
                <p>🌐 Online și în cabinetele noastre</p>
                
                <div className="space-y-3 mt-6">
                  <p className="text-white font-medium">Contact WhatsApp:</p>
                  
                  <a 
                    href="https://wa.me/+40728954712" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors group"
                    style={{textDecoration: 'none'}}
                  >
                    <span className="text-2xl">👩‍⚕️</span>
                    <div className="flex-1">
                      <p className="font-medium text-white">Cristina</p>
                      <p className="text-sm text-green-100">Click pentru WhatsApp</p>
                    </div>
                    <span className="text-white">💬</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/+40726281554" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors group"
                    style={{textDecoration: 'none'}}
                  >
                    <span className="text-2xl">👨‍⚕️</span>
                    <div className="flex-1">
                      <p className="font-medium text-white">Cosmin</p>
                      <p className="text-sm text-green-100">Click pentru WhatsApp</p>
                    </div>
                    <span className="text-white">💬</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aware Connections Center. Construim conexiuni mai sănătoase.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}