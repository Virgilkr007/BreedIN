import React from 'react';

export function LogoIcon({ width = 36, height = 46 }) {
  return (
    <svg viewBox="90 80 190 240" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f8ef7" /><stop offset="100%" stopColor="#1a4fd6" />
        </linearGradient>
        <linearGradient id="lg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4d7d" /><stop offset="100%" stopColor="#c0195a" />
        </linearGradient>
        <filter id="lg3">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <line x1="148" y1="108" x2="148" y2="292" stroke="url(#lg1)" strokeWidth="4.5" strokeLinecap="round" filter="url(#lg3)" />
      <path d="M148,108 C200,108 242,128 242,168 C242,208 200,200 148,200" fill="none" stroke="url(#lg1)" strokeWidth="4.5" strokeLinecap="round" filter="url(#lg3)" />
      <path d="M148,200 C210,200 258,222 258,248 C258,274 210,292 148,292" fill="none" stroke="url(#lg2)" strokeWidth="4.5" strokeLinecap="round" filter="url(#lg3)" />
      <circle cx="148" cy="108" r="7" fill="#4f8ef7" /><circle cx="148" cy="108" r="3.5" fill="#fff" />
      <circle cx="148" cy="200" r="7" fill="#ff4d7d" /><circle cx="148" cy="200" r="3.5" fill="#fff" />
      <circle cx="148" cy="292" r="7" fill="#e8223a" /><circle cx="148" cy="292" r="3.5" fill="#fff" />
      <circle cx="242" cy="168" r="6" fill="#4f8ef7" /><circle cx="242" cy="168" r="3" fill="#fff" />
      <circle cx="258" cy="248" r="6" fill="#ff4d7d" /><circle cx="258" cy="248" r="3" fill="#fff" />
    </svg>
  );
}

