import {
  Building2,
  Droplets,
  TreePine,
  Trophy,
  ShieldCheck,
  Baby,
  Zap,
  ShieldHalf,
  Leaf,
  Flame,
  Waves,
  Sparkles,
  CircleDot,
  Sun,
  Moon,
  CloudRain,
  Dumbbell,
  Gamepad2,
  Footprints,
  Cable,
  Signpost,
  DoorOpen,
  Route,
  BadgeCheck,
  Lamp,
  Squircle,
} from 'lucide-react'

import { useReveal } from '../../hooks/useReveal.js'
import './AmenitiesCarousel.css'

const ICON_RULES = [
  [/clubhouse/i, Building2],
  [/water/i, Droplets],
  [/tree|forest|miyawaki|landscape|garden|park/i, TreePine],
  [/badminton|tennis|football|jogging|cricket|game/i, Trophy],
  [/cctv|security|safe/i, ShieldCheck],
  [/kid|play area|children/i, Baby],
  [/ev charging|charging/i, Zap],
  [/compound|wall|fenc/i, ShieldHalf],
  [/herbal/i, Leaf],
  [/theatre|theater|cinema/i, Flame],
  [/barbecue|bbq/i, Flame],
  [/pet/i, Sparkles],
  [/skating/i, CircleDot],
  [/solar/i, Sun],
  [/stargazing/i, Moon],
  [/storm water|drain/i, CloudRain],
  [/gym|dumbbell/i, Dumbbell],
  [/indoor games|snooker|carrom/i, Gamepad2],
  [/track/i, Footprints],
  [/cabling|cable/i, Cable],
  [/signage|entrance/i, Signpost],
  [/dtcp/i, BadgeCheck],
  [/street light|light/i, Lamp],
  [/road/i, Route],
  [/gated/i, DoorOpen],
  [/pool|swim/i, Waves],
]

function getAmenityIcon(title = '') {
  const match = ICON_RULES.find(([regex]) => regex.test(title))
  return match ? match[1] : Squircle
}

export default function AmenitiesCarousel({ items = [] }) {
  const ref = useReveal()

  return (
    <section className="section amenities-section" ref={ref}>
      <div className="container">

        <div className="amenities-heading reveal">
          <span className="eyebrow">Our Facilities</span>

          <h2 className="section-title">
            Premium Amenities
          </h2>

          <p>
            Thoughtfully designed spaces and facilities for a comfortable,
            active and connected lifestyle.
          </p>
        </div>

        <div className="amenities-grid reveal reveal-delay-1">
          {items.map((item) => {
            const Icon = getAmenityIcon(item.title)

            return (
              <div
                key={item.title}
                className="amenity-card"
              >
                <div className="amenity-card__icon">
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                <div className="amenity-card__content">
                  <h3>{item.title}</h3>
                  <span>Premium Facility</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}