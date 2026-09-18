import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { projectList } from '../../data/projects.js'
import './EnquiryForm.css'

export default function EnquiryForm({
  defaultProject,
  compact = false,
  layout = 'card',
  id,
}) {
  const initialProject = defaultProject || projectList[0].name

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    project: initialProject,
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))

    // Clear field error while typing
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }))
  }

  const validate = () => {
    const errs = {}

    if (!form.name.trim()) {
      errs.name = 'Please enter your name.'
    }

    if (!/^[0-9]{10}$/.test(form.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number.'
    }

    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      errs.email = 'Please enter a valid email.'
    }

    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errs = validate()

    setErrors(errs)

    if (Object.keys(errs).length > 0) {
      return
    }

    setLoading(true)

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      source: form.project,
    }

    try {
      const response = await fetch(
        'https://chainandlinks.com/sendmail.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )

      const result = await response.text()

      console.log('Server response:', result)

      if (response.ok) {
        setSubmitted(true)

        setForm({
          name: '',
          phone: '',
          email: '',
          project: initialProject,
        })

        setTimeout(() => {
          setSubmitted(false)
        }, 6000)
      } else {
        alert('Something went wrong, please try again.')
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error)

      alert(
        'Unable to submit your enquiry. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  /* =========================================
     SUCCESS MESSAGE
  ========================================= */

  if (submitted) {
    return (
      <div
        id={id}
        className={`enquiry-form enquiry-form--success ${
          compact ? 'is-compact' : ''
        } enquiry-form--${layout}`}
      >
        <CheckCircle2 size={36} />

        <h4>Thank you!</h4>

        <p>
          Your enquiry has been received. Our team will
          call you back shortly.
        </p>
      </div>
    )
  }

  /* =========================================
     FORM
  ========================================= */

  return (
    <form
      id={id}
      className={`enquiry-form ${
        compact ? 'is-compact' : ''
      } enquiry-form--${layout}`}
      onSubmit={handleSubmit}
      noValidate
    >

      {/* Header */}
      {!compact && (
        <div className="enquiry-form__head">
          <h3>Enquire Now</h3>

          <p>
            Get in touch for more information
          </p>
        </div>
      )}

      {/* =================================
          NAME
      ================================= */}

      <div className="enquiry-form__field">
        <label htmlFor={`${id}-name`}>
          Name*
        </label>

        <input
          id={`${id}-name`}
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          required
        />

        {errors.name && (
          <span className="enquiry-form__error">
            {errors.name}
          </span>
        )}
      </div>

      {/* =================================
          EMAIL
      ================================= */}

      <div className="enquiry-form__field">
        <label htmlFor={`${id}-email`}>
          Email
        </label>

        <input
          id={`${id}-email`}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Email"
          autoComplete="email"
          aria-invalid={!!errors.email}
        />

        {errors.email && (
          <span className="enquiry-form__error">
            {errors.email}
          </span>
        )}
      </div>

      {/* =================================
          PHONE
      ================================= */}

      <div className="enquiry-form__field">
        <label htmlFor={`${id}-phone`}>
          Phone*
        </label>

        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter Phone Number"
          maxLength="10"
          inputMode="numeric"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          required
        />

        {errors.phone && (
          <span className="enquiry-form__error">
            {errors.phone}
          </span>
        )}
      </div>

      {/* =================================
          SOURCE / PROJECT
      ================================= */}

      <div className="enquiry-form__field">
        <label htmlFor={`${id}-project`}>
          {layout === 'inline' ? 'For' : 'Project'}
        </label>

        <select
          id={`${id}-project`}
          name="project"
          value={form.project}
          onChange={handleChange}
        >
          {projectList.map((p) => (
            <option
              key={p.slug}
              value={p.name}
            >
              For {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* =================================
          SUBMIT
      ================================= */}

      <button
        type="submit"
        className={`btn btn-gold ${
          layout === 'inline' ? '' : 'btn-block'
        }`}
        disabled={loading}
      >
        {loading
          ? 'Submitting...'
          : 'Book a Free Site Visit'}
      </button>

    </form>
  )
}