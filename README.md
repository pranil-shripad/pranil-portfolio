# Pranil Portfolio

A modern personal portfolio built with React, TypeScript, and Vite, featuring an interactive 3D character scene powered by React Three Fiber.

## Overview

This project is a single-page portfolio experience with animated sections and a responsive layout. It combines:

- UI and transitions built with React and GSAP
- 3D rendering using Three.js via React Three Fiber ecosystem
- Lazy-loaded components for better initial load performance
- Desktop/mobile behavior differences for rendering the 3D character

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Three.js + @react-three/fiber + @react-three/drei
- GSAP (+ @gsap/react)
- ESLint

## Features

- Interactive landing and portfolio sections
- Custom cursor and navigation components
- 3D character and environment integration
- Responsive rendering strategy:
  - Desktop: character renders alongside content
  - Mobile/tablet: character is rendered inside landing flow
- Section-based layout:
  - Landing
  - About
  - What I Do
  - Work
  - Tech Stack (desktop)
  - Contact