export function AnimatedLogoIcon({ width = 260, height = 340 }) {
  return (
    <svg viewBox="90 80 190 240" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f8ef7" /><stop offset="100%" stopColor="#1a4fd6" />
        </linearGradient>
        <linearGradient id="hg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4d7d" /><stop offset="100%" stopColor="#c0195a" />
        </linearGradient>
        <linearGradient id="hg3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8223a" /><stop offset="100%" stopColor="#ff4d7d" />
        </linearGradient>
        <filter id="hglow">
          <feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="hsglow">
          <feGaussianBlur stdDeviation="7" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Spine */}
      <line x1="148" y1="108" x2="148" y2="292" stroke="url(#hg1)" strokeWidth="4.5" strokeLinecap="round" filter="url(#hglow)" strokeDasharray="184" strokeDashoffset="184">
        <animate attributeName="stroke-dashoffset" from="184" to="0" dur="0.8s" begin="0.3s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
      </line>
      {/* Upper bump */}
      <path d="M148,108 C200,108 242,128 242,168 C242,208 200,200 148,200" fill="none" stroke="url(#hg1)" strokeWidth="4.5" strokeLinecap="round" filter="url(#hglow)" strokeDasharray="200" strokeDashoffset="200">
        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="0.7s" begin="1s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
      </path>
      {/* Lower bump */}
      <path d="M148,200 C210,200 258,222 258,248 C258,274 210,292 148,292" fill="none" stroke="url(#hg2)" strokeWidth="4.5" strokeLinecap="round" filter="url(#hglow)" strokeDasharray="220" strokeDashoffset="220">
        <animate attributeName="stroke-dashoffset" from="220" to="0" dur="0.7s" begin="1.6s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
      </path>
      {/* Inner nested spine */}
      <line x1="168" y1="128" x2="168" y2="270" stroke="url(#hg2)" strokeWidth="2" strokeLinecap="round" strokeDasharray="142" strokeDashoffset="142" opacity="0.4" filter="url(#hglow)">
        <animate attributeName="stroke-dashoffset" from="142" to="0" dur="0.5s" begin="2.3s" fill="freeze" />
      </line>
      {/* Inner upper bump */}
      <path d="M168,128 C196,128 218,142 218,162 C218,182 196,188 168,188" fill="none" stroke="url(#hg1)" strokeWidth="2" strokeLinecap="round" strokeDasharray="130" strokeDashoffset="130" opacity="0" filter="url(#hglow)">
        <animate attributeName="stroke-dashoffset" from="130" to="0" dur="0.5s" begin="2.6s" fill="freeze" />
        <animate attributeName="opacity" from="0" to="0.5" dur="0.5s" begin="2.6s" fill="freeze" />
      </path>
      {/* Inner lower bump */}
      <path d="M168,204 C204,204 228,218 228,238 C228,258 204,270 168,270" fill="none" stroke="url(#hg3)" strokeWidth="2" strokeLinecap="round" strokeDasharray="140" strokeDashoffset="140" opacity="0" filter="url(#hglow)">
        <animate attributeName="stroke-dashoffset" from="140" to="0" dur="0.5s" begin="2.9s" fill="freeze" />
        <animate attributeName="opacity" from="0" to="0.5" dur="0.5s" begin="2.9s" fill="freeze" />
      </path>
      {/* Bridges */}
      <line x1="148" y1="108" x2="242" y2="168" stroke="#4f8ef7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5,7" opacity="0">
        <animate attributeName="opacity" from="0" to="0.3" dur="0.4s" begin="3.3s" fill="freeze" />
      </line>
      <line x1="148" y1="200" x2="258" y2="248" stroke="#ff4d7d" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5,7" opacity="0">
        <animate attributeName="opacity" from="0" to="0.28" dur="0.4s" begin="3.6s" fill="freeze" />
      </line>
      {/* Top node */}
      <circle cx="148" cy="108" r="12" fill="#4f8ef7" opacity="0" filter="url(#hsglow)">
        <animate attributeName="opacity" values="0;0.25;0.12" dur="0.6s" begin="1.1s" fill="freeze" />
        <animate attributeName="r" values="0;14;12" dur="0.6s" begin="1.1s" fill="freeze" />
      </circle>
      <circle cx="148" cy="108" r="0" fill="#4f8ef7">
        <animate attributeName="r" values="0;9;7" dur="0.5s" begin="1.1s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="148" cy="108" r="0" fill="#fff">
        <animate attributeName="r" values="0;5;3.5" dur="0.5s" begin="1.2s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="148" cy="108" r="7" fill="none" stroke="#4f8ef7" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="7;22;7" dur="2.2s" begin="1.7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" begin="1.7s" repeatCount="indefinite" />
      </circle>
      {/* Mid node */}
      <circle cx="148" cy="200" r="12" fill="#ff4d7d" opacity="0" filter="url(#hsglow)">
        <animate attributeName="opacity" values="0;0.25;0.12" dur="0.6s" begin="1.7s" fill="freeze" />
        <animate attributeName="r" values="0;14;12" dur="0.6s" begin="1.7s" fill="freeze" />
      </circle>
      <circle cx="148" cy="200" r="0" fill="#ff4d7d">
        <animate attributeName="r" values="0;9;7" dur="0.5s" begin="1.7s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="148" cy="200" r="0" fill="#fff">
        <animate attributeName="r" values="0;5;3.5" dur="0.5s" begin="1.8s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="148" cy="200" r="7" fill="none" stroke="#ff4d7d" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="7;22;7" dur="2.2s" begin="2.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" begin="2.3s" repeatCount="indefinite" />
      </circle>
      {/* Bottom node */}
      <circle cx="148" cy="292" r="12" fill="#e8223a" opacity="0" filter="url(#hsglow)">
        <animate attributeName="opacity" values="0;0.25;0.12" dur="0.6s" begin="2.3s" fill="freeze" />
        <animate attributeName="r" values="0;14;12" dur="0.6s" begin="2.3s" fill="freeze" />
      </circle>
      <circle cx="148" cy="292" r="0" fill="#e8223a">
        <animate attributeName="r" values="0;9;7" dur="0.5s" begin="2.3s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="148" cy="292" r="0" fill="#fff">
        <animate attributeName="r" values="0;5;3.5" dur="0.5s" begin="2.4s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="148" cy="292" r="7" fill="none" stroke="#e8223a" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="7;22;7" dur="2.2s" begin="2.9s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" begin="2.9s" repeatCount="indefinite" />
      </circle>
      {/* Arc nodes */}
      <circle cx="242" cy="168" r="0" fill="#4f8ef7">
        <animate attributeName="r" values="0;8;6" dur="0.5s" begin="1.65s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="242" cy="168" r="0" fill="#fff">
        <animate attributeName="r" values="0;4;3" dur="0.5s" begin="1.75s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="242" cy="168" r="6" fill="none" stroke="#4f8ef7" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="6;18;6" dur="2.4s" begin="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" begin="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="258" cy="248" r="0" fill="#ff4d7d">
        <animate attributeName="r" values="0;8;6" dur="0.5s" begin="2.2s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="258" cy="248" r="0" fill="#fff">
        <animate attributeName="r" values="0;4;3" dur="0.5s" begin="2.3s" fill="freeze" calcMode="spline" keySplines="0.34 1.56 0.64 1" />
      </circle>
      <circle cx="258" cy="248" r="6" fill="none" stroke="#ff4d7d" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="6;18;6" dur="2.4s" begin="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" begin="2.8s" repeatCount="indefinite" />
      </circle>
      {/* Spine shimmer */}
      <line x1="148" y1="108" x2="148" y2="292" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0" strokeDasharray="30,160">
        <animate attributeName="opacity" values="0;0;0.18;0" dur="3.5s" begin="4s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="184;0" dur="3.5s" begin="4s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}
