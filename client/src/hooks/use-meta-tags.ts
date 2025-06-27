import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';

export function useMetaTags(titleKey: string, descriptionKey: string) {
  const { t, language } = useLanguage();

  useEffect(() => {
    const title = t(titleKey);
    const description = t(descriptionKey);
    
    // Update document title
    document.title = title;
    
    // Update document language
    document.documentElement.lang = language;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [t, language, titleKey, descriptionKey]);
}