'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { MapPin } from '@phosphor-icons/react/dist/ssr'

const locations = [
  { name: 'Dirty Sixth', venues: 12, lng: -97.7405, lat: 30.2672, hot: true },
  { name: 'Rainey Street', venues: 8, lng: -97.7380, lat: 30.2560, hot: true },
  { name: 'West Sixth', venues: 6, lng: -97.7530, lat: 30.2700, hot: false },
  { name: 'East Austin', venues: 4, lng: -97.7200, lat: 30.2610, hot: false },
  { name: 'South Congress', venues: 3, lng: -97.7490, lat: 30.2480, hot: false },
  { name: 'The Domain', venues: 5, lng: -97.7320, lat: 30.4020, hot: false },
]

function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    let cancelled = false

    import('maplibre-gl').then((maplibregl) => {
      if (cancelled || !mapContainer.current) return

      // CSS loaded via link tag below

      const map = new maplibregl.default.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            carto: {
              type: 'raster',
              tiles: [
                'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
                'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
                'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
              ],
              tileSize: 256,
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
            },
          },
          layers: [
            {
              id: 'carto-tiles',
              type: 'raster',
              source: 'carto',
              minzoom: 0,
              maxzoom: 19,
            },
          ],
        },
        center: [-97.7431, 30.2972],
        zoom: 11.5,
        minZoom: 10,
        maxZoom: 15,
        attributionControl: false,
        interactive: true,
        dragRotate: false,
        pitchWithRotate: false,
      })

      map.addControl(new maplibregl.default.NavigationControl({ showCompass: false }), 'bottom-right')

      map.on('load', () => {
        // Add location markers
        locations.forEach((loc) => {
          // Create custom marker element
          const el = document.createElement('div')
          el.className = `locations_marker ${loc.hot ? 'is-hot' : ''}`
          el.innerHTML = `
            <div class="locations_marker-pulse"></div>
            <div class="locations_marker-dot"></div>
          `

          // Create popup
          const popup = new maplibregl.default.Popup({
            offset: 16,
            closeButton: false,
            closeOnClick: false,
            className: 'locations_popup',
          }).setHTML(`
            <div class="locations_popup-inner">
              <strong>${loc.name}</strong>
              <span>${loc.venues} venues</span>
            </div>
          `)

          el.addEventListener('mouseenter', () => popup.addTo(map))
          el.addEventListener('mouseleave', () => popup.remove())

          new maplibregl.default.Marker({ element: el })
            .setLngLat([loc.lng, loc.lat])
            .setPopup(popup)
            .addTo(map)
        })
      })

      mapRef.current = map
    })

    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return <div ref={mapContainer} className="locations_maplibre" />
}

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="locations" className="section_locations" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="locations_header">
            <div>
              <motion.p
                initial={{ opacity: 1, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                Locations
              </motion.p>
              <motion.h2
                initial={{ opacity: 1, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Where to find us.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 1 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-color-secondary"
            >
              Austin is just the beginning.
            </motion.p>
          </div>

          <div className="locations_content">
            <div className="locations_map-wrap">
              <MapComponent />
            </div>

            <div className="locations_legend">
              {locations.map((loc) => (
                <div key={loc.name} className="locations_legend-item">
                  <MapPin size={16} weight="fill" className="locations_legend-icon" />
                  <div>
                    <p className="locations_legend-name text-color-primary">{loc.name}</p>
                    <p className="locations_legend-count text-color-secondary">{loc.venues} venues{loc.hot ? ' \u2022 Popular' : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .locations_header { display: flex; flex-direction: column; gap: 8px; margin-bottom: 48px; }
        .locations_header .text-style-label { margin-bottom: 12px; }

        .locations_content { display: grid; grid-template-columns: 1fr; gap: 32px; }

        .locations_map-wrap {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          aspect-ratio: 16 / 10;
        }
        .locations_maplibre {
          width: 100%;
          height: 100%;
        }

        /* MapLibre UI overrides */
        .locations_maplibre .maplibregl-ctrl-group {
          background: var(--color-bg-secondary) !important;
          border: 1px solid var(--color-border) !important;
          border-radius: 8px !important;
        }
        .locations_maplibre .maplibregl-ctrl-group button {
          background: transparent !important;
          border: none !important;
          width: 32px !important;
          height: 32px !important;
        }
        .locations_maplibre .maplibregl-ctrl-group button + button {
          border-top: 1px solid var(--color-border) !important;
        }
        .locations_maplibre .maplibregl-ctrl-group button span {
          filter: invert(1);
        }

        /* Custom markers */
        .locations_marker {
          position: relative;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
        .locations_marker-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #FF006E;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px rgba(255, 0, 110, 0.6);
          transition: transform 0.2s;
        }
        .locations_marker:hover .locations_marker-dot {
          transform: translate(-50%, -50%) scale(1.4);
        }
        .locations_marker-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(255, 0, 110, 0.25);
          transform: translate(-50%, -50%);
          opacity: 0;
        }
        .locations_marker.is-hot .locations_marker-pulse {
          animation: marker-pulse 2s ease-out infinite;
        }
        @keyframes marker-pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }

        /* Popup */
        .locations_popup .maplibregl-popup-content {
          background: var(--color-bg-secondary) !important;
          border: 1px solid var(--color-border) !important;
          border-radius: 10px !important;
          padding: 12px 16px !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
        }
        .locations_popup .maplibregl-popup-tip {
          border-top-color: var(--color-bg-secondary) !important;
        }
        .locations_popup-inner {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .locations_popup-inner strong {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .locations_popup-inner span {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        /* Legend */
        .locations_legend { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .locations_legend-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: 10px; transition: border-color 0.2s; }
        .locations_legend-item:hover { border-color: rgba(255,0,110,0.3); }
        .locations_legend-icon { color: var(--color-accent); flex-shrink: 0; }
        .locations_legend-name { font-size: 0.875rem; font-weight: 600; }
        .locations_legend-count { font-size: 0.75rem; }

        @media (min-width: 768px) {
          .locations_legend { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 992px) {
          .locations_header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
          .locations_content { grid-template-columns: 2fr 1fr; gap: 48px; align-items: start; }
          .locations_legend { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
