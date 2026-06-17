import { useEffect, useMemo, useState } from 'react'

const DEFAULT_WA =
  'https://wa.me/919928764042?text=Hello%20Shiv%20Om%20Industries%2C%20I%20am%20interested%20in%20your%20stone%20products.'

function App() {
  const [page, setPage] = useState('home')
  const [isNavScrolled, setIsNavScrolled] = useState(false)
  const [modalIndex, setModalIndex] = useState(null)

  const products = useMemo(
    () => [
      {
        num: '01',
        nameText: 'Sandstone Blocks',
        name: (
          <>
            Sandstone <em>Blocks</em>
          </>
        ),
        bg: 'linear-gradient(160deg,#8B6347,#C4956A,#6B4A2A)',
        desc: 'Our signature product — hand polished, calibrated Rajasthan sandstone blocks available in machine cut or hand cut finish. Ideal for construction, cladding, and bespoke architectural features.',
        specs: [
          ['Finish', 'Hand Polished · Machine Cut · Hand Cut'],
          ['Application', 'Flooring · Flagstone · Pool Coping · Cladding'],
          ['Colours', 'Buff · Yellow · Pink · Red · Brown'],
          ['Custom Size', 'Yes — available on order'],
        ],
      },
      {
        num: '02',
        nameText: 'Basalt Stone',
        name: (
          <>
            Basalt <em>Stone</em>
          </>
        ),
        bg: 'linear-gradient(160deg,#2a2a2a,#3d3d3d,#1a1a1a)',
        desc: 'Sourced directly from Bigod, our basalt is one of the densest natural stones — prized for its uniform dark tone, exceptional hardness, and contemporary aesthetic.',
        specs: [
          ['Price', 'Starting ₹75 – ₹80 / sq.ft.'],
          ['Application', 'Exterior Paving · Pool Decks · Wall Cladding'],
          ['Colour', 'Deep Charcoal · Dark Grey'],
          ['Source', 'Bigod, Bhilwara, Rajasthan'],
        ],
      },
      {
        num: '03',
        nameText: 'Natural Sandstone ',
        name: (
          <>
            Sandstone <em>Sandstone</em>
          </>
        ),
        bg: 'linear-gradient(160deg,#d4c4a4,#e8d8b8,#a89474)',
        desc: 'Polished sandstone tiles in multi-sizes, calibrated for precision installation. Available unpolished for rustic interiors or polished for premium hotel and residential use.',
        specs: [
          ['Finish', 'Polished · Unpolished · Brushed'],
          ['Application', 'Interior Flooring · Hotel Lobbies · Restaurants'],
          ['Thickness', '18mm · 20mm · Custom'],
          ['MOQ', '100 sq.ft. (negotiable for bulk)'],
        ],
      },
      {
        num: '04',
        nameText: 'Sand Cobblestones',
        name: (
          <>
            Sand <em>Cobblestones</em>
          </>
        ),
        bg: 'linear-gradient(160deg,#7a6a55,#c4a882,#4a3828)',
        desc: 'Traditionally hand-shaped cobblestones that bring old-world character to modern landscapes. Used in garden paths, driveways, courtyards, and heritage restoration.',
        specs: [
          ['Shape', 'Natural · Semi-dressed · Uniform'],
          ['Application', 'Driveways · Garden Paths · Heritage'],
          ['Colours', 'Multi-colour · Buff · Brown'],
          ['Supply', 'By the tonne or pallet'],
        ],
      },
    ],
    [],
  )

  const showPage = (name) => {
    setPage(name)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openModal = (i) => setModalIndex(i)
  const closeModal = () => setModalIndex(null)

  useEffect(() => {
    const onScroll = () => setIsNavScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const overlayOpen = modalIndex !== null
    document.body.style.overflow = overlayOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalIndex])

  const modalProduct = modalIndex !== null ? products[modalIndex] : null
  const modalWaLink =
    modalProduct == null
      ? DEFAULT_WA
      : `https://wa.me/919928764042?text=${encodeURIComponent(
          `Hello Shiv Om Industries, I am interested in your ${modalProduct.nameText}. Please share pricing and availability.`,
        )}`

  return (
    <>
      <nav id="mainNav" className={isNavScrolled ? 'scrolled' : ''}>
        <div className="nav-logo" onClick={() => showPage('home')}>
          SHIV <span>OM</span>
        </div>
        <div className="nav-links">
          <a
            className={page === 'home' ? 'active' : ''}
            onClick={() => showPage('home')}
          >
            Home
          </a>
          <a
            className={page === 'about' ? 'active' : ''}
            onClick={() => showPage('about')}
          >
            About
          </a>
          <a
            className={page === 'products' ? 'active' : ''}
            onClick={() => showPage('products')}
          >
            Products
          </a>
          <a
            className={page === 'projects' ? 'active' : ''}
            onClick={() => showPage('projects')}
          >
            Projects
          </a>
          <a
            className={page === 'contact' ? 'active' : ''}
            onClick={() => showPage('contact')}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════ HOME ═══════════════════════════════ */}
      <div className={`page ${page === 'home' ? 'active' : ''}`} id="page-home">
        <section className="hero" style={{ padding: 0 }}>
          <div className="hero-left">
            <div className="hero-eyebrow">Est. 2015 · Bigod, Bhilwara, Rajasthan</div>
            <h1 className="hero-title">
              Natural
              <br />
              Stone
              <br />
              <em>Crafted</em>
              <br />
              to Last
            </h1>
            <p className="hero-sub">
              From the ancient quarries of Rajasthan, we source and supply premium
              sandstone, basalt, and cobbles — to architects, developers, and designers
              worldwide.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: 20,
              }}
            >
              <button className="hero-cta-solid" onClick={() => showPage('products')}>
                EXPLORE PRODUCTS &nbsp;→
              </button>
              <button
                className="hero-cta-outline"
                onClick={() => window.open(DEFAULT_WA, '_blank')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </button>
            </div>

            <div className="hero-info-bar">
              <a
                href="https://maps.google.com/?q=RIICO+Industrial+Area+Bigod+Bhilwara"
                target="_blank"
                rel="noreferrer"
                className="hero-info-item"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                View on Maps
              </a>
              <a href="tel:+919928764042" className="hero-info-item">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +91 9928764042
              </a>
              <div className="hero-info-item">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Bhilwara, Rajasthan, India
              </div>
            </div>

            <div className="hero-stats">
              <div>
                <span className="stat-num">10+</span>
                <span className="stat-label">Years in Stone</span>
              </div>
              <div>
                <span className="stat-num">500+</span>
                <span className="stat-label">Projects Supplied</span>
              </div>
              <div>
                <span className="stat-num">20+</span>
                <span className="stat-label">Countries Served</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="stone-texture" />
          </div>

          <div className="hero-ghost">STONE</div>
        </section>

        <div className="marquee-strip">
          <div className="marquee-inner">
            Sandstone Tiles <span>·</span> Sandstone Blocks <span>·</span> Basalt Stone{' '}
            <span>·</span> Sandstone Slabs <span>·</span> Cobblestones <span>·</span>{' '}
            Stone Steps <span>·</span> Cladding <span>·</span> Pool Coping{' '}
            <span>·</span> Flagstone <span>·</span> Sandstone Tiles <span>·</span>{' '}
            Sandstone Blocks <span>·</span> Basalt Stone <span>·</span> Sandstone Slabs{' '}
            <span>·</span> Cobblestones <span>·</span> Stone Steps <span>·</span>{' '}
            Cladding <span>·</span> Pool Coping <span>·</span> Flagstone <span>·</span>
          </div>
        </div>

        <section style={{ padding: 0, background: 'var(--dark)' }}>
          <div style={{ padding: '80px 60px 0' }}>
            <div className="section-eyebrow">Why Shiv Om</div>
            <h2 className="section-title">
              Precision. <em>Heritage.</em> Quality.
            </h2>
          </div>
          <div className="usp-grid" style={{ marginTop: 60 }}>
            <div className="usp-item">
              <div className="usp-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot empty" />
              </div>
              <div className="usp-title">Direct from Quarry</div>
              <div className="usp-text">
                We source directly from Rajasthan&apos;s finest quarries — no middlemen,
                guaranteed provenance, and unmatched consistency.
              </div>
            </div>
            <div className="usp-item">
              <div className="usp-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="usp-title">Custom Cut &amp; Finish</div>
              <div className="usp-text">
                Hand polished, machine cut, calibrated — every order crafted to exact
                specification, in any size or finish.
              </div>
            </div>
            <div className="usp-item">
              <div className="usp-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot empty" />
                <div className="dot empty" />
              </div>
              <div className="usp-title">Global Export Ready</div>
              <div className="usp-text">
                RIICO-registered, export-certified, and trusted by international buyers
                across 20+ countries for over a decade.
              </div>
            </div>
            <div className="usp-item" style={{ borderBottom: 'none' }}>
              <div className="usp-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot empty" />
              </div>
              <div className="usp-title">Weather Resistant</div>
              <div className="usp-text">
                Natural Rajasthan sandstone is engineered by nature for extreme climates
                — UV stable, frost resistant, timeless.
              </div>
            </div>
            <div className="usp-item" style={{ borderBottom: 'none' }}>
              <div className="usp-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="usp-title">Bulk &amp; Project Orders</div>
              <div className="usp-text">
                From boutique residential to large commercial developments — we scale
                seamlessly with your project&apos;s demands.
              </div>
            </div>
            <div className="usp-item" style={{ borderBottom: 'none' }}>
              <div className="usp-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot empty" />
                <div className="dot empty" />
              </div>
              <div className="usp-title">Competitive Pricing</div>
              <div className="usp-text">
                Transparent pricing, no hidden fees. Premium stone at manufacturer-direct
                rates starting ₹75/sq.ft.
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 60px', background: 'var(--black)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 60,
            }}
          >
            <div>
              <div className="section-eyebrow">Our Stone</div>
              <h2 className="section-title">
                Curated <em>Collection</em>
              </h2>
            </div>
            <button className="btn-bracket" onClick={() => showPage('products')}>
              View All Products
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
            <div
              className="coll-card"
              style={{ background: products[0].bg }}
              onClick={() => openModal(0)}
            >
              <div className="coll-card-overlay">
                <div className="coll-card-num">01</div>
                <div className="coll-card-name">Sandstone Blocks</div>
                <div className="coll-card-hint">View Details ↗</div>
              </div>
            </div>
            <div
              className="coll-card"
              style={{ background: products[1].bg }}
              onClick={() => openModal(1)}
            >
              <div className="coll-card-overlay">
                <div className="coll-card-num">02</div>
                <div className="coll-card-name">Basalt Stone</div>
                <div className="coll-card-hint">View Details ↗</div>
              </div>
            </div>
            <div
              className="coll-card"
              style={{ background: products[2].bg }}
              onClick={() => openModal(2)}
            >
              <div
                className="coll-card-overlay"
                style={{
                  background:
                    'linear-gradient(to top,rgba(100,80,40,0.8) 0%,transparent 50%)',
                }}
              >
                <div className="coll-card-num" style={{ color: 'rgba(100,60,20,.6)' }}>
                  03
                </div>
                <div className="coll-card-name" style={{ color: '#2a1a08' }}>
                  Sandstone Tiles
                </div>
                <div className="coll-card-hint">View Details ↗</div>
              </div>
            </div>
            <div
              className="coll-card"
              style={{ background: products[3].bg }}
              onClick={() => openModal(3)}
            >
              <div className="coll-card-overlay">
                <div className="coll-card-num">04</div>
                <div className="coll-card-name">Cobblestones</div>
                <div className="coll-card-hint">View Details ↗</div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div>
            <div className="footer-logo">
              SHIV <span>OM</span> INDUSTRIES
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--muted)',
                marginTop: 8,
                letterSpacing: '.05em',
              }}
            >
              F-7(A), RIICO Industrial Area, Bigod, Bhilwara — 311601
            </div>
          </div>
          <div className="footer-copy">© 2025 Shiv Om Industries. All rights reserved.</div>
        </footer>
      </div>

      {/* ═══════════════════════════════ ABOUT ═══════════════════════════════ */}
      <div className={`page ${page === 'about' ? 'active' : ''}`} id="page-about">
        <div className="about-hero">
          <div className="about-bg-text">ABOUT</div>
          <div className="section-eyebrow" style={{ marginTop: 0 }}>
            Our Story
          </div>
          <h1
            className="section-title"
            style={{ fontSize: 'clamp(48px,8vw,110px)', maxWidth: 700 }}
          >
            Rooted in <em>Rajasthan.</em>
            <br />
            Reaching the World.
          </h1>
        </div>

        <div className="about-split">
          <div className="about-body">
            <p>
              Founded in 2015 by Mr. Rahul Sharma, Shiv Om Industries was born from a
              singular belief — that the ancient stone of Rajasthan, shaped by millions of
              years of geology, deserved to be experienced by the world.
            </p>
            <p>
              Located in the heart of Bigod, Bhilwara — one of India&apos;s richest stone
              belts — we operate from our RIICO-registered facility, combining traditional
              stone-crafting knowledge with modern precision cutting.
            </p>
            <p>
              Every block, slab, tile and cobble that leaves our facility carries the
              character of Rajasthan&apos;s landscape. We do not merely supply stone — we
              supply stories built into surfaces that will outlast generations.
            </p>
            <p>
              Our reach today extends across 20+ countries, serving architects, interior
              designers, hotel groups, and landscaping firms who demand nothing less than
              the finest natural stone available on earth.
            </p>
          </div>
          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-num">10+</div>
              <div className="about-stat-label">Years of Excellence</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">500+</div>
              <div className="about-stat-label">Projects Completed</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">20+</div>
              <div className="about-stat-label">Countries Exported To</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">6</div>
              <div className="about-stat-label">Stone Varieties</div>
            </div>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <div className="value-num">I</div>
            <div className="value-title">Provenance</div>
            <div className="value-text">
              Every stone is traceable to its quarry. We believe in absolute transparency
              about where our material comes from.
            </div>
          </div>
          <div className="value-item">
            <div className="value-num">II</div>
            <div className="value-title">Precision</div>
            <div className="value-text">
              Hand polished or machine cut — every piece is calibrated to specification.
              Consistency is not optional; it is our standard.
            </div>
          </div>
          <div className="value-item">
            <div className="value-num">III</div>
            <div className="value-title">Partnership</div>
            <div className="value-text">
              We think of ourselves as an extension of your project team — responsive,
              flexible, and invested in your outcome.
            </div>
          </div>
        </div>

        <section
          style={{
            padding: '100px 60px',
            borderTop: '1px solid rgba(196,160,106,0.15)',
          }}
        >
          <div className="section-eyebrow">Leadership</div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              marginTop: 48,
            }}
          >
            <div>
              <div
                style={{
                  width: '100%',
                  height: 360,
                  background: 'linear-gradient(160deg,#2a2018,#3d3020,#1a1410)',
                  marginBottom: 28,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(14,13,11,0.8),transparent)',
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 28,
                  fontWeight: 300,
                  marginBottom: 6,
                }}
              >
                Mr. Rahul Sharma
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: 16,
                }}
              >
                Founder &amp; Managing Director
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  maxWidth: 400,
                }}
              >
                With deep roots in Rajasthan&apos;s stone industry and a vision for global
                quality, Rahul has built Shiv Om Industries from a regional supplier into a
                trusted international name.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
              <blockquote
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 'clamp(22px,3vw,36px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                  color: 'var(--stone)',
                  borderLeft: '2px solid var(--gold)',
                  paddingLeft: 32,
                }}
              >
                &quot;Stone is not a material. It is memory, compressed by time. We are
                merely its messengers.&quot;
              </blockquote>
              <div
                style={{
                  marginTop: 32,
                  fontSize: 11,
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  paddingLeft: 34,
                }}
              >
                — Rahul Sharma, Founder
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div>
            <div className="footer-logo">
              SHIV <span>OM</span> INDUSTRIES
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--muted)',
                marginTop: 8,
                letterSpacing: '.05em',
              }}
            >
              F-7(A), RIICO Industrial Area, Bigod, Bhilwara — 311601
            </div>
          </div>
          <div className="footer-copy">© 2025 Shiv Om Industries. All rights reserved.</div>
        </footer>
      </div>

      {/* ═══════════════════════════════ PRODUCTS ═══════════════════════════════ */}
      <div
        className={`page ${page === 'products' ? 'active' : ''}`}
        id="page-products"
      >
        <div style={{ padding: '160px 60px 80px', position: 'relative', overflow: 'hidden' }}>
          <div className="about-bg-text">STONE</div>
          <div className="section-eyebrow">Our Collection</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(48px,8vw,110px)' }}>
            The <em>Stone</em>
            <br />
            Collection
          </h1>
          <div className="divider" />
          <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 480, lineHeight: 1.8 }}>
            Six varieties of natural stone, each with its own character — sourced from
            Rajasthan&apos;s finest geological formations and crafted to your exact
            specification.
          </p>
        </div>

        <div className="products-section" style={{ padding: 0, background: 'var(--dark)' }}>
          <div className="product-row">
            <div className="product-img">
              <div className="product-stone stone-sandstone" />
            </div>
            <div className="product-info">
              <div className="product-num">01</div>
              <h2 className="product-name">
                Sandstone <em>Blocks</em>
              </h2>
              <p className="product-desc">
                Our signature product — hand polished, calibrated Rajasthan sandstone blocks
                available in machine cut or hand cut finish. Ideal for construction,
                cladding, and bespoke architectural features.
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Finish</td>
                    <td>Hand Polished · Machine Cut · Hand Cut · Calibrated</td>
                  </tr>
                  <tr>
                    <td>Application</td>
                    <td>Flooring · Flagstone · Pool Coping · Cladding · Paving</td>
                  </tr>
                  <tr>
                    <td>Colours</td>
                    <td>Buff · Yellow · Pink · Red · Brown</td>
                  </tr>
                  <tr>
                    <td>Custom Size</td>
                    <td>Yes — available on order</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-bracket" onClick={() => showPage('contact')}>
                Enquire Now
              </button>
            </div>
          </div>

          <div className="product-row reverse">
            <div className="product-img">
              <div className="product-stone stone-basalt" />
            </div>
            <div className="product-info">
              <div className="product-num">02</div>
              <h2 className="product-name">
                Basalt <em>Stone</em>
              </h2>
              <p className="product-desc">
                Sourced directly from Bigod, our basalt is one of the densest natural stones
                available — prized for its uniform dark tone, exceptional hardness, and
                contemporary aesthetic.
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>Starting ₹75 – ₹80 / sq.ft.</td>
                  </tr>
                  <tr>
                    <td>Application</td>
                    <td>Exterior Paving · Pool Decks · Wall Cladding · Steps</td>
                  </tr>
                  <tr>
                    <td>Colour</td>
                    <td>Deep Charcoal · Dark Grey</td>
                  </tr>
                  <tr>
                    <td>Source</td>
                    <td>Bigod, Bhilwara, Rajasthan</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-bracket" onClick={() => showPage('contact')}>
                Enquire Now
              </button>
            </div>
          </div>

          <div className="product-row">
            <div className="product-img">
              <div className="product-stone stone-tiles" />
            </div>
            <div className="product-info">
              <div className="product-num">03</div>
              <h2 className="product-name">
                Sandstone <em>Tiles</em>
              </h2>
              <p className="product-desc">
                Polished sandstone tiles in multi-sizes, calibrated for precision installation.
                Available unpolished for rustic interiors or polished for premium hotel,
                office, and residential use.
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Finish</td>
                    <td>Polished · Unpolished · Brushed</td>
                  </tr>
                  <tr>
                    <td>Application</td>
                    <td>Interior Flooring · Hotel Lobbies · Offices · Restaurants</td>
                  </tr>
                  <tr>
                    <td>Thickness</td>
                    <td>18mm · 20mm · Custom</td>
                  </tr>
                  <tr>
                    <td>MOQ</td>
                    <td>100 sq.ft. (negotiable for bulk)</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-bracket" onClick={() => showPage('contact')}>
                Enquire Now
              </button>
            </div>
          </div>

          <div className="product-row reverse">
            <div className="product-img">
              <div className="product-stone stone-cobbles" />
            </div>
            <div className="product-info">
              <div className="product-num">04</div>
              <h2 className="product-name">
                Sandstone <em>Cobbles</em>
              </h2>
              <p className="product-desc">
                Traditionally hand-shaped cobblestones that bring old-world character to modern
                landscapes. Widely used in garden paths, driveways, courtyards, and heritage
                restoration projects.
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Shape</td>
                    <td>Natural · Semi-dressed · Uniform</td>
                  </tr>
                  <tr>
                    <td>Application</td>
                    <td>Driveways · Garden Paths · Heritage Restoration</td>
                  </tr>
                  <tr>
                    <td>Colours</td>
                    <td>Multi-colour · Buff · Brown</td>
                  </tr>
                  <tr>
                    <td>Supply</td>
                    <td>By the tonne or pallet</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-bracket" onClick={() => showPage('contact')}>
                Enquire Now
              </button>
            </div>
          </div>

          <div className="product-row">
            <div
              className="product-img"
              style={{ background: 'linear-gradient(135deg,#9a8465,#c4a882,#6b5440)' }}
            />
            <div className="product-info">
              <div className="product-num">05</div>
              <h2 className="product-name">
                Sandstone <em>Slabs</em>
              </h2>
              <p className="product-desc">
                Large-format unpolished sandstone slabs — raw, expressive, and ideal for feature
                walls, bespoke furniture, and statement architectural installations.
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Finish</td>
                    <td>Unpolished · Natural Split Face</td>
                  </tr>
                  <tr>
                    <td>Application</td>
                    <td>Feature Walls · Countertops · Outdoor Furniture</td>
                  </tr>
                  <tr>
                    <td>Thickness</td>
                    <td>25mm – 50mm · Custom</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>Random &amp; Custom Cut</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-bracket" onClick={() => showPage('contact')}>
                Enquire Now
              </button>
            </div>
          </div>

          <div className="product-row reverse">
            <div
              className="product-img"
              style={{ background: 'linear-gradient(135deg,#5a4a3a,#8a7060,#3a2a1a)' }}
            />
            <div className="product-info">
              <div className="product-num">06</div>
              <h2 className="product-name">
                Stone <em>Steps</em>
              </h2>
              <p className="product-desc">
                Fine-polished sandstone steps with exceptional durability — engineered for both
                interior staircases and exterior use. Each step is cut to specification with a
                smooth, safe finish.
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Finish</td>
                    <td>Fine Polish · Bush Hammered · Natural</td>
                  </tr>
                  <tr>
                    <td>Application</td>
                    <td>Interior Stairs · Exterior Entrance · Garden Steps</td>
                  </tr>
                  <tr>
                    <td>Standard Size</td>
                    <td>100×35×3cm · Custom available</td>
                  </tr>
                  <tr>
                    <td>Durability</td>
                    <td>Weather resistant · Slip resistant finish</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-bracket" onClick={() => showPage('contact')}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <footer>
          <div>
            <div className="footer-logo">
              SHIV <span>OM</span> INDUSTRIES
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--muted)',
                marginTop: 8,
                letterSpacing: '.05em',
              }}
            >
              F-7(A), RIICO Industrial Area, Bigod, Bhilwara — 311601
            </div>
          </div>
          <div className="footer-copy">© 2025 Shiv Om Industries. All rights reserved.</div>
        </footer>
      </div>

      {/* ═══════════════════════════════ PROJECTS ═══════════════════════════════ */}
      <div
        className={`page ${page === 'projects' ? 'active' : ''}`}
        id="page-projects"
      >
        <div style={{ padding: '160px 60px 80px', position: 'relative', overflow: 'hidden' }}>
          <div className="about-bg-text">EXPORT</div>
          <div className="section-eyebrow">Global Reach</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(48px,8vw,110px)' }}>
            Projects &amp;
            <br />
            <em>Export</em>
          </h1>
          <div className="divider" />
          <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 500, lineHeight: 1.8 }}>
            From boutique hotels in Bali to residential estates in Europe — Shiv Om stone travels
            the world, one project at a time.
          </p>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-card-img">
              <div
                className="project-stone-img"
                style={{
                  background: 'linear-gradient(160deg,#8B6347,#C4956A,#D4A574,#6B4A2A)',
                  height: '100%',
                }}
              />
            </div>
            <div className="project-card-body">
              <div className="project-location">Rajasthan, India</div>
              <div className="project-title-card">Heritage Hotel Restoration</div>
              <p className="project-desc-card">
                Floor-to-ceiling sandstone cladding for a 200-year-old haveli conversion into a
                luxury boutique hotel — 8,000 sq.ft. of custom-cut buff sandstone.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-img">
              <div
                className="project-stone-img"
                style={{
                  background: 'linear-gradient(160deg,#2a2a2a,#3d3d3d,#222)',
                  height: '100%',
                }}
              />
            </div>
            <div className="project-card-body">
              <div className="project-location">Dubai, UAE</div>
              <div className="project-title-card">Luxury Villa Complex</div>
              <p className="project-desc-card">
                Basalt stone pool decking and exterior paving for a private villa development — 12,000
                sq.ft. of Bigod basalt, polished and delivered on schedule.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-img">
              <div
                className="project-stone-img"
                style={{
                  background: 'linear-gradient(160deg,#d4c4a4,#e8d8b8,#a89474)',
                  height: '100%',
                }}
              />
            </div>
            <div className="project-card-body">
              <div className="project-location">London, UK</div>
              <div className="project-title-card">Garden &amp; Landscape Design</div>
              <p className="project-desc-card">
                Sandstone cobbles and flagstone for a premium residential landscaping project in South Kensington — multi-colour Rajasthan blend.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-img">
              <div
                className="project-stone-img"
                style={{
                  background: 'linear-gradient(160deg,#7a6a55,#9a8870,#4a3828)',
                  height: '100%',
                }}
              />
            </div>
            <div className="project-card-body">
              <div className="project-location">Bali, Indonesia</div>
              <div className="project-title-card">Resort &amp; Spa Interiors</div>
              <p className="project-desc-card">
                Sandstone tiles and feature wall slabs for a 5-star resort spa — warm buff tones selected to complement the tropical landscape setting.
              </p>
            </div>
          </div>
        </div>

        <div className="export-strip">
          <div className="export-inner">
            <div>
              <div className="section-eyebrow">Worldwide Export</div>
              <h2 className="section-title">
                Stone That
                <br />
                <em>Travels</em>
              </h2>
              <div className="divider" />
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 400 }}>
                We handle export documentation, customs compliance, and freight logistics — making
                international procurement of natural stone effortless for buyers worldwide.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: 20,
                }}
              >
                Countries We Export To
              </div>
              <div className="export-countries">
                <div className="country-tag">UAE</div>
                <div className="country-tag">United Kingdom</div>
                <div className="country-tag">USA</div>
                <div className="country-tag">Germany</div>
                <div className="country-tag">France</div>
                <div className="country-tag">Australia</div>
                <div className="country-tag">Indonesia</div>
                <div className="country-tag">Singapore</div>
                <div className="country-tag">Canada</div>
                <div className="country-tag">Netherlands</div>
                <div className="country-tag">Saudi Arabia</div>
                <div className="country-tag">+ More</div>
              </div>
              <div style={{ marginTop: 48 }}>
                <button className="btn-bracket" onClick={() => showPage('contact')}>
                  Request Export Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div>
            <div className="footer-logo">
              SHIV <span>OM</span> INDUSTRIES
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--muted)',
                marginTop: 8,
                letterSpacing: '.05em',
              }}
            >
              F-7(A), RIICO Industrial Area, Bigod, Bhilwara — 311601
            </div>
          </div>
          <div className="footer-copy">© 2025 Shiv Om Industries. All rights reserved.</div>
        </footer>
      </div>

      {/* ═══════════════════════════════ CONTACT ═══════════════════════════════ */}
      <div
        className={`page ${page === 'contact' ? 'active' : ''}`}
        id="page-contact"
      >
        <div style={{ padding: '160px 60px 80px', position: 'relative', overflow: 'hidden' }}>
          <div className="about-bg-text">TALK</div>
          <div className="section-eyebrow">Get in Touch</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(48px,8vw,110px)' }}>
            Let&apos;s Build
            <br />
            <em>Together</em>
          </h1>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-detail">
              <div className="contact-detail-label">Address</div>
              <div className="contact-detail-val">
                F-7(A), RIICO Industrial Area
                <br />
                Bigod, Teh. Mandalgarh
                <br />
                Bhilwara, Rajasthan — 311601
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Managing Director</div>
              <div className="contact-detail-val">Mr. Rahul Sharma</div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Registration</div>
              <div className="contact-detail-val">
                RIICO Registered · GST Verified
                <br />
                Est. 2015
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Export Enquiries</div>
              <div className="contact-detail-val">
                International buyers welcome
                <br />
                All documentation provided
              </div>
            </div>

            <div
              style={{
                marginTop: 60,
                paddingTop: 40,
                borderTop: '1px solid rgba(196,160,106,.15)',
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 24,
                }}
              >
                Also find us on
              </div>
              <div style={{ fontSize: 13, color: 'var(--stone)' }}>
                ExportersIndia · IndiaMART · TradeIndia
              </div>
            </div>
          </div>

          <div className="contact-form-side">
            <div style={{ marginBottom: 40 }}>
              <div className="section-eyebrow">Send an Enquiry</div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginTop: 12 }}>
                Tell us about your project and we&apos;ll respond within 24 hours with pricing and
                availability.
              </p>
            </div>

            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Full name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input type="text" placeholder="Where are you based?" />
            </div>
            <div className="form-group">
              <label>Product Interest</label>
              <select defaultValue="">
                <option value="">Select a product</option>
                <option>Sandstone Blocks</option>
                <option>Basalt Stone</option>
                <option>Sandstone Tiles</option>
                <option>Sandstone Cobbles</option>
                <option>Sandstone Slabs</option>
                <option>Stone Steps</option>
                <option>Multiple / Custom Order</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Describe your project, quantity needed, and any specific requirements..." />
            </div>
            <button className="submit-btn" type="button">
              Send Enquiry →
            </button>
          </div>
        </div>

        <footer>
          <div>
            <div className="footer-logo">
              SHIV <span>OM</span> INDUSTRIES
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--muted)',
                marginTop: 8,
                letterSpacing: '.05em',
              }}
            >
              F-7(A), RIICO Industrial Area, Bigod, Bhilwara — 311601
            </div>
          </div>
          <div className="footer-copy">© 2025 Shiv Om Industries. All rights reserved.</div>
        </footer>
      </div>

      {/* WhatsApp Float */}
      <button className="wa-float" onClick={() => window.open(DEFAULT_WA, '_blank')} title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>

      {/* Product Modal */}
      <div
        className={`modal-overlay ${modalIndex !== null ? 'open' : ''}`}
        id="productModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={closeModal} type="button">
            ✕
          </button>
          <div className="modal-inner">
            <div className="modal-img" id="modalImg" style={{ background: modalProduct?.bg }} />
            <div className="modal-info">
              <div className="modal-num" id="modalNum">
                {modalProduct?.num ?? ''}
              </div>
              <h2 className="modal-name" id="modalName">
                {modalProduct?.name ?? ''}
              </h2>
              <p className="modal-desc" id="modalDesc">
                {modalProduct?.desc ?? ''}
              </p>
              <table className="spec-table" id="modalSpecs">
                <tbody>
                  {(modalProduct?.specs ?? []).map(([k, v]) => (
                    <tr key={k}>
                      <td>{k}</td>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <button
                  className="hero-cta-solid"
                  onClick={() => {
                    showPage('products')
                    closeModal()
                  }}
                  type="button"
                >
                  See Full Catalog
                </button>
                <button
                  className="hero-cta-outline"
                  onClick={() => window.open(modalWaLink, '_blank')}
                  type="button"
                >
                  WhatsApp Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
