/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Section1Header from './components/Section1Header';
import Section2Scrapbook from './components/Section2Scrapbook';
import Section3Vault from './components/Section3Vault';

export default function App() {
  return (
    <main className="relative selection:bg-joga-red selection:text-white">
      {/* Global Grainy Texture */}
      <div className="grain-overlay" />
      
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Main Sections */}
      <Section1Header />
      <Section2Scrapbook />
      <Section3Vault />

      {/* Subtle Noise for Sections (optional refinement) */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <svg width="100%" height="100%" className="opacity-[0.03]">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </main>
  );
}
