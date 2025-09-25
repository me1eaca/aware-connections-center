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
                Aware Connections Center s-a născut din visul nostru de a crea un spațiu unde oamenii să se simtă cu adevărat în siguranță să își exploreze experiențele interioare fără teama de a fi judecați, etichetați sau "reparați". Numele nu a fost ales întâmplător:
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
                Aici, în cabinetele noastre, nu există întrebări "prea personale", emoții "prea intense" sau povești "prea complicate". Există doar ființe umane curajoase care vor să trăiască autentic, să iubească și să se conecteze cu ele însele.
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

      {/* Abordarea EFT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Abordarea noastră - Terapia Centrată pe Emoții
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              Fie că lucrăm cu cupluri sau cu indivizi, această metodă oferă un cadru terapeutic profund umanist. Dezvoltată în anii '80 de către Sue Johnson, abordarea se bazează pe teoria atașamentului.
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Principiile EFT care ne ghidează:</h4>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h5 className="font-bold text-blue-900 mb-3">🎯 Pune emoția în centru</h5>
                <p className="text-gray-700">recunoaștem că emoțiile tale au sens</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h5 className="font-bold text-green-900 mb-3">🤝 Este colaborativă și non-judicativă</h5>
                <p className="text-gray-700">te întâlnim acolo unde ești</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h5 className="font-bold text-purple-900 mb-3">🔄 Urmărește schimbarea tiparelor</h5>
                <p className="text-gray-700">nu doar simptomele superficiale</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h5 className="font-bold text-orange-900 mb-3">📊 Este validată și structurată</h5>
                <p className="text-gray-700">bazată pe cercetare științifică</p>
              </div>
            </div>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">Cum funcționează Terapia Centrată pe Emoții</h4>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Această abordare se bazează pe înțelegerea că problemele din viața noastră - fie că vorbim despre conflicte în cuplu, anxietate, depresie sau dificultăți în relații - apar adesea din nevoi emoționale neîmplinite și tipare de interacțiune care ne îndepărtează de conexiunea autentică.
              </p>
              <p className="mb-4">
                Teoria atașamentului ne arată că suntem făcuți pentru conexiune și siguranță emoțională. Când aceste nevoi fundamentale nu sunt satisfăcute, dezvoltăm strategii de protecție care, în timp, pot deveni problematice.
              </p>
              <p>
                În terapie, te ajutăm să înțelegi aceste tipare și să descoperi modalități noi, mai sănătoase de a-ți satisface nevoile emoționale - fie în relația de cuplu, fie în relația cu tine însuți. Scopul este să construiești conexiuni mai sigure și mai satisfăcătoare, să îți reglezi mai bine emoțiile și să dezvolți un sentiment mai solid de sine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misiunea */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-8">Misiunea noastră</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            La Aware Connections Center, folosim Terapia Centrată pe Emoții ca un vehicul pentru a facilita vindecarea, a aprofunda înțelegerea de sine și a celorlalți, și a construi fundația pentru relații mai conștiente și mai împlinitoare – atât cu partenerul de viață, cât și cu propria persoană.
          </p>
        </div>
      </section>

      {/* Promisiuni */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Promisiunea noastră pentru tine
            </h3>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Nu îți promitem că va fi ușor.</strong> Vindecarea și creșterea autentică necesită curaj, timp și angajament. Îți promitem că nu vei fi singur în acest proces și că vei avea alături călăuze care înțeleg din experiență proprie cât de provocatoare și cât de frumoasă poate fi călătoria către un sine autentic.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Nu îți promitem că vei fi "vindecat" complet.</strong> Îți promitem că vei dezvolta o relație diferită cu propriile experiențe și că vei căpăta instrumente cu care să navighezi prin inevitabilele provocări ale vieții cu înțelepciune, compasiune și în conexiune cu tine.
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Nu îți promitem că nu vei mai avea probleme.</strong> Îți promitem că vei putea discerne între durere și suferință, pentru că "Durerea este inevitabilă, suferința este opțională". În terapie, deschidem părți dureroase pentru a permite vindecării să se întâmple - și da, acest proces poate fi inconfortabil la început. Dar această durere temporară este durerea vindecării, nu a distrugerii.
                </p>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl border-2 border-purple-200">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  <strong>Îți promitem că vei fi văzut, auzit și acceptat exact așa cum ești tu</strong> - nu după ce te vei "îmbunătăți", nu după ce vei fi "vindecat", ci acum, în întreaga ta complexitate umană.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Primul pas către versiunea ta cea mai autentică
            </h3>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed mb-8">
              <p className="mb-4">
                Primul pas nu trebuie să fie perfect. Nu trebuie să știi exact ce vrei să lucrezi sau să ai toate obiectivele formulate clar. Nu trebuie să fii "pregătit" pentru schimbare sau să ai toate problemele identificate și organizate.
              </p>
              <p className="text-lg font-medium text-blue-600 mb-6">
                Poți doar să îți faci curaj să spui: "Am nevoie de sprijin! Vreau să trăiesc autentic! Sunt pregătit sau pregătită să încep această călătorie!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="text-lg text-gray-700 space-y-3">
                <p>✨ <strong>Nu e prea târziu să începi.</strong></p>
                <p>✨ <strong>Nu e prea devreme să ceri ajutor.</strong></p>
                <p>✨ <strong>Nu ești prea complicat sau prea simplu.</strong></p>
                <p className="text-blue-600 font-medium">Ești exact persoana pe care destinul a pregătit-o să întâlnească călătoria noastră de ghidare.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl mb-8">
              <div className="text-lg space-y-3">
                <p>💙 <strong>Meriți fericirea nu la un moment dat, ci acum!</strong></p>
                <p>🌟 <strong>Meriți să ai relații care îți hrănesc sufletul, nu care îl epuizează!</strong></p>
                <p>💚 <strong>Meriți să te iubești cu aceeași blândețe cu care ai iubi pe cel mai drag om din viața ta!</strong></p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-medium hover:bg-blue-700 transition-colors shadow-lg mb-4">
                Programează prima întâlnire
              </button>
              <p className="text-2xl font-bold text-gray-900">
                🏠 Bun venit acasă la tine însuți!
              </p>
              <p className="text-xl text-blue-600 font-medium">
                Bun venit la Aware Connections Center!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>office@awareconnections.eu</span>
                </p>
                
                <div className="space-y-4">
                  <p className="text-white font-medium">Scrie-ne direct pe WhatsApp:</p>
                  
                  {/* Simple WhatsApp Contact Buttons */}
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/+40728954712" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 p-4 rounded-lg transition-colors group no-underline"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👩‍⚕️</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">Cristina</p>
                        <p className="text-sm text-green-100">Click pentru WhatsApp</p>
                      </div>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                        </svg>
                      </div>
                    </a>
                    
                    <a 
                      href="https://wa.me/+40726281554" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 p-4 rounded-lg transition-colors group no-underline"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👨‍⚕️</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">Cosmin</p>
                        <p className="text-sm text-green-100">Click pentru WhatsApp</p>
                      </div>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                
                <p className="flex items-center space-x-2 mt-4">
                  <span>📍</span>
                  <span>Călărași, Str. Grivița 78</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span>Online și în cabinetele noastre</span>
                </p>
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