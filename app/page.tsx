import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
        <>
            <main className="astro-main">
                <header className="astro-header">
                    <div className="astro-header-flex">
                        <Image
                            src="/logo-astro-club-300x300.png"
                            alt="Astro Club Logo"
                            className="astro-logo"
                            width={64}
                            height={64}
                        />
                        <div>
                            <h1>Astro-Club</h1>
                            <p className="subtitle">Tipps fuer Sternenfreunde</p>
                        </div>
                    </div>
                </header>

                <section className="astro-section podcasts">
                    <h2>
                        Astronomie zum Anhoeren (Podcasts) <span className="emoji">🎧 📻 🌝 ✨</span>
                    </h2>
                    <div className="podcast-list">
                        <div className="podcast-item">
                            <strong>Sternengeschichten</strong> von Florian Freistetter, ca. 15 Minuten pro Folge;
                            <br />
                            <a href="https://sternengeschichten.podigee.io/" target="_blank" rel="noreferrer">
                                https://sternengeschichten.podigee.io/
                            </a>
                        </div>
                        <div className="podcast-item">
                            <strong>Sternzeit</strong> vom ARD Deutschlandfunk, 2-3 Minuten, toll vorm Einschlafen;
                            <br />
                            <a
                                href="https://www.ardaudiothek.de/sendung/sternzeit/21679322/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.ardaudiothek.de/sendung/sternzeit/21679322/
                            </a>
                        </div>
                    </div>
                </section>

                <section className="astro-section apps">
                    <h2>
                        Sternkarten <span className="emoji">💻 🗺️ 🌐 ✨ 🔭 🤩</span>
                    </h2>
                    <h3>Welche Sterne seht ihr gerade? Welche Planeten gibt es z.B. naechsten Monat zu sehen?</h3>
                    <div className="app-list">
                        <div className="app-item">
                            <strong>Stellarium</strong> Web App (laeuft im Browser, kostenlos):
                            <a href="https://stellarium-web.org/" target="_blank" rel="noreferrer">
                                https://stellarium-web.org/
                            </a>
                        </div>
                        <div className="app-item">
                            👉 Tolle Apps fuer Apple und Android Smartphones: <strong>Star Walk 2</strong>{" "}
                            <a
                                href="https://apps.apple.com/de/app/star-walk-2-ads-sternenhimmel/id112481571"
                                target="_blank"
                                rel="noreferrer"
                            >
                                (Apple)
                            </a>{" "}
                            und <strong>Stellarium</strong>{" "}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.noctuasoftware.stellarium_free&hl=de"
                                target="_blank"
                                rel="noreferrer"
                            >
                                (Android)
                            </a>
                        </div>
                    </div>
                </section>

                <section className="astro-section kids-media">
                    <h2>
                        Weltraum-Videos <span className="emoji">📺 💻 🪐 🚀 🤩</span>
                    </h2>
                    <h3>ESA fuer Kinder</h3>
                    <div className="kids-list">
                        <div className="kids-item">
                            z.B. Praxis Abenteuer:{" "}
                            <a href="https://www.esa.int/kids/de/Multimedia" target="_blank" rel="noreferrer">
                                https://www.esa.int/kids/de/Multimedia
                            </a>
                        </div>
                        <div className="kids-item">
                            Im Fernsehen z.B. <strong>Bayern Alpha</strong> (auch im Internet):{" "}
                            <a href="https://www.ardalpha.de/wissen/weltall/index.html" target="_blank" rel="noreferrer">
                                https://www.ardalpha.de/wissen/weltall/index.html
                            </a>
                        </div>
                        <div className="kids-item">
                            Auf Youtube der Kanal <strong>KurzGesagt</strong> (Weltraum und Wissenschaft):{" "}
                            <a href="https://www.youtube.com/@KurzgesagtDE" target="_blank" rel="noreferrer">
                                https://www.youtube.com/@KurzgesagtDE
                            </a>
                        </div>
                        <div className="kids-item">
                            Oder ohne Werbung in der ARD Mediathek:{" "}
                            <a href="https://www.ardmediathek.de/suche/kurzgesagt" target="_blank" rel="noreferrer">
                                https://www.ardmediathek.de/suche/kurzgesagt
                            </a>
                        </div>
                    </div>
                </section>

                <section className="astro-section kids-science-toys">
                    <h2>
                        Teleskope und Wissenschafts-Spielzeug <span className="emoji">🪁 🎠 🚀 🔬 ⚒️</span>
                    </h2>
                    <h3>Weltraumteleskope</h3>
                    <div className="kids-list">
                        <div className="kids-item">
                            Die Firma Bresser in Rhede hat dem Astro-Club ein tolles Teleskop gespendet, das ihr euch mal
                            anschauen koennt:{" "}
                            <a
                                href="https://www.bresser.de/p/bresser-messier-ar-102-600-nano-az-teleskop-4702605"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.bresser.de/shop/teleskope/skywatcher/teleskop-skyliner-114-900-alt-az.html
                            </a>
                        </div>
                        <div className="kids-item">
                            Falls ihr statt eines Linsenteleskops lieber ein Spiegelteleskop haettet (ihr erinnert euch an die
                            Stunde? 😉), das hier ist{" "}
                            <a
                                href="https://www.bresser.de/p/bresser-spica-ii-130-1.000-eq3-spiegelteleskop-mit-smartphone-adapter-sonnenfilter-4630100"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ollis Spiegelteleskop
                            </a>
                            . Wenn ihr bei{" "}
                            <a href="https://www.bresser.de/refurbished/" target="_blank" rel="noreferrer">
                                Bresser in der Refurbished Ecke
                            </a>{" "}
                            stoebert, findet ihr vielleicht auch ein Schnaeppchen.
                        </div>
                        <h3>Experimentierzeug - Spielzeug, das Wissen schafft</h3>
                        <div className="kids-item">
                            <p>
                                Basteln kann man mit allen moeglichen Sachen, alte HelloFresh Kartons, Pralinenschachteln,
                                Alufolie, transparente Puddingbecher, Korken, Holzstaebchen, Gummibaender, Kleber, Schere, Farben
                                usw. Vieles habe ich einfach im 1-Euro-Laden besorgt. Tipp: Gerade in den Monaten vor Weihnachten
                                gibt es dort sehr viele Sternchen und anderen Glitzerkram zu kaufen.
                            </p>
                            <p>Bei AliExpress habe ich ganz tolle Sachen gefunden, z.B.:</p>
                            <ul>
                                <li>
                                    <a
                                        href="https://de.aliexpress.com/item/1005007575636531.html?spm=a2g0o.order_list.order_list_main.326.395e5c5fqUJY0a&gatewayAdapt=glo2deu"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Optik-Experimentierset
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://de.aliexpress.com/item/1005007174545511.html?spm=a2g0o.productlist.main.2.408dCx1nCx1n8r&algo_pvid=e50b03a5-9164-4845-a8f0-86de0dc7f3a9&algo_exp_id=e50b03a5-9164-4845-a8f0-86de0dc7f3a9-1&pdp_ext_f=%7B%22order%22%3A%2267%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%2138.16%2115.59%21%21%21305.52%21124.81%21%402103856417624388277114131e7c0b%2112000039718517909%21sea%21DE%216170053989%21X%211%210%21n_tag%3A-29919%3Bd%3A233070fc%3Bm03_new_user%3A-29895%3BpisId%3A5000000192539320&curPageLogUid=XZiYMeXy6KrZ&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005007174545511%7C_p_origin_prod%3A"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Gyroskop-Kreisel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://de.aliexpress.com/item/1005009077004282.html?spm=a2g0o.detail.pcDetailBottomMoreOtherSeller.18.1feebRBAbRBAKe&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=b2d9b01f-3df3-4d9e-b92c-9eceb0fabbb2&_t=gps-id:pcDetailBottomMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:b2d9b01f-3df3-4d9e-b92c-9eceb0fabbb2,tpp_buckets:668%232846%238107%231934&pdp_ext_f=%7B%22order%22%3A%22154%22%2C%22eval%22%3A%221%22%2C%22sceneId%22%3A%2230050%22%2C%22fromPage%22%3A%22recommend%22%7D&pdp_npi=6%40dis%21EUR%21106.87%2144.39%21%21%21855.64%21355.40%21%40211b615317624386432425506ea541%2112000047830789489%21rec%21DE%216170053989%21XZ%211%210%21n_tag%3A-29919%3Bd%3A233070fc%3Bm03_new_user%3A-29895%3BpisId%3A5000000192109989&utparam-url=scene%3ApcDetailBottomMoreOtherSeller%7Cquery_from%3A%7Cx_object_id%3A1005009077004282%7C_p_origin_prod%3A"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Klemmbaustein Saturn V Mondrakete
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://de.aliexpress.com/item/1005007169617966.html?spm=a2g0o.productlist.main.1.708d55a1Fr8KSv&algo_pvid=87cff8f1-bec9-4e1a-9baa-c75f0d6eb882&algo_exp_id=87cff8f1-bec9-4e1a-9baa-c75f0d6eb882-0&pdp_ext_f=%7B%22order%22%3A%225987%22%2C%22eval%22%3A%221%22%2C%22orig_sl_item_id%22%3A%221005007169617966%22%2C%22orig_item_id%22%3A%221005006873812338%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%213.18%211.59%21%21%2125.46%2112.73%21%40211b819117624388983062259eba77%2112000039685734168%21sea%21DE%216170053989%21X%211%210%21n_tag%3A-29919%3Bd%3A233070fc%3Bm03_new_user%3A-29895&curPageLogUid=rHw5H9O3t3F5&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005007169617966%7C_p_origin_prod%3A1005006873812338"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Handpropeller
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://de.aliexpress.com/item/1005007920446619.html?spm=a2g0o.productlist.main.14.642025bD25bDPB&algo_pvid=75a9ea99-1ef5-4030-a1e6-153336cad957&algo_exp_id=75a9ea99-1ef5-4030-a1e6-153336cad957-13&pdp_ext_f=%7B%22order%22%3A%2236%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%214.13%213.69%21%21%2133.28%2129.73%21%402103849717632914471036745e2d9c%2112000042851676775%21sea%21DE%216170053989%21X%211%210%21n_tag%3A-29919%3Bd%3A233070fc%3Bm03_new_user%3A-29895&curPageLogUid=K6dBils9sOZs&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005007920446619%7C_p_origin_prod%3A"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Raketen- und Astronauten-Ballons
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="astro-section ausflugstipps">
                    <h2>
                        Ausflugstipps<span className="emoji">🚌 🥾 🧭 🔭</span>
                    </h2>
                    <h3>Planetenpfad und Bresser-Sternwarte in Borken</h3>
                    <div className="kids-list">
                        <div className="kids-item">
                            Wart ihr schon mal am Proebstingsee in Borken und seid auf dem{" "}
                            <a
                                href="https://naturpark-hohe-mark.de/ziel/spaziergang-um-den-proebstingsee-borken/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Planetenpfad
                            </a>{" "}
                            gewandert? Der Astro-Club besucht dort gerne die{" "}
                            <a
                                href="https://sternfreunde-borken.de/josef-bresser-sternwarte/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                die Sternwarte der Sternenfreunde
                            </a>
                            . Schaut mal vorbei am{" "}
                            <a
                                href="https://www.google.de/maps/place/Planetenweg+Borken/@51.8382496,6.7961279,16z/data=!4m10!1m2!2m1!1spr%C3%B6bstingsee+planetenpfad!3m6!1s0x47b861003056f9c9:0x14d2993347348418!8m2!3d51.8387224!4d6.8047614!15sChpwcsO2YnN0aW5nc2VlIHBsYW5ldGVucGZhZFocIhpwcsO2YnN0aW5nc2VlIHBsYW5ldGVucGZhZJIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBJENoZERTVWhOTUc5blMwVkpRMEZuVFVOUmMySjZjek5SUlJBQqoBVRABKhAiDHBsYW5ldGVucGZhZCgFMh8QASIbGrwjZrbEDjfroFAU9JlUCUAoGpJX77YxOxLUMh4QAiIacHLDtmJzdGluZ3NlZSBwbGFuZXRlbnBmYWTgAQD6AQUImwEQQA!16s%2Fg%2F11m5zbv8t0?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Planetenpfad!
                            </a>
                        </div>
                    </div>
                </section>

                <section className="astro-section link-tipps">
                    <h2>
                        Links<span className="emoji">⚓️ 🌍 📖 🏄</span>
                    </h2>
                    <h3>Internetseiten mit Thema Astronomie</h3>
                    <div className="kids-list">
                        <div className="kids-item">
                            Das Deutsche Luft- und Raumfahrtzentrum hat tolle{" "}
                            <a href="https://www.dlr.de/de/next/raumfahrt/universum" target="_blank" rel="noreferrer">
                                Astronomie-Seiten
                            </a>
                            .
                        </div>
                    </div>
                </section>

                <section className="astro-section extras-gimmicks">
                    <h2>
                        Extras & Gimmicks<span className="emoji">✨ 🎉 🛸 🪐</span>
                    </h2>
                    <h3>Besondere Features und Spielereien</h3>
                    <div className="kids-list">
                        <div className="kids-item">
                            <a href="zufallszahlen.html">Hier geht&apos;s zum Astro-Gluecksrad</a>.
                        </div>
                    </div>
                </section>
            </main>
            <footer className="astro-footer">
                <p>
                    &copy; 2025 Olli&apos;s Astro Club - Astronomie AG an der Michaelschule in Gross Reken mit{" "}
                    <a href="https://www.schafeld.com" target="_blank" rel="noreferrer">
                        Oliver Schafeld</a>. 
                        <br/>Für Medien und Texte gilt Urheberrecht wie angegeben. Die Website selber ist <a href="https://github.com/schafeld/ollis-astro-club--next-js" target="_blank" rel="noreferrer">Open Source</a>.
                    
                </p>
            </footer>
        </>
  );
}
