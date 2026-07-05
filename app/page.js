'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowDown, ArrowUpRight, MessageCircle, Heart } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20ingin%20memesan%20undangan%20digital%20di%20PortalUndangan';

export default function PortalUndangan() {
  const [kat, setKat] = useState('Semua');
  const kategoris = ['Semua', ...new Set(templates.map((t) => t.kategori))];
  const list = kat === 'Semua' ? templates : templates.filter((t) => t.kategori === kat);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-goldu/30 bg-creamu/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl">
            <span className="segel grid h-9 w-9 place-items-center rounded-full text-creamu"><Mail size={15} /></span>
            PortalUndangan
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full bg-roseu px-5 py-2 text-sm font-bold text-creamu transition hover:bg-inku">
            Pesan Undangan
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-16 pb-12 text-center sm:px-6">
        <span className="floaty absolute left-[8%] top-16 font-display text-2xl text-goldu/50" aria-hidden="true">✦</span>
        <span className="floaty absolute right-[10%] top-28 font-display text-xl text-roseu/40" style={{ animationDelay: '1.4s' }} aria-hidden="true">❦</span>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl">
          <p className="ornamen text-xs uppercase">— Dengan hormat mengundang —</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.12] sm:text-6xl">
            Setiap momen berharga,<br />layak <span className="italic text-roseu">diundang dengan indah</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-mutedu">
            Delapan undangan digital dengan karakter berbeda — dari akad yang khidmat sampai pesta yang meriah. Dibuka seperti amplop, dibagikan lewat satu tautan.
          </p>
          <a href="#koleksi" className="bingkai mt-9 inline-flex items-center gap-2 rounded-none bg-creamu px-8 py-3.5 font-display text-sm tracking-wide text-inku transition hover:bg-goldu/10">
            Buka Koleksi <ArrowDown size={15} />
          </a>
        </motion.div>
      </section>

      {/* Pembatas ornamen */}
      <div className="ornamen mx-auto max-w-lg pb-4 text-center text-goldu/60">✦ ✦ ✦</div>

      {/* Koleksi */}
      <section id="koleksi" className="scroll-mt-24 px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {kategoris.map((k) => (
              <button
                key={k}
                onClick={() => setKat(k)}
                aria-pressed={kat === k}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${kat === k ? 'bg-inku text-creamu' : 'border border-goldu/40 text-mutedu hover:border-roseu hover:text-roseu'}`}
              >
                {k}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((t, i) => (
                <motion.article
                  key={t.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: (i % 4) * 0.07, duration: 0.5 } }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="group text-center"
                >
                  <a href={t.url} aria-label={`Lihat undangan ${t.momen}`} className="relative block">
                    {/* Kartu undangan berbingkai */}
                    <div className="bingkai relative overflow-hidden bg-white p-2 transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_40px_-18px_rgba(59,49,41,0.4)]">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image src={t.image} alt={`Preview undangan ${t.momen}`} fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover object-top" priority={i < 4} />
                      </div>
                    </div>
                    {/* Segel lilin */}
                    <span className="segel absolute -top-3 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full font-display text-[10px] text-creamu transition group-hover:rotate-12">
                      {t.momen[0]}
                    </span>
                  </a>
                  <p className="ornamen mt-4 text-[10px] uppercase">{t.kategori}</p>
                  <h3 className="mt-1 font-display text-2xl">{t.momen}</h3>
                  <p className="mx-auto mt-1.5 max-w-[15rem] text-sm text-mutedu">{t.description}</p>
                  <a href={t.url} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-roseu underline-offset-4 hover:underline">
                    Buka undangan <ArrowUpRight size={14} />
                  </a>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-goldu/25 bg-inku px-4 py-16 text-center text-creamu sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-xl">
          <span className="segel mx-auto grid h-14 w-14 place-items-center rounded-full text-creamu"><Heart size={20} /></span>
          <h2 className="mt-6 font-display text-3xl leading-snug md:text-4xl">Momen spesialmu berikutnya?</h2>
          <p className="mt-3 text-creamu/60">Nama, tanggal, dan cerita — kami rangkai jadi undangan yang tak terlupakan. Selesai dalam 1–2 hari.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-roseu px-8 py-4 text-sm font-bold text-creamu transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Pesan via WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="bg-inku px-4 py-5 text-center text-xs text-creamu/40">
        © {new Date().getFullYear()} PortalUndangan · Sanzystore Dev — merangkai undangan sejak dalam pikiran.
      </footer>
    </div>
  );
}
