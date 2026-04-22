'use client'

import { useMemo, useState } from 'react'
import { personalInfo } from '../data/portfolio'

type FormState = {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false,
  })

  const errors = useMemo(() => {
    return {
      name: values.name.trim() ? '' : 'Please add your name.',
      email: /\S+@\S+\.\S+/.test(values.email) ? '' : 'Please use a valid email address.',
      message: values.message.trim().length >= 12 ? '' : 'Please write a short message with at least 12 characters.',
    }
  }, [values])

  const isValid = Object.values(errors).every((value) => !value)

  const updateField = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!isValid) return

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`)
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={submitForm} className="rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur-md sm:rounded-[32px] sm:p-6">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#f3dbc7]">Quick contact</p>
        <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
          Minimal fields, clear validation, and a direct email handoff so reaching out feels frictionless.
        </p>
      </div>

      <div className="grid gap-4">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/55">Name</span>
          <input
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, name: true }))}
            className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#f3dbc7]"
            placeholder="Your name"
          />
          {touched.name && errors.name && <p className="mt-2 text-xs text-[#ffb2b2]">{errors.name}</p>}
        </label>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/55">Email</span>
          <input
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, email: true }))}
            className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#f3dbc7]"
            placeholder="name@example.com"
          />
          {touched.email && errors.email && <p className="mt-2 text-xs text-[#ffb2b2]">{errors.email}</p>}
        </label>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/55">Message</span>
          <textarea
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, message: true }))}
            rows={5}
            className="w-full resize-none rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#f3dbc7]"
            placeholder="Tell me a little about the project, role, or collaboration."
          />
          {touched.message && errors.message && <p className="mt-2 text-xs text-[#ffb2b2]">{errors.message}</p>}
        </label>
      </div>

      <button
        type="submit"
        className="hover-trigger mt-6 inline-flex w-full justify-center rounded-full bg-[#f3dbc7] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
      >
        Start Conversation
      </button>
    </form>
  )
}
