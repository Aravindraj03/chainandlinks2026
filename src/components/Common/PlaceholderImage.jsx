import { ImageIcon } from 'lucide-react'

/**
 * Renders real photography when `name` is a resolvable path (starts with "/"),
 * and falls back to a styled brand placeholder otherwise. This lets project
 * data reference real assets under /public/images directly, while sections
 * that don't yet have professional photography (gallery, master-plan layout)
 * still render an on-brand placeholder instead of a broken image.
 */
export default function PlaceholderImage({ name, label, className = '', ratio, rounded = true }) {
  const isRealAsset = typeof name === 'string' && name.startsWith('/')

  if (isRealAsset) {
    return (
      <div
        className={`placeholder-image placeholder-image--real ${rounded ? 'is-rounded' : ''} ${className}`}
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        <img src={name} alt={label || ''} loading="lazy" />
      </div>
    )
  }

  return (
    <div
      className={`placeholder-image ${rounded ? 'is-rounded' : ''} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={label || name}
      data-asset={name}
    >
      <ImageIcon className="placeholder-image__icon" strokeWidth={1.2} />
      <span>{label || name}</span>
    </div>
  )
}
