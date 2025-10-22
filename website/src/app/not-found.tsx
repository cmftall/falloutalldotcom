import { redirect } from 'next/navigation'

export default function NotFound() {
  // For now, always redirect to English
  // In a production app, you might want to detect the locale from the URL
  redirect('/en')
}
