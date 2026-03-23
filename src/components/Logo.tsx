import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2 } from 'lucide-react';

export default function Logo({ className = "" }: { className?: string }) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    const generateLogo = async () => {
      // Check if we already generated and cached the logo
      const cachedLogo = localStorage.getItem('satyaveni_logo');
      if (cachedLogo) {
        setLogoUrl(cachedLogo);
        setIsGenerating(false);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const prompt = "A premium, high-end minimalist logo for 'SATYAVENI BIODERGRADABLE INDUSTRIES'. The design features a central 'Tree of Life' with elegant, organic roots and branches. Encircling the tree are sophisticated, thin metallic 'Saturn-style' rings. Sprouting subtly from the outer rings are a single detailed ear of corn and minimalist compostable bags/packaging covers. The entire emblem has a 3D embossed, aged bronze and brass texture with a very subtle forest green patina for an 'eco-luxury' feel. The background is a clean, dark slate with a soft spotlight. Typography is a prestigious, high-end serif font. The aesthetic is royal, grounded, and innovative, avoiding bright or cartoonish colors in favor of muted, metallic earth tones";

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: prompt }] },
          config: { imageConfig: { aspectRatio: "1:1" } }
        });

        let base64Data = '';
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            base64Data = part.inlineData.data;
            break;
          }
        }

        if (base64Data) {
          const url = `data:image/png;base64,${base64Data}`;
          try {
            localStorage.setItem('satyaveni_logo', url);
          } catch (e) {
            console.warn('Could not save logo to localStorage (might be too large)', e);
          }
          setLogoUrl(url);
        }
      } catch (err) {
        console.error('Failed to generate logo:', err);
        // Fallback to a placeholder if generation fails
        setLogoUrl('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=200');
      } finally {
        setIsGenerating(false);
      }
    };

    generateLogo();
  }, []);

  if (isGenerating) {
    return (
      <div className={`flex items-center justify-center bg-white/[0.05] rounded-full border border-white/[0.1] ${className}`}>
        <Loader2 className="w-1/2 h-1/2 text-brand-gold animate-spin" />
      </div>
    );
  }

  return (
    <img 
      src={logoUrl || ''} 
      alt="Satyaveni Logo" 
      className={`object-cover rounded-full ${className}`}
    />
  );
}
